import React from 'react';
import './App.css';

const products = [
  {
    name: 'Gomitas',
    description: 'Ricas gomitas de ositos',
    image: '/gomitas.png'
  },
  {
    name: 'Mazapán',
    description: 'Delicioso mazapán tradicional',
    image: '/mazapan.png'
  },
  {
    name: 'Tamborines',
    description: 'Pica pica tamborín',
    image: '/tambor.png'
  }
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="toolbar">
          <h1 className="title">Diseño Responsivo</h1>
        </div>
      </header>

      <main className="content">
        <h2>Productos Destacados</h2>

        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="responsive-image"
                  loading="lazy"
                />
              </div>
              <div className="card-header">
                <h3 className="product-title">{product.name}</h3>
              </div>
              <div className="card-content">
                <p className="product-description">{product.description}</p>
                <button className="details-button">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>

        <div className="info-section">
          <div className="info-text">
            <h3>Sobre nosotros</h3>
            <p>
              Somos una empresa dedicada a proporcionar los mejores productos con la mejor calidad.
              Nuestro compromiso es la satisfacción de nuestros clientes.
            </p>
          </div>
          <div className="info-image">
            <img
              src="/mujer.png"
              alt="Sobre nosotros"
              className="responsive-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
