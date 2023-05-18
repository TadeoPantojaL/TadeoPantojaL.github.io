function login() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
  
    // Realiza la validación de los datos ingresados (puedes personalizar esta parte según tus necesidades)
    if (username === "usuario" && password === "contraseña") {
      // Si la validación es exitosa, redirige al usuario a la página de usuario
      window.location.href = "d2.html";
    } else {
      // Si la validación falla, muestra un mensaje de error o realiza alguna acción adicional
      alert("Usuario o contraseña incorrectos");
    }
  }