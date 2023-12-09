# Endpoint: POST/usuario

Permite crear un nuevo usuario.

## Parámetros del Cuerpo (JSON)
- nombre (obligatorio): Nombre del nuevo usuario.
- email (obligatorio): Correo electrónico del nuevo usuario.

## Ejemplo de Solicitud
http
POST /usuario/{id}
Content-Type: application/json

{ 
  "nombre": "Alex Zermeño",
  "correoElectronico": "test@mail.com",
}



## Respuesta Exitosa (Código 200 OK)
json
{
  "mensaje": "Usuario creado exitosamente."
}


## Respuestas de Errores Posibles
- Código 404 Not Found:

  json
  {
  "error": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
  }
  

- Código 500 Internal Server Error:
  json
  {
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
   

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.