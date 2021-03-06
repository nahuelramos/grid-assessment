(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var serviceCaller = require('./service-caller');
$(document).ready(function () {
    $('#submitForm').click(function(event){
        event.preventDefault();
        
        serviceCaller.getGridData($('#startDate').val(), $('#endDate').val(), initDataTable);
    });   

    function initDataTable (data) {
        $('#grid').DataTable({
            data: data.datos,
            rowId: 'veh_id',
            columns: getColumns(data),
            scrollX: true
        });
    };

    function getColumns (columnsSource) {
        var columns = [];   

        columnsSource.cabecera.map(function (column) {
            columns.push({
                title: column.title, 
                data: column.key, 
                visible: column.visible !=0 ? true : false
            });          
        });

        return columns;
    };
});
},{"./service-caller":2}],2:[function(require,module,exports){
var serviceCaller = {
    getGridData: function (startDate, endDate, doneFunction) {
        $.ajax({
            url: 'https://crono.veosat.es/server/informes/test_informe_fecha.php',
            type: 'POST',
            data: {
                f_inicio: startDate,
                f_fin: endDate
            },
            dataType: 'json',
            crossOrigin: true
        })
            .done(function (data) {
                doneFunction(data);
            });
    }
}

$(document).ajaxStart(function(){
    $("#wait").css("display", "block");
});
$(document).ajaxComplete(function(){
    $("#wait").css("display", "none");
});

module.exports = serviceCaller;
},{}]},{},[2,1]);
