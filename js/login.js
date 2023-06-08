const user = document.getElementById('username');
const pass = document.getElementById('password');
const button = document.getElementById('boton');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    username: user.value.toLowerCase(),
    password: pass.value
  }

  if (data.username == "admin" && data.password == "admin" || data.username == "jmanriquez@tadeonet" && data.password == "12345" || data.username == "mmoreno@tadeonet" && data.password == "12345" || data.username == "cmariscal@tadeonet" && data.password == "12345") {
    window.location.href = "/html/index.html";
    localStorage.setItem("login_sucess", JSON.stringify(data));
    
  } else {
    alert("Credenciales incorrectas");
  }
  
})