$(document).ready(function() {
	
	var id =  'c48639ec0f644899904fd10894aacc96';
	var photoCount = 4;

	$.ajax({
	  type: "GET",
	  dataType: "jsonp",
	  cache: false,
	  url: "https://api.instagram.com/v1/users/1115548949/media/recent?client_id=" + id,
	  success: function(response) {
	  	console.log(response);
	    var length = response.data != 'undefined' ? response.data.length : 0;
	    var limit = photoCount != null && photoCount < length ? photoCount : length;
	    if(limit > 0) {
	      for(var i = 0; i < limit; i++) {
	        $('<img>', {
	          class: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
	          src: response.data[i].images.standard_resolution.url
	        }).appendTo($("#instagram-feed-photos"));
	      }
	    }
	  }
	});
});