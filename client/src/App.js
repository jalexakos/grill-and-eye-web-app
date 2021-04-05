import './App.css';
import { useState, useEffect } from 'react';

import NavBar from './NavBar/NavBar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, [])

  return (
    <div>
      <NavBar />
      <p>
          {!data ? "Loading..." : data}
      </p>
    </div>
  );
}

export default App;
