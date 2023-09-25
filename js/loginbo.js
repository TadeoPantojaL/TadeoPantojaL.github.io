const user = document.getElementById('bousername');
const pass = document.getElementById('bopassword');
const button = document.getElementById('boton');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    username: user.value.toLowerCase(),
    password: pass.value
  }
  const bousuarios = {
    
    'admin': { nombre: 'Tadeo Pantoja', password: 'admin' },
    'ggonzalez1': { nombre: 'Georgina Flores', password: '12345' },
    'ibarron1': { nombre: 'Jonathan Barrón', password: '12345' },
    'lmartinez': { nombre: 'Liliana Martinez', password: '12345' },
    'ceperez': { nombre: 'Cecilia Perez', password: '12345' },
    'asegundo': { nombre: 'Angelica Segundo', password: '12345' },
    'anunez': { nombre: 'Anayeli Segundo', password: '12345' },
    'cmariscal': { nombre: 'Carlos Mariscal', password: '12345' },
    'asanchez': { nombre: 'Arturo Sanchez', password: '12345' },
    'kgomez': { nombre: 'Kevin Gomez', password: '12345' },
    'cperalta': { nombre: 'Carlos Peralta', password: '12345' },
    'egonzalez': { nombre: 'Jesus Gonzalez', password: '12345' },
    'cocampo': { nombre: 'Cynthia Zamora', password: '12345' },
    'icadena': { nombre: 'Imanol Cadena', password: '12345' },
    'jpliego': { nombre: 'Jonatyhan Pliego', password: '12345' }
  }
  if (data.username in bousuarios && data.password === bousuarios[data.username].password) {
    window.location.href = "/html/back_office.html";
    localStorage.setItem("bologin_sucess", JSON.stringify(usuarios[data.username]));
  } else {
    alert("Credenciales incorrectas");
  }

})