import Home from './components/Home';
import DataProvider from './context/DataProvider';
import './App.css';

function App() {
  return (<>
  <DataProvider>
    <Home/>
    </DataProvider>
    </>

  );
}

export default App;
