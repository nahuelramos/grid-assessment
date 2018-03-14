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
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
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