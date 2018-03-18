//Ajax.js
//alert('Prueba');
function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
		   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
  		}
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
function enlace(fuenteDatos,divID)
{   //alert('Ingreso');
       ajax=objetoAjax(); 
	   var obj = document.getElementById(divID);  
         
	 ajax.open("POST",fuenteDatos,true);
	 ajax.onreadystatechange=function() {
		  //codigo para mostrar la carga de los datos     
		   if (ajax.readyState == 1){
	         obj.innerHTML = "<p></p><BR><p align='center'><img src='imagenes/x_rellotge.gif'></p>";	  
		     jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		     ajax.send(null);					   
	       }
		 //-----------------------------------------------------------  
		if (ajax.readyState==4) {
			//mostrar los nuevos registros en esta capa
			obj.innerHTML = ajax.responseText; 
			//divResultado.innerHTML = ajax.responseText
			 
		  }
	    }  
	   ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	   ajax.send(null);
}

function validar_FORM(fuenteDatos,divID)
{     
	   ajax=objetoAjax(); 
	    var obj = document.getElementById(divID);  
        // document.getElementById('Nombre').value;	
        nom=document.iniciarSesion.nameuser.value;
        pass=document.iniciarSesion.pass.value;
	  
	 ajax.open("POST",fuenteDatos,true);
	 ajax.onreadystatechange=function(){
		  //codigo para mostrar la carga de los datos     
		   if (ajax.readyState == 1){
	         obj.innerHTML = "<p></p><BR><p align='center'><img src='imagenes/x_rellotge.gif'></p>";	  
		     jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		     ajax.send(null);					   
	       }
		 //-----------------------------------------------------------  
		if (ajax.readyState==4) {
			//mostrar los nuevos registros en esta capa
			obj.innerHTML = ajax.responseText; 
			//divResultado.innerHTML = ajax.responseText
			 
		  }
	    } 
	   ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	   alert('datos ingresados ='+fuenteDatos+ 'pass ='+divID);
	   ajax.send("&cod="+pass+"&nombre="+nom);		
}