// Variables para almacenar los datos, cargando desde localStorage
let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
let duenos = JSON.parse(localStorage.getItem('duenos')) || [];
let veterinarios = JSON.parse(localStorage.getItem('veterinarios')) || [];

// Manejo del formulario de Mascotas
document.getElementById('mascotaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const mascota = {
        idMascota: document.getElementById('idMascota').value,
        nombre: document.getElementById('nombreMascota').value,
        especie: document.getElementById('especie').value,
        edad: document.getElementById('edad').value,
        peso: document.getElementById('peso').value,
        idDueno: document.getElementById('idDuenoMascota').value
    };
    mascotas.push(mascota);
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    this.reset();
});

// Manejo del formulario de Dueño
document.getElementById('duenoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const dueno = {
        idDueno: document.getElementById('idDueno').value,
        nombre: document.getElementById('nombreDueno').value,
        correo: document.getElementById('correoDueno').value,
        celular: document.getElementById('celularDueno').value,
        direccion: document.getElementById('direccionDueno').value
    };
    duenos.push(dueno);
    localStorage.setItem('duenos', JSON.stringify(duenos));
    this.reset();
});

// Manejo del formulario de Veterinario
document.getElementById('veterinarioForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const veterinario = {
        idVeterinario: document.getElementById('idVeterinario').value,
        nombre: document.getElementById('nombreVeterinario').value,
        correo: document.getElementById('correoVeterinario').value,
        celular: document.getElementById('celularVeterinario').value,
        especialidad: document.getElementById('especialidad').value
    };
    veterinarios.push(veterinario);
    localStorage.setItem('veterinarios', JSON.stringify(veterinarios));
    this.reset();
});

// Función para mostrar los datos recolectados en la página principal
function mostrarDatosRecolectados() {
    const output = document.getElementById('output');
    if (!output) {
        console.log("Elemento 'output' no encontrado.");
        return;
    }

    mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
    duenos = JSON.parse(localStorage.getItem('duenos')) || [];
    veterinarios = JSON.parse(localStorage.getItem('veterinarios')) || [];

    output.innerHTML = '';

    if (mascotas.length > 0) {
        output.innerHTML += '<h3>Mascotas</h3>';
        mascotas.forEach(function(mascota) {
            output.innerHTML += `<p>ID: ${mascota.idMascota}, Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, ID Dueño: ${mascota.idDueno}</p>`;
        });
    }

    if (duenos.length > 0) {
        output.innerHTML += '<h3>Dueños</h3>';
        duenos.forEach(function(dueno) {
            output.innerHTML += `<p>ID: ${dueno.idDueno}, Nombre: ${dueno.nombre}, Correo: ${dueno.correo}, Celular: ${dueno.celular}, Dirección: ${dueno.direccion}</p>`;
        });
    }

    if (veterinarios.length > 0) {
        output.innerHTML += '<h3>Veterinarios</h3>';
        veterinarios.forEach(function(veterinario) {
            output.innerHTML += `<p>ID: ${veterinario.idVeterinario}, Nombre: ${veterinario.nombre}, Correo: ${veterinario.correo}, Celular: ${veterinario.celular}, Especialidad: ${veterinario.especialidad}</p>`;
        });
    }
}

// Llamar a la función para mostrar datos recolectados cuando la página principal se carga
document.addEventListener('DOMContentLoaded', mostrarDatosRecolectados);
