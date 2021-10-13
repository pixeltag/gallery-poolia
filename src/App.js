import './assets/css/App.css';
import Header from './layout/Header'
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
