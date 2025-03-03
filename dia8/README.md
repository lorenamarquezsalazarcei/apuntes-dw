# Día 8

## Formularios

- Etiqueta para formular etiquetas: <form>
- Utilizamos etiquetas <input> para ingresar datos. Algunos tipos de ellos eran: 
    - Radio
    - Checkbox
    - Text
    - Email
    - Password
Todos los inputs REQUIEREN el atributo `name` para enviar la información. Este debe 

- Los input suelen estar acompañados de un <label> como descripción.

Utilizamos otras etiquetas para algunos tipos datos, por ejemplo: <textarea> <select> + <option>

## Métodos de GET y POST para enviar información

GET=> Recibir Datos. Tiene un límite de 2048 caractéres. Es visible en la URL

- Se utilizaa para buscadores, filtros, paginación

POST=> Enviar datos. No tiene límite, se utiliza para enviar información de mayor tamaño, incluyendo el upload de archivos. Utiliza el curpo de la peticion

- Se utiliza para formulario de contacto, formulario de login/registro, formulario de Pago


Hacer un `login-form.html` sin estilos enviando información al atributo action=""

<form action="./" metod="GET"> Con el action le vamos a decir a donde vamos a enviar la información

