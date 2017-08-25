
$(document).ready(function(){


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


    var locations = [
    ['Adrian Cox', 38.603474, -90.232971, '0pageIsFoundHere.html'],
    ['Albert Yowshien Kuo', 38.589101, -90.227202, '0pageIsFoundHere.html'],
    ['Alice Gadel', 38.638540, -90.232284, '0pageIsFoundHere.html'],
    ['Anabun Pottery', 38.607793, -90.209319, '0pageIsFoundHere.html'],
    ['Andy Leicht', 38.598918, -90.247756, '0pageIsFoundHere.html'],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(38.625, -90.3),
      styles: styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


  // }

});
