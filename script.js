function initMap(){
      // Map options
      const options = {
        zoom:17,
        center:{lat:3.415345,lng:-76.544411},
			  // styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},
			  // {"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},	   
        // {"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}], //grayscale style
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#60605f"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"color":"#b8d0a3"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"},{"color":"#bcc7d1"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"weight":"0.58"},{"color":"#000000"},{"lightness":"30"},{"gamma":"0.62"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffe092"},{"weight":"2.04"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"},{"weight":"0.01"},{"color":"#ff0000"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}], //ikkonos style
		 	  animation: google.maps.Animation.DROP,
			  draggable: true,
		    mapTypeControl: false
      };

      // New map
      let map = new google.maps.Map(document.getElementById('map'), options);
	
      // Array of markers
      let markers = [
        {
          coords:{lat:3.415345,lng:-76.544411},
          iconImage:'Ikkonos_th.png',
          content:`<h1>Ikkonos</h1>
				   <p>Aqui estamos</p>`
  
        }
/*        { 
		//add more destinations here 
          coords:{lat:42.8584,lng:-70.9300},
			iconImage:'pin_2.png',
          	content:'<h1></h1>'
        },
        {
		//add another destinations here
          coords:{lat:42.7762,lng:-71.0773}
 			iconImage:'pin_2.png',
          	content:'<h1></h1>'
        }*/
      ];

      // Loop through markers
      [].forEach.call(markers, (markers) => {
          addMarker(markers);
      });
      
      // Add Marker Function
      function addMarker(props){
        let marker = new google.maps.Marker({
          position: props.coords,
          map: map,
		      title: 'Ikkonos!'
        });
		  		
        // Check for custom icon
        if(props.iconImage){
          // Set icon image
          	  marker.setIcon(props.iconImage);
        }	
		//bounce animation
        marker.addListener('click', toggleBounce);	
        	  
      function toggleBounce() {
			  if (marker.getAnimation() !== null) {
			  marker.setAnimation(null);
			} else {
			  marker.setAnimation(google.maps.Animation.BOUNCE);
			  }
		 }
        // Check content
        if(props.content){
          let infoWindow = new google.maps.InfoWindow({
            content:props.content
          });
			
           google.maps.event.addListener(marker, 'click', () => {   
            infoWindow.open(map, marker);   
          });
            google.maps.event.addListener(map, 'click', () => {   
            infoWindow.close();   
          });
			marker.setAnimation(google.maps.Animation.BOUNCE);

        }
      } //Marker & Props


    } // Map Init
