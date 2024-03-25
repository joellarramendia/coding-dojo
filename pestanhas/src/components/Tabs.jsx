import React, { useState } from 'react';
import './Tabs.css'; // Archivo de estilos CSS para las pestañas

function Tabs({ tabs }) {
  // Estado para mantener el índice de la pestaña activa
  const [activeTab, setActiveTab] = useState(0);

  // Función para cambiar la pestaña activa
  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      {/* Renderizar los encabezados de las pestañas */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => {
              changeTab(index);
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {/* Div que contiene el contenido de la pestaña activa */}
      <div className="tab-content">
          {tabs[activeTab].content}
        </div>
    </div>
  );
}

export default Tabs;
