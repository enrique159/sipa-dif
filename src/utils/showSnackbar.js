import store from '@/store'

export function showSnackbar(text, color) {
  store.dispatch('setSnackbar', { show: true, text: text, color: color, timeout: 4000,})
}