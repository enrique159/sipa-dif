import { showSnackbar } from '@/utils/showSnackbar'

export function errorAuthUser(response) {
  if (response.error == 'internalError') {
    showSnackbar('Ocurrió un error en el servidor', 'red')
  } else if (response.error == 'incorrectPassword') {
    showSnackbar('Usuario o contraseña incorrectos', 'red')
  } else if (response.error == 'userNotFound') {
    showSnackbar('No se encontró un usuario con esas credenciales', 'red')
  } else {
    showSnackbar('Ocurrió un error de servidor', 'red')
  }
}