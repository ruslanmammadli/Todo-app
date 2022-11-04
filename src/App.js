import React from 'react'
import Details from './components/Details';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <div className="main h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-md max-w-mobile">
        <Details />
        <TodoLists />
      </div>
    </div>
  );
}

export default App;
