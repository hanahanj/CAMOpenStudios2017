
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

// ['Blake Sanders', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Brandon Anschultz', 38.617371, -90.210680, '0pageIsFoundHere.html'],
// ['Brandon Barnes', 38.589101, -90.227202, '0pageIsFoundHere.html'],
// ['Bridget McDermott Flood & Michael Flood', 38.556266, -90.257799, '0pageIsFoundHere.html'],
// ['Cailin Metz', 38.633048, -90.201454, '0pageIsFoundHere.html'],

// ['Cayce Zavaglia', 38.611740, -90.235909, '0pageIsFoundHere.html'],
// ['Cecelia M. Davidson', 38.638298, -90.231810, '0pageIsFoundHere.html'],
// ['Collin Garrity', 38.585801, -90.225617, '0pageIsFoundHere.html'],
// ['Conor Murphy', 38.594721, -90.237542, '0pageIsFoundHere.html'],
// ['Damia Smith', 38.638540, -90.232284, '0pageIsFoundHere.html'],

// ['Damien Johnson', 38.582988, -90.235988, '0pageIsFoundHere.html'],
// ['David Coblitz', 38.631421, -90.192996, '0pageIsFoundHere.html'],
// ['Edo Rosenblith', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Elaine Unell ', 38.631421, -90.192996, '0pageIsFoundHere.html'],
// ['Emma Vidal', 38.603474, -90.232971, '0pageIsFoundHere.html'],

// ['Erica Popp', 38.589346, -90.227666, '0pageIsFoundHere.html'],
// ['Film Base STL', 38.634728, -90.215866, '0pageIsFoundHere.html'],
// ['Garrett Roberts', 38.607793, -90.209319, '0pageIsFoundHere.html'],
// ['GINJU-AN ', 38.631112, -90.199019, '0pageIsFoundHere.html'],
// ['Gregg Louis', 38.600391, -90.222389, '0pageIsFoundHere.html'],

// ['Hannah Montford', 38.609411, -90.224579, '0pageIsFoundHere.html'],
// ['Ingrum Studio', 38.650577, -90.262091, '0pageIsFoundHere.html'],
// ['Jacob Francois', 38.650576, -90.262091, '0pageIsFoundHere.html'],
// ['Jacob Stanley', 38.600775, -90.242878, '0pageIsFoundHere.html'],
// ['Jeff Kapfer', 38.625280, -90.214468, '0pageIsFoundHere.html'],

// ['Jessica Bayer', 38.589101, -90.227202, '0pageIsFoundHere.html'],
// ['Joe Chesla', 38.636645, -90.225135 , '0pageIsFoundHere.html'],
// ['John Joseph Hunn', 38.584649, -90.234668, '0pageIsFoundHere.html'],
// ['John Sarra', 38.611732, -90.235943, '0pageIsFoundHere.html'],
// ['Karen Ann Jones', 38.634701, -90.215316, '0pageIsFoundHere.html'],

// ['Kathy Gomric', 38.607793, -90.209319, '0pageIsFoundHere.html'],
// ['Kelsey Viola Wiskirchen', 38.609411, -90.224579 , '0pageIsFoundHere.html'],
// ['Ken Wood', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Kristin Cassidy', 38.593804, -90.227849, '0pageIsFoundHere.html'],
// ['Leah deMatta', 38.638540, -90.232284, '0pageIsFoundHere.html'],

// ['LeRoy Lottmann', 38.607793, -90.209319, '0pageIsFoundHere.html'],
// ['Lowell Daniels', 38.609411, -90.224579 , '0pageIsFoundHere.html'],
// ['Maggie Zografakis', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Margaret Keller', 38.593804, -90.227849, '0pageIsFoundHere.html'],
// ['Marina Peng', 38.638540, -90.232284, '0pageIsFoundHere.html'],

// ['Mark Swain', 38.570884, -90.239701, '0pageIsFoundHere.html'],
// ['Maxine Joie du Maine', 38.638298, -90.231810 , '0pageIsFoundHere.html'],
// ['Melody Evans', 38.638540, -90.232284, '0pageIsFoundHere.html'],
// ['Michael Martinez', 38.638298, -90.231810, '0pageIsFoundHere.html'],
// ['Michael Parrett', 38.638540, -90.232284, '0pageIsFoundHere.html'],

// ['Nanette Boileau', 38.600754, -90.242863, '0pageIsFoundHere.html'],
// ['Norleen Nosri', 38.638540, -90.232284 , '0pageIsFoundHere.html'],
// ['Olivia Lahs-Gonzales', 38.600754, -90.242863, '0pageIsFoundHere.html'],
// ['Pat Toenjes', 38.607794, -90.209320, '0pageIsFoundHere.html'],
// ['Patrick L. Bellmann', 38.607793, -90.209319, '0pageIsFoundHere.html'],

// ['Paul Kafalenos', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Perennial: Community Workshop + Store', 38.586302, -90.226035 , '0pageIsFoundHere.html'],
// ['Rachel Youn', 38.633666, -90.199920, '0pageIsFoundHere.html'],
// ['Rich Brooks', 38.607793, -90.209319, '0pageIsFoundHere.html'],
// ['Robert Michelmann', 38.607256, -90.206833, '0pageIsFoundHere.html'],

// ['Robin Lewis-Heagler', 38.634321, -90.213246, '0pageIsFoundHere.html'],
// ['Ruth Kolker', 38.589101, -90.227202 , '0pageIsFoundHere.html'],
// ['Ruth Reese', 38.638540, -90.232284, '0pageIsFoundHere.html'],
// ['Sage Dawson', 38.633575, -90.200425, '0pageIsFoundHere.html'],
// ['Sandra Fischetti', 38.638298, -90.231810, '0pageIsFoundHere.html'],

// ['Sarah Bernhardt', 38.589101, -90.227202, '0pageIsFoundHere.html'],
// ['Sarah Paulsen', 38.638540, -90.232284 , '0pageIsFoundHere.html'],
// ['Scott Allison', 38.638298, -90.231810, '0pageIsFoundHere.html'],
// ['Soulard Art Gallery', 38.607793, -90.209319, '0pageIsFoundHere.html'],
// ['Steve Ingraham', 38.631112, -90.199019, '0pageIsFoundHere.html'],

// ['The Collab', 38.548527, -90.257013, '0pageIsFoundHere.html'],
// ['Tiffany J. Sutton', 38.638298, -90.231810 , '0pageIsFoundHere.html'],
// ['WORK/PLAY', 38.593802, -90.227840, '0pageIsFoundHere.html'],
// ['Wyndi Antoinette DeSouza', 38.606312, -90.239911, '0pageIsFoundHere.html'],
];

// Sunday Contents
var content = [
['<div id=bodyContent>'+'<h1>Adrian Cox<?/h1>'+'<h2>Address</h2>'],
['<div id=bodyContent>'+'<h1>Albert Yowshien Kuo</h1>'+'<h2>Address</h2>'],
['<div id=bodyContent>'+'<h1>Alice Gadel</h1>'+'<h2>Address</h2>'],
['<div id=bodyContent>'+'<h1>Anabun Pottery</h1>'+'<h2>Address</h2>'],
['<div id=bodyContent>'+'<h1>Andy Leicht</h1>'+'<h2>Address</h2>'],

// ['<div id=bodyContent>'+'<h1>Blake Sanders</h1>'],
// ['<div id=bodyContent>'+'<h1>Brandon Anschultz</h1>'],
// ['<div id=bodyContent>'+'<h1>Brandon Barnes</h1>'],
// ['<div id=bodyContent>'+'<h1>Bridget McDermott Flood & Michael Flood</h1>'],
// ['<div id=bodyContent>'+'<h1>Cailin Metz</h1>'],

// ['<div id=bodyContent>'+'<h1>Cayce Zavaglia</h1>'],
// ['<div id=bodyContent>'+'<h1>Cecelia M. Davidson</h1>'],
// ['<div id=bodyContent>'+'<h1>Collin Garrity</h1>'],
// ['<div id=bodyContent>'+'<h1>Conor Murphy</h1>'],
// ['<div id=bodyContent>'+'<h1>Damia Smith</h1>'],

// ['<div id=bodyContent>'+'<h1>Damien Johnson</h1>'],
// ['<div id=bodyContent>'+'<h1>David Coblitz</h1>'],
// ['<div id=bodyContent>'+'<h1>Edo Rosenblith</h1>'],
// ['<div id=bodyContent>'+'<h1>Elaine Unell </h1>'],
// ['<div id=bodyContent>'+'<h1>Emma Vidal</h1>'],

// ['<div id=bodyContent>'+'<h1>Erica Popp</h1>'],
// ['<div id=bodyContent>'+'<h1>Film Base STL</h1>'],
// ['<div id=bodyContent>'+'<h1>Garrett Roberts</h1>'],
// ['<div id=bodyContent>'+'<h1>GINJU-AN </h1>'],
// ['<div id=bodyContent>'+'<h1>Gregg Louis</h1>'],

// ['<div id=bodyContent>'+'<h1>Hannah Montford</h1>'],
// ['<div id=bodyContent>'+'<h1>Ingrum Studio</h1>'],
// ['<div id=bodyContent>'+'<h1>Jacob Francois</h1>'],
// ['<div id=bodyContent>'+'<h1>Jacob Stanley</h1>'],
// ['<div id=bodyContent>'+'<h1>Jeff Kapfer</h1>'],

// ['<div id=bodyContent>'+'<h1>Jessica Bayer</h1>'],
// ['<div id=bodyContent>'+'<h1>Joe Chesla</h1>'],
// ['<div id=bodyContent>'+'<h1>John Joseph Hunn</h1>'],
// ['<div id=bodyContent>'+'<h1>John Sarra</h1>'],
// ['<div id=bodyContent>'+'<h1>Karen Ann Jones</h1>'],

// ['<div id=bodyContent>'+'<h1>Kathy Gomric</h1>'],
// ['<div id=bodyContent>'+'<h1>Kelsey Viola Wiskirchen</h1>'],
// ['<div id=bodyContent>'+'<h1>Ken Wood</h1>'],
// ['<div id=bodyContent>'+'<h1>Kristin Cassidy</h1>'],
// ['<div id=bodyContent>'+'<h1>Leah deMatta</h1>'],

// ['<div id=bodyContent>'+'<h1>LeRoy Lottmann</h1>'],
// ['<div id=bodyContent>'+'<h1>Lowell Daniels</h1>'],
// ['<div id=bodyContent>'+'<h1>Maggie Zografakis</h1>'],
// ['<div id=bodyContent>'+'<h1>Margaret Keller</h1>'],
// ['<div id=bodyContent>'+'<h1>Marina Peng</h1>'],

// ['<div id=bodyContent>'+'<h1>Mark Swain</h1>'],
// ['<div id=bodyContent>'+'<h1>Maxine Joie du Maine</h1>'],
// ['<div id=bodyContent>'+'<h1>Melody Evans</h1>'],
// ['<div id=bodyContent>'+'<h1>Michael Martinez</h1>'],
// ['<div id=bodyContent>'+'<h1>Michael Parrett</h1>'],

// ['<div id=bodyContent>'+'<h1>Nanette Boileau</h1>'],
// ['<div id=bodyContent>'+'<h1>Norleen Nosri</h1>'],
// ['<div id=bodyContent>'+'<h1>Olivia Lahs-Gonzales</h1>'],
// ['<div id=bodyContent>'+'<h1>Pat Toenjes</h1>'],
// ['<div id=bodyContent>'+'<h1>Patrick L. Bellmann</h1>'],

// ['<div id=bodyContent>'+'<h1>Paul Kafalenos</h1>'],
// ['<div id=bodyContent>'+'<h1>Perennial: Community Workshop + Store</h1>'],
// ['<div id=bodyContent>'+'<h1>Rachel Youn</h1>'],
// ['<div id=bodyContent>'+'<h1>Rich Brooks</h1>'],
// ['<div id=bodyContent>'+'<h1>Robert Michelmann</h1>'],

// ['<div id=bodyContent>'+'<h1>Robin Lewis-Heagler</h1>'],
// ['<div id=bodyContent>'+'<h1>Ruth Kolker</h1>'],
// ['<div id=bodyContent>'+'<h1>Ruth Reese</h1>'],
// ['<div id=bodyContent>'+'<h1>Sage Dawson</h1>'],
// ['<div id=bodyContent>'+'<h1>Sandra Fischetti</h1>'],

// ['<div id=bodyContent>'+'<h1>Sarah Bernhardt</h1>'],
// ['<div id=bodyContent>'+'<h1>Sarah Paulsen</h1>'],
// ['<div id=bodyContent>'+'<h1>Scott Allison</h1>'],
// ['<div id=bodyContent>'+'<h1>Soulard Art Gallery</h1>'],
// ['<div id=bodyContent>'+'<h1>Steve Ingraham</h1>'],

// ['<div id=bodyContent>'+'<h1>The Collab</h1>'],
// ['<div id=bodyContent>'+'<h1>Tiffany J. Sutton</h1>'],
// ['<div id=bodyContent>'+'<h1>WORK/PLAY</h1>'],
// ['<div id=bodyContent>'+'<h1>Wyndi Antoinette DeSouza</h1>'],

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
          jQuery( '#mapContainer' ).animate({width: '80%', height: "100%", top: "0%"}, 300);                  
     }
})(marker, i));
gmarkers.push(marker);


// Click to open individual page

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









});

