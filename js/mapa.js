
function myMap(){	
	
	var mapCanvas = document.getElementById("map");
	
	var mapOptions = { 
		center: new google.maps.LatLng(-5.8319394, -35.2052994),
		zoom: 18,
		panControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var markerImage = 'imagens/marker.png';

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(-5.8318499, -35.2052999),
		map: map,
		icon: markerImage
	});

	var contentString =	'<div class="info-window">' +
						'<h3>Endereço:</h3>' +
						'<div class="info-content">' +
						'<p>CIVT – UFRN – Av. Senador Salgado Filho, 3000 – Lagoa Nova, CEP: 59.078-970 – Natal/RN Recepção: (84) 3342-2216 Ramal 100</p>' +
						'</div>' +
						'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 400
	});

	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});
}