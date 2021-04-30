import './styles/App.css'
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Routes'>
        {routes}
      </div>
    </div>
  );
}

export default App;
