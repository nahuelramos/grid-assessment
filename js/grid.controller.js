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