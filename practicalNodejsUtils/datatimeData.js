/**
 * Make monthly/weekly/daily data structure for plotly.js to display.
 *
 * @author titus@deepblu.com
 * @since 2017.06
 *
 * @param  {[type]} rowData [description]
 * @param  {[type]} type    [description]
 * @param  {[type]} start   [description]
 * @param  {[type]} end     [description]
 * @return {[type]}         [description]
 */
commonUtil.formatData = function(rowData, type, start, end){
    if('monthly' == type){
        let startYearMonth = moment(start).format('YYYY-MM');
        let endYearMonth = moment(end).format('YYYY-MM');

        let xAxisArray = [startYearMonth];
        let xtemp = moment(startYearMonth).add(1, 'M');
        while( moment(endYearMonth).diff(xtemp) >= 0 ){
            xAxisArray.push(xtemp.format('YYYY-MM'));
            xtemp = moment(xtemp).add(1, 'M');
        }

        let yAxisArray = _.times(xAxisArray.length, _.constant(0));
        _.forEach(rowData , (value, key) => {
            let index = _.findIndex(xAxisArray, function(a){
                return a == value['year_month_number'];
            });
            yAxisArray.splice(index, 1, value['count']);
        });
        return {x: xAxisArray, y: yAxisArray};
    }else if ('weekly' == type){
        let startDate = moment(start).format('YYYY-MM-DD');
        let startYearWeek = moment(start).format('YYYY') + '-' + moment(start).week();
        let endDate = moment(end).format('YYYY-MM-DD');

        let xAxisArray = [startYearWeek];
        let xtemp = moment(startDate).add(1, 'weeks');
        while( moment(endDate).diff( moment(xtemp).add(6 - moment(xtemp).weekday(), 'days') ) >= 0 ){
            xAxisArray.push( moment(xtemp).format('YYYY') + '-' + moment(xtemp).week() );
            xtemp = moment(xtemp).add(1, 'weeks');
        }

        let yAxisArray = _.times(xAxisArray.length, _.constant(0)); // make one array with all zero values
        _.forEach(rowData , (value, key) => {
            let index = _.findIndex(xAxisArray, function(a){
                return a == value['year_week_number'];
            });
            yAxisArray.splice(index, 1, value['count']);
        });
        return {x: xAxisArray, y: yAxisArray};
    }else if ('daily' == type){
        let startDate = moment(start).utcOffset(8).format('YYYY-MM-DD');
        let endDate = moment(end).utcOffset(8).format('YYYY-MM-DD');

        let xAxisArray = [startDate];
        let xtemp = moment(startDate).add(1, 'days');
        while( moment(endDate).diff(moment(xtemp)) >= 0 ){
            xAxisArray.push( moment(xtemp).format('YYYY-MM-DD') );
            xtemp = moment(xtemp).add(1, 'days');
        }

        let yAxisArray = _.times(xAxisArray.length, _.constant(0)); // make one array with all zero values
        let otherAxisArray = _.times(xAxisArray.length, _.constant(0)); // make one array with all zero values

        _.forEach(rowData , (value, key) => {
            let index = _.findIndex(xAxisArray, function(a){
                return a == value['day'];
            });
            yAxisArray.splice(index, 1, value['count']);
            otherAxisArray.splice(index, 1, value['others']);
        });

        return {x: xAxisArray, y: yAxisArray, others: otherAxisArray};
    }
}
