# Tienda Caso 4 TecnoFit 

## Objetivo

El objetivo principal del proyecto es desarrollar una página web funcional que permita:

- Registrar nuevos usuarios.
- Validar la información ingresada en el formulario.
- Registrar uno o más dispositivos inteligentes.
- Guardar la información de los usuarios utilizando Local Storage.
- Permitir el inicio de sesión de usuarios registrados.
- Mostrar mensajes de error claros y personalizados.
- Contar con un diseño visual sencillo y ordenado.

---

## Tecnologias utilizadas

Lo usado en el proyecto fue principalmente

- **HTML5:** estructura de las paginas web.
- **CSS3:** diseño y personalización visual.
- **JavaScript:** validaciones, registro, login y manejo de Local Storage.
- **Bootstrap 5:** componentes y estilos base para los formularios y botones.
- **Local Storage:** almacenamiento de los usuarios registrados en el navegador.
- **Git y GitHub:** almacenamiento y control de versiones del proyecto.

---

## La Estructura del proyecto

El proyecto esta organizado de la siguiente manera:

```text
Tienda_TecnoFit/
│
├── img.png
├── index.html
├── login.html
├── login.js
├── oliva.png
├── registro.html
└── registro.js
└── stylesheet.css
```


# Uso que di a la inteligencia artificial

- Unicamente fue usada ChatGPT y los prompts que utilice fueron los siguientes para dar un desarrollo completo al proyecto.

# Prompts utilizados para el desarrollo

- No se esta guardando el usuario en el registro, a que se debe eso? Solución propuesta mediante Local Storage para guardar la información de los usuarios registrados.

```javascript
localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);
```

- Necesito ayuda para el ajuste de letras y pantallas al medio del registro dame una formas para hacerlo correctamente, y con alguna forma de pantalla de diferentes tamaños :)

```css
body {
    background-color: #19c3c8;
    color: #111111;
    font-family: Arial, sans-serif;
}

.card {
    border: none;
    border-radius: 18px;
}

.btn-dark {
    background-color: #111111;
    border-color: #111111;
}

.btn-dark:hover {
    background-color: #19c3c8;
    border-color: #19c3c8;
}

```

