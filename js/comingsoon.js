
$(document).ready(function(){


	jQuery( '#infowindow' ).hide();

	function initialize() {

		var styles = [
		{
			stylers: [ 
			{ "color": "#f5f5f5" },
			{ saturation: -100 }
			]
		},{
			featureType: "road", 
			elementType: "geometry",
			stylers: [
               { color: "#8ee5ee" },

               { visibility: "simplified" }
               ]
          },

          { "elementType": "labels",
          "stylers": [
          {
             "visibility": "off"
        }
        ]
   },

   {
        featureType: "water", 
        elementType: "geometry",
        stylers: [
        { color: "#c9c9c9" },
			// { lightness: 250 },
			{ visibility: "simplified" }
			]
		},

		// {
		// 	featureType: "road",
		// 	elementType: "labels",
		// 	stylers: [
  //             {color: "#99FFFF"} ,
  //        //Turns off road labels. 
  //        { visibility: "simplified" }
  //        ]
  //    }
  ];

  var map_options = {
      center: new google.maps.LatLng(38.625, -90.3),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 13,
      panControl: false,
      zoomControl: true,
      scaleControl: true,
      streetViewControl: false,
      styles: styles,
      mapTypeControl: true,
      mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE],
       style: google.maps.MapTypeControlStyle.DEFAULT,
       position: google.maps.ControlPosition.TOP_RIGHT
  }
};

map = new google.maps.Map(document.getElementById("mapCanvas"), map_options);

map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

var image = {
 url: 'images/ABMarker6.png',
};



var mcOptions = {
	gridSize: 30,
	styles: clusterStyles,
	maxZoom: 15
};

var bounds = new google.maps.LatLngBounds();
var infoWindow = new google.maps.InfoWindow();
var gmarkers = [];
var marker, i;

for (i = 0; i < markers.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(markers[i][1], markers[i][2]),
		map: map,
		icon: image,
		title: [0],
		url:markers[i][3]
	     		// zIndex: markers[i][3],
	     	});
	bounds.extend(marker.getPosition());


//Infobox appear and disappear ///////////////////// 



google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
	return function () {  
		jQuery( '#infowindow' ).show();
		jQuery( '#infowindow' ).empty();
		jQuery( '#infowindow' ).append( content[i][0] );					
	}
})(marker, i));
gmarkers.push(marker);

google.maps.event.addListener(marker, 'click', function() {
	window.location.href = this.url;
});

google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
	return function () {  
		jQuery( '#infowindow' ).hide();					
	}
})(marker, i));
gmarkers.push(marker);




};
var mc = new MarkerClusterer(map, gmarkers, mcOptions);
map.fitBounds(bounds);
};
google.maps.event.addDomListener(window, 'load', initialize);


//Menu Move Map Canvas ///////////////////// 



$('.menuFloatInt').mouseover(function() {
	$(this).css({"font-style": "italic"});          
});


$('.menuFloatInt').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});          
});



$('.menuFloatSites').mouseover(function() {
	$(this).css({"font-style": "italic"});          
});


$('.menuFloatSites').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});    
});

$('.menuFloatAbout').mouseover(function() {
	$(this).css({"font-style": "italic"});           
});


$('.menuFloatAbout').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});  
});



$('.menuFloatInt').on('click touchstart', function() { 
	$('#mapContainer').animate({width: '80%', height: "100%", top: "0%"}, 300); 
	$('#listItineraries').animate({opacity: '1'}, 800);  
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"});   
});

$('.menuFloatSites').on('click touchstart', function() {
	$('#mapContainer').animate({height: '80%', width: "100%", top: '0%'}, 300);  
	$('#sitesContain').animate({opacity: '1'}, 800);
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"});     
});

$('.menuFloatAbout').on('click touchstart', function() {
	$('#mapContainer').animate({height: '75%', width: "100%", top: '25.5%', }), 300;
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.about').animate({opacity: '1'}, 300);   
	$('.logo').animate({opacity: '1'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"});

});

$('.close').on('click touchstart', function() { 
	$('#mapContainer').animate({top: '0%', left: "0%", height: '100%', width: "100%", }, 300);
	$(this).animate({opacity: '0'}, 300);  
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"}); 
});


// $('.splashClose').on('click touchstart', function() {
// 	$(this).animate({opacity: '0'}, 300);
// 	$('.splashDescription').animate({opacity: '0'}, 300);
// 	$('.splashDescription').css({"z-index": '-10'}, 300); 
// });

//==============splashPage only appear once================
$(document).on('ready', checkSplash);

function checkSplash(){
	var visit = sessionStorage.getItem("visit");
	
	sessionStorage.setItem("visit", "true");
    //once the mouse is clicked the <splashClose>
    $(".splashClose").on('click touchstart', function(){
         //get the variable value from local storage and compare it
         $(this).animate({opacity: '0'}, 300);
         $('.splashDescription').animate({opacity: '0'}, 300);
         $('.splashDescription').css({"z-index": '-10'}, 300); 	
         if(visit === "true") {
         	sessionStorage.setItem("visit", "false");
         } 

    });
    if (visit === "false"){
    	$('.splashClose').animate({opacity: '0'}, 5);
    	$('.splashDescription').animate({opacity: '0'}, 5);
    	$('.splashDescription').css({"z-index": '-10'}, 5); 
    	sessionStorage.setItem("visit", "false");
    }
}

$('.home').click('click touchstart', function() {
	$('.menu').animate({opacity: '1'}, 120); 
	$('.menuLinks').animate({opacity: '1'}, 120); 
	$('.menuLinks').css({"z-index": '-10'}, 120); 
	$(this).animate({opacity: '0'}, 300);
	$(this).css({"z-index": '1000'}, 120);

	$('.homeClose').animate({opacity: '1'}, 300);
	$('.homeClose').css({"z-index": '2000'}, 120); 
});

$('.homeClose').click('click touchstart', function() {
	$('.menu').animate({opacity: '0'}, 120); 
	$('.menuLinks').animate({opacity: '0'}, 120); 
	$('.menuLinks').css({"z-index": '-10'}, 120); 
	$(this).animate({opacity: '0'}, 300);  
	$(this).css({"z-index": '1000'}, 120);  
	$('.home').animate({opacity: '1'}, 300);
	$('.home').css({"z-index": '2000'}, 120); 
});

// $('.menu').mouseleave('click touchstart', function() {
// 	$('.menuLinks').animate({opacity: '0'}, 120); 
// 	$('.home').animate({opacity: '1'}, 120); 
// });




});

