
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
          //   featureType: "road",
          //   elementType: "labels",
          //   stylers: [
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


var pinColor = "F15E53";
var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
  new google.maps.Size(21, 34),
  new google.maps.Point(0,0),
  new google.maps.Point(10, 34));
var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
  new google.maps.Size(40, 37),
  new google.maps.Point(0, 0),
  new google.maps.Point(12, 35));


// Sunday Markers
var markers = [ 
['Adrian Cox', 38.603474, -90.232971, '0pageIsFoundHere.html'],
['Albert Yowshien Kuo', 38.589101, -90.227202, '0pageIsFoundHere.html'],
['Alice Gadel', 38.638540, -90.232284, '0pageIsFoundHere.html'],
['Anabun Pottery', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['Andy Leicht', 38.598918, -90.247756, '0pageIsFoundHere.html'],

['Blake Sanders', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Brandon Anschultz', 38.617371, -90.210680, '0pageIsFoundHere.html'],
['Brandon Barnes', 38.589101, -90.227202, '0pageIsFoundHere.html'],
['Bridget McDermott Flood & Michael Flood', 38.556266, -90.257799, '0pageIsFoundHere.html'],
['Cailin Metz', 38.633048, -90.201454, '0pageIsFoundHere.html'],

['Cayce Zavaglia', 38.611740, -90.235909, '0pageIsFoundHere.html'],
['Cecelia M. Davidson', 38.638298, -90.231810, '0pageIsFoundHere.html'],
['Collin Garrity', 38.585801, -90.225617, '0pageIsFoundHere.html'],
['Conor Murphy', 38.594721, -90.237542, '0pageIsFoundHere.html'],
['Damia Smith', 38.638540, -90.232284, '0pageIsFoundHere.html'],

['Damien Johnson', 38.582988, -90.235988, '0pageIsFoundHere.html'],
['David Coblitz', 38.631421, -90.192996, '0pageIsFoundHere.html'],
['Edo Rosenblith', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Elaine Unell ', 38.631421, -90.192996, '0pageIsFoundHere.html'],
['Emma Vidal', 38.603474, -90.232971, '0pageIsFoundHere.html'],

['Erica Popp', 38.589346, -90.227666, '0pageIsFoundHere.html'],
['Film Base STL', 38.634728, -90.215866, '0pageIsFoundHere.html'],
['Garrett Roberts', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['GINJU-AN ', 38.631112, -90.199019, '0pageIsFoundHere.html'],
['Gregg Louis', 38.600391, -90.222389, '0pageIsFoundHere.html'],

['Hannah Montford', 38.609411, -90.224579, '0pageIsFoundHere.html'],
['Ingrum Studio', 38.650577, -90.262091, '0pageIsFoundHere.html'],
['Jacob Francois', 38.650576, -90.262091, '0pageIsFoundHere.html'],
['Jacob Stanley', 38.600775, -90.242878, '0pageIsFoundHere.html'],
['Jeff Kapfer', 38.625280, -90.214468, '0pageIsFoundHere.html'],

['Jessica Bayer', 38.589101, -90.227202, '0pageIsFoundHere.html'],
['Joe Chesla', 38.636645, -90.225135 , '0pageIsFoundHere.html'],
['John Joseph Hunn', 38.584649, -90.234668, '0pageIsFoundHere.html'],
['John Sarra', 38.611732, -90.235943, '0pageIsFoundHere.html'],
['Karen Ann Jones', 38.634701, -90.215316, '0pageIsFoundHere.html'],

['Kathy Gomric', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['Kelsey Viola Wiskirchen', 38.609411, -90.224579 , '0pageIsFoundHere.html'],
['Ken Wood', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Kristin Cassidy', 38.593804, -90.227849, '0pageIsFoundHere.html'],
['Leah deMatta', 38.638540, -90.232284, '0pageIsFoundHere.html'],

['LeRoy Lottmann', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['Lowell Daniels', 38.609411, -90.224579 , '0pageIsFoundHere.html'],
['Maggie Zografakis', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Margaret Keller', 38.593804, -90.227849, '0pageIsFoundHere.html'],
['Marina Peng', 38.638540, -90.232284, '0pageIsFoundHere.html'],

['Mark Swain', 38.570884, -90.239701, '0pageIsFoundHere.html'],
['Maxine Joie du Maine', 38.638298, -90.231810 , '0pageIsFoundHere.html'],
['Melody Evans', 38.638540, -90.232284, '0pageIsFoundHere.html'],
['Michael Martinez', 38.638298, -90.231810, '0pageIsFoundHere.html'],
['Michael Parrett', 38.638540, -90.232284, '0pageIsFoundHere.html'],

['Nanette Boileau', 38.600754, -90.242863, '0pageIsFoundHere.html'],
['Norleen Nosri', 38.638540, -90.232284 , '0pageIsFoundHere.html'],
['Olivia Lahs-Gonzales', 38.600754, -90.242863, '0pageIsFoundHere.html'],
['Pat Toenjes', 38.607794, -90.209320, '0pageIsFoundHere.html'],
['Patrick L. Bellmann', 38.607793, -90.209319, '0pageIsFoundHere.html'],

['Paul Kafalenos', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Perennial: Community Workshop + Store', 38.586302, -90.226035 , '0pageIsFoundHere.html'],
['Rachel Youn', 38.633666, -90.199920, '0pageIsFoundHere.html'],
['Rich Brooks', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['Robert Michelmann', 38.607256, -90.206833, '0pageIsFoundHere.html'],

['Robin Lewis-Heagler', 38.634321, -90.213246, '0pageIsFoundHere.html'],
['Ruth Kolker', 38.589101, -90.227202 , '0pageIsFoundHere.html'],
['Ruth Reese', 38.638540, -90.232284, '0pageIsFoundHere.html'],
['Sage Dawson', 38.633575, -90.200425, '0pageIsFoundHere.html'],
['Sandra Fischetti', 38.638298, -90.231810, '0pageIsFoundHere.html'],

['Sarah Bernhardt', 38.589101, -90.227202, '0pageIsFoundHere.html'],
['Sarah Paulsen', 38.638540, -90.232284 , '0pageIsFoundHere.html'],
['Scott Allison', 38.638298, -90.231810, '0pageIsFoundHere.html'],
['Soulard Art Gallery', 38.607793, -90.209319, '0pageIsFoundHere.html'],
['Steve Ingraham', 38.631112, -90.199019, '0pageIsFoundHere.html'],

['The Collab', 38.548527, -90.257013, '0pageIsFoundHere.html'],
['Tiffany J. Sutton', 38.638298, -90.231810 , '0pageIsFoundHere.html'],
['WORK/PLAY', 38.593802, -90.227840, '0pageIsFoundHere.html'],
['Wyndi Antoinette DeSouza', 38.606312, -90.239911, '0pageIsFoundHere.html'],
];

// Sunday Contents
var content = [
['<div id=bodyContent>'+'<p>Adrian Cox<p>'],
['<div id=bodyContent>'+'<p>Albert Yowshien Kuo<p>'],
['<div id=bodyContent>'+'<p>Alice Gadel<p>'],
['<div id=bodyContent>'+'<p>Anabun Pottery<p>'],
['<div id=bodyContent>'+'<p>Andy Leicht<p>'],

['<div id=bodyContent>'+'<p>Blake Sanders<p>'],
['<div id=bodyContent>'+'<p>Brandon Anschultz<p>'],
['<div id=bodyContent>'+'<p>Brandon Barnes<p>'],
['<div id=bodyContent>'+'<p>Bridget McDermott Flood & Michael Flood<p>'],
['<div id=bodyContent>'+'<p>Cailin Metz<p>'],

['<div id=bodyContent>'+'<p>Cayce Zavaglia<p>'],
['<div id=bodyContent>'+'<p>Cecelia M. Davidson<p>'],
['<div id=bodyContent>'+'<p>Collin Garrity<p>'],
['<div id=bodyContent>'+'<p>Conor Murphy<p>'],
['<div id=bodyContent>'+'<p>Damia Smith<p>'],

['<div id=bodyContent>'+'<p>Damien Johnson<p>'],
['<div id=bodyContent>'+'<p>David Coblitz<p>'],
['<div id=bodyContent>'+'<p>Edo Rosenblith<p>'],
['<div id=bodyContent>'+'<p>Elaine Unell <p>'],
['<div id=bodyContent>'+'<p>Emma Vidal<p>'],

['<div id=bodyContent>'+'<p>Erica Popp<p>'],
['<div id=bodyContent>'+'<p>Film Base STL<p>'],
['<div id=bodyContent>'+'<p>Garrett Roberts<p>'],
['<div id=bodyContent>'+'<p>GINJU-AN <p>'],
['<div id=bodyContent>'+'<p>Gregg Louis<p>'],

['<div id=bodyContent>'+'<p>Hannah Montford<p>'],
['<div id=bodyContent>'+'<p>Ingrum Studio<p>'],
['<div id=bodyContent>'+'<p>Jacob Francois<p>'],
['<div id=bodyContent>'+'<p>Jacob Stanley<p>'],
['<div id=bodyContent>'+'<p>Jeff Kapfer<p>'],

['<div id=bodyContent>'+'<p>Jessica Bayer<p>'],
['<div id=bodyContent>'+'<p>Joe Chesla<p>'],
['<div id=bodyContent>'+'<p>John Joseph Hunn<p>'],
['<div id=bodyContent>'+'<p>John Sarra<p>'],
['<div id=bodyContent>'+'<p>Karen Ann Jones<p>'],

['<div id=bodyContent>'+'<p>Kathy Gomric<p>'],
['<div id=bodyContent>'+'<p>Kelsey Viola Wiskirchen<p>'],
['<div id=bodyContent>'+'<p>Ken Wood<p>'],
['<div id=bodyContent>'+'<p>Kristin Cassidy<p>'],
['<div id=bodyContent>'+'<p>Leah deMatta<p>'],

['<div id=bodyContent>'+'<p>LeRoy Lottmann<p>'],
['<div id=bodyContent>'+'<p>Lowell Daniels<p>'],
['<div id=bodyContent>'+'<p>Maggie Zografakis<p>'],
['<div id=bodyContent>'+'<p>Margaret Keller<p>'],
['<div id=bodyContent>'+'<p>Marina Peng<p>'],

['<div id=bodyContent>'+'<p>Mark Swain<p>'],
['<div id=bodyContent>'+'<p>Maxine Joie du Maine<p>'],
['<div id=bodyContent>'+'<p>Melody Evans<p>'],
['<div id=bodyContent>'+'<p>Michael Martinez<p>'],
['<div id=bodyContent>'+'<p>Michael Parrett<p>'],

['<div id=bodyContent>'+'<p>Nanette Boileau<p>'],
['<div id=bodyContent>'+'<p>Norleen Nosri<p>'],
['<div id=bodyContent>'+'<p>Olivia Lahs-Gonzales<p>'],
['<div id=bodyContent>'+'<p>Pat Toenjes<p>'],
['<div id=bodyContent>'+'<p>Patrick L. Bellmann<p>'],

['<div id=bodyContent>'+'<p>Paul Kafalenos<p>'],
['<div id=bodyContent>'+'<p>Perennial: Community Workshop + Store<p>'],
['<div id=bodyContent>'+'<p>Rachel Youn<p>'],
['<div id=bodyContent>'+'<p>Rich Brooks<p>'],
['<div id=bodyContent>'+'<p>Robert Michelmann<p>'],

['<div id=bodyContent>'+'<p>Robin Lewis-Heagler<p>'],
['<div id=bodyContent>'+'<p>Ruth Kolker<p>'],
['<div id=bodyContent>'+'<p>Ruth Reese<p>'],
['<div id=bodyContent>'+'<p>Sage Dawson<p>'],
['<div id=bodyContent>'+'<p>Sandra Fischetti<p>'],

['<div id=bodyContent>'+'<p>Sarah Bernhardt<p>'],
['<div id=bodyContent>'+'<p>Sarah Paulsen<p>'],
['<div id=bodyContent>'+'<p>Scott Allison<p>'],
['<div id=bodyContent>'+'<p>Soulard Art Gallery<p>'],
['<div id=bodyContent>'+'<p>Steve Ingraham<p>'],

['<div id=bodyContent>'+'<p>The Collab<p>'],
['<div id=bodyContent>'+'<p>Tiffany J. Sutton<p>'],
['<div id=bodyContent>'+'<p>WORK/PLAY<p>'],
['<div id=bodyContent>'+'<p>Wyndi Antoinette DeSouza<p>'],

];

var clusterStyles = [{
     // url: 'http://oi62.tinypic.com/zjbf9l.jpg',
     height: 80,
     width: 150,
     textSize: 16,
     backgroundPosition: "-4 0"
}];

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
          icon: pinImage,
          shadow: pinShadow,
          title: [0],
          url:markers[i][3]
                    // zIndex: markers[i][3],
               });
     bounds.extend(marker.getPosition());


//Infobox appear and disappear ///////////////////// 



google.maps.event.addListener(marker, 'click', (function (marker, i) {
     return function () {  
          jQuery( '#infowindow' ).fadeIn( "fast" );
          jQuery( '#infowindow' ).empty();
          jQuery( '#infowindow' ).append( content[i][0] );                      
     }
})(marker, i));
gmarkers.push(marker);

// google.maps.event.addListener(marker, 'click', function() {
//      window.location.href = this.url;
// });

google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
     return function () {  
          jQuery( '#infowindow' ).fadeOut( "slow" );                        
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
//   $(this).animate({opacity: '0'}, 300);
//   $('.splashDescription').animate({opacity: '0'}, 300);
//   $('.splashDescription').css({"z-index": '-10'}, 300); 
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
//   $('.menuLinks').animate({opacity: '0'}, 120); 
//   $('.home').animate({opacity: '1'}, 120); 
// });




});

