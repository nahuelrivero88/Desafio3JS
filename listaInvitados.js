// Lista de inivitados

for (let i = 1; i <= 10; i++) {
   let ingresarInvitado = prompt("Ingresar nombre del invitado:");
   alert("N° de invitado: "+ i + "\nNombre: "+ ingresarInvitado);

   if (i == 10){
      alert("La lista de invitados esta completa");
   }
   else if (ingresarInvitado == "") {
      alert("No ingreso el nombre correctamente, debe ingresarlo otra vez");
      ingresarInvitado = prompt("Ingresar nombre del invitado:");
      alert("N° de invitado: "+ i + "\nNombre: "+ ingresarInvitado);
   }
   else if (ingresarInvitado == "Nicolas" || ingresarInvitado == "Lucia") {
      alert ("No se pudo agregar a esta persona, se encuentra en la lista negra.");
      --i;
   }
}
