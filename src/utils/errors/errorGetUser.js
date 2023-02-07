import { showSnackbar } from '@/utils/showSnackbar'

export function errorGetUser(response) {
  if (response.error == 'unauthorized') {
    showSnackbar('No tienes permisos para r', 'red')
  } else if (response.error == 'expiredtoken') {
    showSnackbar('Tu sesión ha expirado, vuelve a iniciar sesión', 'red')
  } else if (response.error == 'internalError') {
    showSnackbar('Ha ocurrido un error en el servidor', 'red')
  } else if (response.error == 'nullToken') {
    showSnackbar('Ha ocurrido un error en el servidor', 'red')
  } else {
    showSnackbar('Ocurrió un error de servidor', 'red')
  }
}