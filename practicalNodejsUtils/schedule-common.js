'use strict';

const Logger = require('./logger');
const logTag = '[schedule-Common]';
const scheduler = require('node-schedule');
const config = require('config');
const axios = require('axios');
const socialAPIDomain = config.get('SocialAPI');
const moment = require('moment');

const scheduleCommon = {};
scheduleCommon.sendNotification = (time, notiConent) => {
    let axiosOption = {
        headers: {"accept-language": "en"},
        method: 'post',
        url: `${socialAPIDomain}/apis/notification/v0/sendNotifFromAtoB`,
        responseType: 'json',
        data: notiConent
    }

    // Delay 10 seconds after publish time to make sure the article is published
    let date = new Date(time).getTime() + 1*1000*10;

    scheduler.scheduleJob(date, function(){
        axios(axiosOption)
            .then(res => {
                if(200 !== res.status){
                    Logger.error(logTag, 'sending');
                }else{
                    Logger.log('send with success response.....');
                }
            }, (res) => {
                Logger.error(res);
            });
    });
}

scheduleCommon.sendSystemNotiByTimeStamp = ( timestamp, notiConent ) => {
    let axiosOption = {
        headers: {"accept-language": "en"},
        method: 'post',
        url: `${socialAPIDomain}/apis/notification/v0/sendNotifFromAtoB`,
        responseType: 'json',
        data: notiConent
    }

    // Delay 3 seconds after publish time to make sure the article is published
    let date = timestamp + 1*1000*3;

    scheduler.scheduleJob(date, function(){
        axios(axiosOption)
            .then(res => {
                if(200 !== res.status){
                    Logger.error(logTag, res);
                }else{
                    Logger.log('send with success response.....');
                }
            }, (res) => {
                Logger.error(res);
            });
    });
}

scheduleCommon.sendSystemNotiofMobileRelease = ( timestamp, notiContent ) => {
    let axiosOption = {
        headers: {"accept-language": "en"},
        method: 'post',
        url: `${socialAPIDomain}/apis/notification/v0/systemNotif`,
        responseType: 'json',
        data: notiConent
    }

    // Delay 3 seconds after publish time to make sure the article is published
    let date = timestamp + 1*1000*3;

    scheduler.scheduleJob(date, function(){
        axios(axiosOption)
            .then(res => {
                if(200 !== res.status){
                    Logger.error(logTag, 'sending');
                }else{
                    Logger.log('send with success response.....');
                }
            }, (res) => {
                Logger.error(res);
            });
    });
}

module.exports = scheduleCommon;
