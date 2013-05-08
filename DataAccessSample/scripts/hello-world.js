
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
    //loadManually();
    
	loadWithDatasource();
    
	navigator.splashscreen.hide();
}

function loadManually() {
	$.getJSON("http://coupons.staterbros.com/category/index", function (categories) {
		_(categories).each(function(category) {
			$('#listView').append('<li><a href="#" class="km-listview-link" data-role="listview-link">' + category.CategoryName + '</a></li>');
		});
	});
}

function loadWithDatasource() {
	$.getJSON("http://coupons.staterbros.com/category/index", function (categories) {
        
        // gets a reference to the kendo listview object stored in the listView UL
        var listView = $("#listView").data("kendoMobileListView");
        
        // updates the datasource of the listview
        listView.setDataSource(new kendo.data.DataSource({ data: categories }));
	});
}