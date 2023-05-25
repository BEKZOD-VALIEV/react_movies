import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import Provider from './context'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Provider>
		    <App />
		</Provider>
	</StrictMode>
)
