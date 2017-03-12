'use strict';

var mysql      = require('mysql');
var _ = require('lodash');



var connection = mysql.createConnection({
  // host     : '52.193.130.192',
  // user     : 'internal_portal',
  // password : 'ruth8dbqkr2c',
  // database : 'deepblu_shop_staging'
  host : 'deepblushop.czlpfyxzwz6l.ap-northeast-1.rds.amazonaws.com',
  user : 'internal_portal',
  password: 'bqu3as6wrwkq',
  database: 'deepblu_shop'
});

connection.connect();

let sql = 'select addresses.email, addresses.country as shippingCountry,' +
          'orders.user_id, customer_roles.name, users.user_name, users.email, '+
          'line_items.qty, variants.sku from line_items ' +
          'left join addresses on addresses.addressable_id = line_items.order_id AND addresses.role = \'shipping\' ' +
          'left join variants on variants.id = line_items.variant_id ' +
          'left join orders on orders.id = line_items.order_id ' +
          'left join users on users.id = orders.user_id ' +
          'left join customer_roles on customer_roles.id = users.customer_role_id ' +
          'where line_items.product_id IN ( select id from products where category_id =1 ) and ' +
          'orders.state in (1, 2, 3, 7) and addresses.addressable_type = \'Order\'';

let sqlTotalSales = 'select sum(line_items.qty) as totalSale from line_items ' +
                    'left join orders on orders.id = line_items.order_id ' +
                    'left join addresses on addresses.addressable_id = line_items.order_id ' +
                    'where orders.state in (1,2,3,7) and ' +
                    'line_items.product_id IN (select id from products where category_id = 1) and ' +
                    'addresses.addressable_type = \'Order\' and addresses.role = \'shipping\'';
connection.query(sqlTotalSales, function(err, rows, fields){
    if(err) throw err;

    console.log('+++++++++++ Total sale amount is +++++++ ');
    console.log(rows);
});

connection.query(sql , function(err, rows, fields) {
    if (err) throw err;

     // get top10 region
    let countryResult = _.groupBy(rows, 'shippingCountry');
    let regionSumResult = [];
    let rIndex = 0;
    _.forEach(countryResult , function(value, region){
        if(region === 'null'){
            return;
        }

        let qtySum = 0;
        _.forEach(value, function(v){
            qtySum += v.qty;
        });

        let regionResult = {
            region : region,
            sale : qtySum
        };
        regionSumResult[rIndex] = regionResult;

        rIndex++ ;
    })
    let regionTop10Final = _.takeRight(_.sortBy(regionSumResult, ['sale', 'region']), 10);

    console.log('============ Top 10 regions ==========');
    console.log(regionTop10Final);

    // get top10 seller(resellor v.s. ambassor)
    let sellerResult = _.groupBy(rows, 'user_id');

    let indiResult = [];
    let resellerSumResult = [];
    let ambassorSruResult = [];

    let indilIndex = 0;
    let resellorIndex = 0;
    let abmbassIndex = 0;

    _.forEach(sellerResult, function(value, seller){
        let qtySum = 0;
        _.forEach(value, function(v){
            qtySum += v.qty;
        });

        let sellerResult = {
            userId: seller,
            totalSale : qtySum,
            history: value,
            role: value[0].name,
            name: value[0].user_name,
            email: value[0].email
        }

        if(value[0].name == 'reseller'){
            resellerSumResult[resellorIndex] = sellerResult;
            resellorIndex++;
        }
        if(value[0].name == 'ambassador'){
            ambassorSruResult[abmbassIndex] = sellerResult;
            abmbassIndex++;
        }

        indiResult[indilIndex] = sellerResult;
        indilIndex++;
    });
    let sallerTop10FinalResult = _.takeRight(_.orderBy(indiResult, ['totalSale'], ['asc']), 10);
    console.log('=========== Individual seller rank ===========');
    console.log(sallerTop10FinalResult);

    console.log('=========== Resseller rank ===========');
    let resellerTop10FinalResult = _.takeRight(_.orderBy(resellerSumResult, ['totalSale'], ['asc']), 10);
    console.log(resellerTop10FinalResult);

    console.log('============ Ambassador rank ==========');
    let ambassadorTop10FinalResult = _.takeRight(_.orderBy(ambassorSruResult, ['totalSale'], ['asc']), 10);
    console.log(ambassadorTop10FinalResult);

});

connection.end();
