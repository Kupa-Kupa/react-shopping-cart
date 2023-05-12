import '../styles/App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>
        Explore Shop Shop's wide range of products on the{' '}
        <Link to="/shop">Shop page</Link>.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam
        sed corrupti quibusdam molestiae nihil error unde sint atque, ad
        expedita doloremque debitis autem saepe vel numquam doloribus ducimus
        dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nobis aut provident a molestiae, dolor adipisci obcaecati! Est quo sit
        quia! Consequatur pariatur beatae odio. Dolores error possimus sint ad!{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam
        sed corrupti quibusdam molestiae nihil error unde sint atque, ad
        expedita doloremque debitis autem saepe vel numquam doloribus ducimus
        dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem nobis aut provident a molestiae, dolor adipisci
        obcaecati! Est quo sit quia! Consequatur pariatur beatae odio. Dolores
        error possimus sint ad!{' '}
      </p>
    </div>
  );
};

export default App;
