
function validarFormulario() {
    var nombre = document.forms["FrmContctos"]["TxtNick"].value;
    if (nombre == "") {
      alert("El campo de nombre esta vacío");
      return false;
    }
  }