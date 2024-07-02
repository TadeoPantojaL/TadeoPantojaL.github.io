const user = document.getElementById('username');
const pass = document.getElementById('password');
const button = document.getElementById('boton');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    username: user.value.toLowerCase(),
    password: pass.value
  }
  const usuarios = {
  'kevin': { nombre: 'Kevin Nachito Velasquez', password: '12345' },
    'rrubio@netwey': { nombre: 'Rebeca Rubio', password: '12345' },
    'admin': { nombre: 'Tadeo Pantoja', password: 'admin' },
    'ggonzalez1@netwey': { nombre: 'Georgina Flores', password: '12345' },
    'ibarron1@netwey': { nombre: 'Jonathan Barrón', password: '12345' },
    'lmartinez@netwey': { nombre: 'Liliana Martinez', password: '12345' },
    'ceperez@netwey': { nombre: 'Cecilia Perez', password: '12345' },
    'asegundo@netwey': { nombre: 'Angelica Segundo', password: '12345' },
    'jmanriquez@netwey': { nombre: 'Jocelyn Manriquez', password: '12345' },
    'vhernandez@netwey': { nombre: 'Lizeth Hernandez', password: '12345' },
    'ksobrino@netwey': { nombre: 'Karla Sobrino', password: '12345' },
    'anunez@netwey': { nombre: 'Anayeli Segundo', password: '12345' },
    'srico@netwey': { nombre: 'Sonia Rico', password: '12345' },
    'arodriguezh@netwey': { nombre: 'Antonio Rodriguez', password: '12345' },
    'cmariscal@netwey': { nombre: 'Carlos Mariscal', password: '12345' },
    'srodriguez@netwey': { nombre: 'Sandra Sanchez', password: '12345' },
    'lbernal@netwey': { nombre: 'Bernal De', password: '12345' },
    'ebaltazar@netwey': { nombre: 'Edwin Baltazar', password: '12345' },
    'asanchez@netwey': { nombre: 'Arturo Sanchez', password: '12345' },
    'cducoing@netwey': { nombre: 'Christian Maya', password: '12345' },
    'cmoreno@netwey': { nombre: 'Christofher Moreno', password: '12345' },
    'kgomez@netwey': { nombre: 'Kevin Gomez', password: '12345' },
    'grodriguez@netwey': { nombre: 'Gerardo Perez', password: '12345' },
    'lpacheco@netwey': { nombre: 'Laura Pacheco', password: '12345' },
    'cperalta@netwey': { nombre: 'Carlos Peralta', password: '12345' },
    'vchavez@netwey': { nombre: 'Vanessa Chavez', password: '12345' },
    'dzamora1@netwey': { nombre: 'Dulce Zamora', password: '12345' },
    'ofonseca@netwey': { nombre: 'Oscar Fonseca', password: '12345' },
    'smoralesc@netwey': { nombre: 'Santiago Morales', password: '12345' },
    'dsantamaria@netwey': { nombre: 'Dana Santamaria', password: '12345' },
    'aecruz@netwey': { nombre: 'Ariadna Cruz', password: '12345' },
    'acastillo@netwey': { nombre: 'Alexis Castillo', password: '12345' },
    'ycampos@netwey': { nombre: 'Yesica Campos', password: '12345' },
    'jcabal@netwey': { nombre: 'Jose Cabal', password: '12345' },
    'dtapia@netwey': { nombre: 'Dariana Tapia', password: '12345' },
    'jchernandez@netwey': { nombre: 'Janely Cruz', password: '12345' },
    'egonzalez@netwey': { nombre: 'Jesus Gonzalez', password: '12345' },
    'drmartinez@netwey': { nombre: 'Daniel Rodriguez', password: '12345' },
    'cocampo@netwey': { nombre: 'Cynthia Zamora', password: '12345' },
    'galcantara@netwey': { nombre: 'Geraldine Alcantara', password: '12345' },
    'crodriguez@netwey': { nombre: 'Celia Rodriguez', password: '12345' },
    'dflores@netwey': { nombre: 'Divanny Flores', password: '12345' },
    'bcolin@netwey': { nombre: 'Brian Colin', password: '12345' },
    'icadena@netwey': { nombre: 'Imanol Cadena', password: '12345' },
    'imartinez@netwey': { nombre: 'Isaías Martínez', password: '12345' },
    'kcaballero@netwey': { nombre: 'Kevin Marin', password: '12345' },
    'jlara@netwey': { nombre: 'Janitzio Lara', password: '12345' },
    'falvarado@netwey': { nombre: 'Fernando Alvarado', password: '12345' },
    'mlima@netwey': { nombre: 'Monica Luna', password: '12345' },
    'uzarate@netwey': { nombre: 'Ursula Zarate', password: '12345' },
    'scampos@netwey': { nombre: 'Sonia Campos', password: '12345' },
    'fptorres@netwey': { nombre: 'Fernanda Torres', password: '12345' },
    'mvillafuerte@netwey': { nombre: 'Mariana Villafuerte', password: '12345' },
    'aacevedo@netwey': { nombre: 'Abel Acevedo', password: '12345' },
    'emondragon@netwey': { nombre: 'Elsi Mondragon', password: '12345' },
    'rhsantiago@netwey': { nombre: 'Ricardo Hernandez', password: '12345' },
    'ecarreon@netwey': { nombre: 'Erika Carreon', password: '12345' },
    'dcano@netwey': { nombre: 'Daniel Cano', password: '12345' },
    'ejimenez@netwey': { nombre: 'Enrique Jimenez', password: '12345' },
    'btorres@netwey': { nombre: 'Brandon Torres', password: '12345' },
    'daguilar@netwey': { nombre: 'Dulce Aguilar', password: '12345' }
  }
  if (data.username in usuarios && data.password === usuarios[data.username].password) {
    window.location.href = "/html/AvisosImportantes.html";
    localStorage.setItem("login_sucess", JSON.stringify(usuarios[data.username]));
  } else {
    alert("Credenciales incorrectas");
  }

})
