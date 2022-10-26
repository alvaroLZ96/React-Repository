import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>The Music Library</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="music">Music</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default App;
