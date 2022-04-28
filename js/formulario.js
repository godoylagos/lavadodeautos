function valida_envia(){
	//valido el nombre
	if (document.fvalida.rut.value.length==0){
		   alert("Tiene que escribir su Rut")
		   document.fvalida.rut.focus()
		   return 0;
	}

	if (document.fvalida.dv.value.length==0){
		alert("Tiene que escribir su Digito verificador")
		document.fvalida.dv.focus()
		return 0;
 	}

	if (document.fvalida.nombre.value.length==0){
		alert("Tiene que escribir su Nombre")
		document.fvalida.nombre.focus()
		return 0;
 	}

	if (document.fvalida.apellidos.value.length==0){
		alert("Tiene que escribir sus Apellidos")
		document.fvalida.apellidos.focus()
		return 0;
 	}

	if (document.fvalida.direccion.value.length==0){
		alert("Tiene que escribir su Dirección")
		document.fvalida.direccion.focus()
		return 0;
 	}

	if (document.fvalida.comuna.selectedIndex==0){
		alert("Debe seleccionar su Comuna de residencia")
		document.fvalida.comuna.focus()
		return 0;
 	}

	 if (document.fvalida.vehiculo.selectedIndex==0){
		alert("Debe seleccionar su tipo de Vehículo")
		document.fvalida.vehiculo.focus()
		return 0;
 	}
	
	if (document.fvalida.marca.value.length==0){
		alert("Tiene que escribir la Marca de su Vehículo")
		document.fvalida.marca.focus()
		return 0;
 	}
	
	 if (document.fvalida.modelo.value.length==0){
		alert("Tiene que escribir el Modelo de su Vehículo")
		document.fvalida.modelo.focus()
		return 0;
 	}

	 if (document.fvalida.año.value.length==0){
		alert("Tiene que escribir el Año de su Vehículo")
		document.fvalida.año.focus()
		return 0;
 	}

	 if (document.fvalida.revision.selectedIndex==0){
		alert("Debe indicar si tiene revisión técnica")
		document.fvalida.revision.focus()
		return 0;
 	}

	 if (document.fvalida.lavado.selectedIndex==0){
		alert("Debe indicar el tipo de lavado que desea")
		document.fvalida.lavado.focus()
		return 0;
 	}

	 if (document.fvalida.encargado.selectedIndex==0){
		alert("Debe indicar el Encargado para realizar su servicio")
		document.fvalida.encargado.focus()
		return 0;
 	}
 
	
 
	//el formulario se envia
	alert("SU SERVICIO A QUEDADO AGENDADO. Muchas gracias!");
	document.fvalida.submit();
}