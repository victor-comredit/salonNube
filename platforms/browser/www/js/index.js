// Constantes

// Funciones
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

	if(states[networkState] == "Sin conexión")	
	{			
		setTimeout(function()
		{   
			window.location = "error.html";						
		}, 3500);
	}
	else
	{
		setTimeout(function()
		{   
			window.open(encodeURI('http://delorean.nubeadm.com'), '_self', 'location=no');			
		}, 3500);
	}
}

function onDeviceReady() 
{	   
	checkConnection();
}

// Eventos
document.addEventListener("deviceready", onDeviceReady, false);