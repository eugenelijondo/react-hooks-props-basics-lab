import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Links from './Links';

const App = () => {
  const user = {
    name: 'Eugene Lijondo',
    city: 'Nairobi',
    bio: 'A passionate web developer',
    github: 'https://github.com/eugenelijondo',
    linkedin: 'https://linkedin.com/in/eugenelijondo'
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
