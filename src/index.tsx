import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import '@/fonts/fontawesome/css/all.min.css'
import '@/sass/style.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
