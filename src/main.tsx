import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Headbar } from './components/Headbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
)
