const loginForm =
    document.getElementById("loginForm");

const correoLogin =
    document.getElementById("correoLogin");

const passwordLogin =
    document.getElementById("passwordLogin");

const errorCorreoLogin =
    document.getElementById("errorCorreoLogin");

const errorPasswordLogin =
    document.getElementById("errorPasswordLogin");

const mensajeLogin =
    document.getElementById("mensajeLogin");

correoLogin.addEventListener("input", function() {

    const correo =
        correoLogin.value.trim();

    errorCorreoLogin.textContent = "";

    if (correo === "") {

        return;

    }

    const patron =
        /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl)$/;


    if (!patron.test(correo)) {

        errorCorreoLogin.textContent =
            "El correo debe ser @duoc.cl o @profesor.duoc.cl.";

    }

});

passwordLogin.addEventListener("input", function() {

    const password =
        passwordLogin.value;

    errorPasswordLogin.textContent = "";


    if (password === "") {

        return;

    }


    if (password.length < 8) {

        errorPasswordLogin.textContent =
            "La contraseña debe tener al menos 8 caracteres.";

    }

});

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    errorCorreoLogin.textContent = "";

    errorPasswordLogin.textContent = "";

    mensajeLogin.textContent = "";

    mensajeLogin.classList.remove("text-success");

    const correo =
        correoLogin.value.trim();

    const password =
        passwordLogin.value;

    if (correo === "") {

        errorCorreoLogin.textContent =
            "El correo es obligatorio.";

        return;

    }

    const patronCorreo =
        /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl)$/;


    if (!patronCorreo.test(correo)) {

        errorCorreoLogin.textContent =
            "Ingresa un correo @duoc.cl o @profesor.duoc.cl.";

        return;

    }

    if (password === "") {

        errorPasswordLogin.textContent =
            "La contraseña es obligatoria.";

        return;

    }

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];


    const usuarioEncontrado =
        usuarios.find(function(usuario) {

            return usuario.correo === correo;

        });

    if (!usuarioEncontrado) {

        errorCorreoLogin.textContent =
            "El correo ingresado no está registrado.";

        return;

    }

    if (usuarioEncontrado.password !== password) {

        errorPasswordLogin.textContent =
            "La contraseña ingresada es incorrecta.";

        return;

    }

    mensajeLogin.classList.add("text-success");

    mensajeLogin.textContent =
        "Inicio de sesion correcto. ¡Bienvenido a TecnoFit!";

    localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioEncontrado)
    );

});