function initializeMap() {
                if(navigator.geolocation) 
                  {
                    console.log('Geolocation is supported');

                    //var map;

                    var geoOptions = {
                        timeout: 10 * 1000,
                        enableHighAccuracy: true           
                      }


                    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
                  } else {
                      console.log('Geolocation is NOT supported');

                      document.getElementById('google_canvas').innerHTML = 'No Geolocation Support.';
                    }
            }

            function geoSuccess(position) 
                      {
                        var map;

                        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


                        var mapOptions = {
                            zoom: 12,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            center: geolocate
                          };

                        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

                        // The following line was used for testing whether geolocation was functioning and to display the reported lat and long
                        //document.getElementById("locationNote").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

                        // adds a marker showing users position
                        var marker = new google.maps.Marker({

                        // pinpoints where the marker should be placed
                        position: geolocate,

                        // this tells the marker which map it should be attached to
                        map: map,
                        });

                        map.setCenter(geolocate);
                      }

            function geoError(position)
            {
              console.log('Error occured. Error code: ' + error.code);
              // error code can be:
              // 0: unkonown error
              // 1: permission denied
              // 2: position unavailable (error response from location provider)
              // 3: timed out
            } 