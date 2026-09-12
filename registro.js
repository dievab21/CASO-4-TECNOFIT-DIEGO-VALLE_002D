const formulario = document.getElementById("registroForm");

const agregarDispositivo = document.getElementById("agregarDispositivo");

const listaDispositivos = document.getElementById("listaDispositivos");

const mensajeRegistro = document.getElementById("mensajeRegistro");


agregarDispositivo.addEventListener("click", function() {

    const dispositivo = document.createElement("div");

    dispositivo.classList.add(
        "dispositivo-box",
        "border",
        "rounded",
        "p-3",
        "mb-3"
    );

    dispositivo.innerHTML = `

        <div class="mb-3">

            <label class="form-label">

                Tipo de Dispositivo

            </label>

            <select class="form-select tipoDispositivo">

                <option value="">

                    Seleccione un dispositivo

                </option>

                <option value="Smartwatch">

                    Smartwatch

                </option>

                <option value="Banda Deportiva">

                    Banda Deportiva

                </option>

                <option value="Ciclocomputador">

                    Ciclocomputador

                </option>

                <option value="Audífonos">

                    Audífonos

                </option>

            </select>

        </div>

        <div>

            <label class="form-label">

                Número de Serie

            </label>

            <input
                type="text"
                class="form-control numeroSerie"
                maxlength="12">

        </div>

        <div class="mensaje-error errorDispositivo"></div>

        <button
            type="button"
            class="btn btn-outline-danger btn-sm mt-3 eliminarDispositivo">

            Eliminar

        </button>

    `;

    listaDispositivos.appendChild(dispositivo);

});

listaDispositivos.addEventListener("click", function(event) {

    if (event.target.classList.contains("eliminarDispositivo")) {

        event.target.closest(".dispositivo-box").remove();

    }

});

function validarNombre(nombre) {

    if (nombre.trim() === "") {

        return "El nombre es obligatorio.";

    }

    if (nombre.length > 80) {

        return "El nombre no puede superar los 80 caracteres.";

    }

    const patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!patron.test(nombre)) {

        return "El nombre solo puede contener letras y espacios.";

    }

    return "";

}

function validarCorreo(correo) {

    if (correo.trim() === "") {

        return "El correo es obligatorio.";

    }

    if (correo.length > 60) {

        return "El correo no puede superar los 60 caracteres.";

    }

    const patron = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl)$/;

    if (!patron.test(correo)) {

        return "Ingresa un correo @duoc.cl o @profesor.duoc.cl.";

    }

    return "";

}

function validarPassword(password) {

    if (password === "") {

        return "La contraseña es obligatoria.";

    }

    if (password.length < 8) {

        return "La contraseña debe tener al menos 8 caracteres.";

    }

    if (!/[A-Z]/.test(password)) {

        return "Debe incluir una letra mayuscula.";

    }

    if (!/[a-z]/.test(password)) {

        return "Debe incluir una letra minuscula.";

    }

    if (!/[0-9]/.test(password)) {

        return "Debe incluir un numero.";

    }

    if (!/[#$%&]/.test(password)) {

        return "Debe incluir un caracter especial (#, $, %, &).";

    }

    return "";

}

function validarTelefono(telefono) {

    if (telefono === "") {

        return "";

    }

    const patron = /^[0-9]{9}$/;

    if (!patron.test(telefono)) {

        return "El telefono debe tener exactamente 9 digitos.";

    }

    return "";

}

function obtenerDispositivos() {

    const bloques =
        document.querySelectorAll(".dispositivo-box");

    const dispositivos = [];

    let hayError = false;

    if (bloques.length === 0) {

        mensajeRegistro.classList.remove("d-none");

        mensajeRegistro.classList.add("alert-danger");

        mensajeRegistro.textContent =
            "Debes registrar al menos un dispositivo.";

        return null;

    }


    bloques.forEach(function(bloque) {

        const tipo =
            bloque.querySelector(".tipoDispositivo").value;

        const serie =
            bloque.querySelector(".numeroSerie").value.trim();

        const error =
            bloque.querySelector(".errorDispositivo");


        error.textContent = "";


        if (tipo === "") {

            error.textContent =
                "Debes seleccionar un tipo de dispositivo.";

            hayError = true;

        }


        const patronSerie =
            /^[A-Za-z0-9]{12}$/;


        if (serie === "") {

            error.textContent =
                "El numero de serie es obligatorio.";

            hayError = true;

        } else if (!patronSerie.test(serie)) {

            error.textContent =
                "El numero de serie debe tener exactamente 12 caracteres alfanuméricos.";

            hayError = true;

        }


        dispositivos.push({

            tipo: tipo,

            numeroSerie: serie

        });

    });


    if (hayError) {

        return null;

    }


    return dispositivos;

}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("errorNombre").textContent = "";

    document.getElementById("errorCorreo").textContent = "";

    document.getElementById("errorPassword").textContent = "";

    document.getElementById("errorConfirmPassword").textContent = "";

    document.getElementById("errorTelefono").textContent = "";

    mensajeRegistro.classList.add("d-none");

    mensajeRegistro.textContent = "";

    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const telefono =
        document.getElementById("telefono").value.trim();

    const errorNombre =
        validarNombre(nombre);

    const errorCorreo =
        validarCorreo(correo);

    const errorPassword =
        validarPassword(password);

    const errorTelefono =
        validarTelefono(telefono);


    document.getElementById("errorNombre").textContent =
        errorNombre;

    document.getElementById("errorCorreo").textContent =
        errorCorreo;

    document.getElementById("errorPassword").textContent =
        errorPassword;

    document.getElementById("errorTelefono").textContent =
        errorTelefono;


    if (errorNombre ||
        errorCorreo ||
        errorPassword ||
        errorTelefono) {

        return;

    }

    if (password !== confirmPassword) {

        document.getElementById("errorConfirmPassword").textContent =
            "Las contraseñas no coinciden.";

        return;

    }

    const dispositivos =
        obtenerDispositivos();


    if (dispositivos === null) {

        return;

    }

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    const existe =
        usuarios.find(function(usuario) {

            return usuario.correo === correo;

        });


    if (existe) {

        document.getElementById("errorCorreo").textContent =
            "Este correo ya está registrado.";

        return;

    }

    const nuevoUsuario = {

        nombre: nombre,

        correo: correo,

        password: password,

        telefono: telefono,

        dispositivos: dispositivos

    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mensajeRegistro.classList.remove("d-none");

    mensajeRegistro.classList.remove("alert-danger");

    mensajeRegistro.classList.add("alert-success");

    mensajeRegistro.textContent =
        "Registro se ah realizado correctamente.";

    formulario.reset();

});