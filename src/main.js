import App from './App.html'

const app = new App({
  target: document.body,
  data: {
    name: 'world23'
  }
})

window.app = app

export default app
