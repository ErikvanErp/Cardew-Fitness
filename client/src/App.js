import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditClient from './views/EditClient';
import NewClient from './views/NewClient';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<EditClient />} path="/clients/:id" />
        <Route element={<NewClient />} path="/clients/new" />
      </Routes>
    </div>
  );
}

export default App;
