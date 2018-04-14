// Constantes

// Funciones
function onDeviceReady() 
{	     
	var statusConnection  = setInterval(function(){ checkConnection() }, 3000);

	function checkConnection()
	{	               
    	var networkState = navigator.network.connection.type;

		var states = {};
		states[Connection.UNKNOWN]  = 'Conexión desconocida';
		states[Connection.ETHERNET] = 'Conexión ethernet';
		states[Connection.WIFI]     = 'Conexión WiFi';
		states[Connection.CELL_2G]  = 'Conexión movil 2G';
		states[Connection.CELL_3G]  = 'Conexión movil 3G';
		states[Connection.CELL_4G]  = 'Conexión movil 4G';
		states[Connection.NONE]     = 'Sin conexión';

		//alert('Tipo de conexión: ' + states[networkState]);

		if(states[networkState] != "Sin conexión")
		{
			stopCheckConnection();
			window.open(encodeURI('http://delorean.nubeadm.com'), '_self', 'location=no');
		}		          
	}

	function stopCheckConnection() 
	{
    	clearInterval(statusConnection);    	
	}

}

// Eventos
window.addEventListener("load", onDeviceReady);