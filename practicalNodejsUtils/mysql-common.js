'use strict';

/**
 *
 * It's the MySQL connection client
 *
 * Author: seemo
 * Date: 2016/3/31
 *
 */
const Promise = require('bluebird');
const Config = require('config');
const MySQL = require('mysql');
const _ = require('lodash');
const logTag = '[MySQLCommon]';
const Logger = require('./logger');

class MysqlCommon{
  constructor(option) {
    this._option = option;
    this._pool = {};
  }

  // mysql 初始化
  initial(option) {
    if (option != null) {
      this._option = option;
    }

    this._option.queryFormat = function(query, values) {
      if (!values) return query;
      return query.replace(/\:\:?(\w+)/g, function(txt, key) {
        if (values.hasOwnProperty(key)) {
          if (txt.indexOf('::') == 0) {
            return values[key];
          }
          return this.escape(values[key]);
        }
        return txt;
      }.bind(this));
    };

        //this._option.charset = "UTF8_GENERAL_CI";// this is mysql modules default
        if (Config.get('MySQL.showQuery') === true) {
            this._option.debug = ['ComQueryPacket', 'RowDataPacket'];
        }

    Logger.info('connection to MySQL...');
    let that = this;
    return new Promise(function(resolve, reject) {
      that._pool = MySQL.createPool(that._option);
      that.registEvent();
      that.checkConnect().then(function() {
            resolve();
          })
          .catch(function(err) {
            Logger.error(logTag, 'mysql connection error');
            reject(err);
          });
    });
  };

  // 檢查連線是否正常
  checkConnect() {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._pool.getConnection(function(err,res) {
        if (err) {
          return reject(err);
        }else {
          let msg  = 'MySql is ready.';
          Logger.info(msg)
          return resolve(true);
        }
      });
    });
  }

  // 註冊事件監聽的callback
  registEvent() {
    this._pool.on('error', function(err) {
      Logger.error('mysql---', err.code); // 'ER_BAD_DB_ERROR'
    });
    this._pool.on('connection', function(err,er) {
      //Logger.info('connection event',err,er); // 'ER_BAD_DB_ERROR'
    });
  }

  // 關閉mysql連線
  shutdown() {
    Logger.info('mysql shutdown.');
    let that = this;
    return new Promise(function(resolve, reject) {
      that._pool.end(function(err) {
        if (err) {
          Logger.error(err);
          return reject();
        }
        //Logger.info('close:',that._pool);
        Logger.info('Close MySQL Connection.');
        return resolve();
      });
    });
  }

  // 斷開重連mysql
  restart() {
    return this.shutdown().then(this.initial.bind(this));
  }

  // 執行sql script
  query(tag, sql, params) {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._pool.getConnection(function(err, connection) {
        connection.query(sql, params, function(err, res) {
          if (err) {
            let query = that.format(sql, params);
            Logger.info(logTag, tag, query);
            Logger.info(logTag, tag, err);
            reject(err);
          }else {
            resolve(res);
          }
          connection.release();
        });
      });
    })
  }

  // 執行transaction args: [{tag, sql, params}] 2016-11-24 by titus
 executeTransaction(commandArray){
      let that = this;
      return new Promise(function(resolve, reject){
          that._pool.getConnection(function(err, connection){
              connection.beginTransaction(function(err){
                  if(err){
                      Logger.info('transaction error');
                      reject(err);
                  }else{
                      for (let i = 0, len = commandArray.length; i < len; i++) {
                          if((i + 1) < len){
                              connection.query(commandArray[i].sql, commandArray[i].params, function(err, result){
                                  if(err || result.affectedRows === 0){
                                      connection.rollback();
                                      connection.release();
                                      reject(err);
                                  }
                              });
                          }else{
                              connection.query(commandArray[i].sql, commandArray[i].params, function(err, result){
                                  if(err || (result.affectedRows === 0)){
                                      connection.rollback();
                                      connection.release();
                                      reject(err);
                                  }else{
                                      console.log('last sql command result : ');
                                      console.log(result);

                                      connection.commit(function(err){
                                          if(err){
                                              connection.release();
                                              reject(err);
                                          }else{

                                              connection.release();
                                              resolve(result);
                                          }
                                      });
                                  }
                              });
                          }
                      }
                  }
              });
          });
      });
  }

  // 執行sql script
  multipleQuery(tag, scripts) {
    let that = this;
    let result = [];
    return new Promise(function(resolve, reject) {
        that._pool.getConnection(function(err, connection) {
            Promise.mapSeries(scripts, function(item, index) {
                return that.queryUseSeamConnection(item.sql, item.params, connection);
            })
            .then(function(res) {
                connection.release();
                resolve(res);
            })
            .catch(function(err) {
                Logger.error(err);
                reject(err);
            })
        });
    })
  }

  queryUseSeamConnection(sql, params, connection) {
    let that = this;
    return new Promise(function(resolve,reject) {
      connection.query(sql, params, function(err, res) {
        if (err) {
            console.log('IN WHAT I DONT WANT TO BE ......');

            let query = that.format(sql, params);
            Logger.info(logTag, query);
            Logger.info(logTag,  err);
            reject(err);
        } else {
            resolve(res);
        }
      })
    })
  }


  //格式化sql指令
  format(query, values) {
    if (!values) return query;
    return query.replace(/\:\:?(\w+)/g, function(txt, key) {
        if (values.hasOwnProperty(key)) {
          if (txt.indexOf('::') == 0) {
            return values[key];
          }
          return values[key];
        }
        return txt;
      }.bind(this));
  };

  //將MYSQL JSON 欄位轉回OBJECT 若為NULL 則直接將KEY 刪除
  parseJSONColumn(dataSet, columnName, def){
    if(dataSet[columnName]){
      dataSet[columnName] = JSON.parse(dataSet[columnName]);
    }else{
      dataSet[columnName] = def;
    }
  }

}
module.exports = MysqlCommon;
