import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BaseLayout from './base-layout';

function App() {
  const [hasSidebar, setHasSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setHasSidebar(!hasSidebar);
  };

  return (
    <>
      <button className='fixed bottom-5 right-5' onClick={handleToggleSidebar}>
        Toggle Sidebar
      </button>
      <BaseLayout hasSidebar={hasSidebar} />
    </>
  );
}

export default App;
