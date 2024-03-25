import React, {useState} from 'react';

function ColorBoxForm() {
    //Estado para almacenar el color ingresado en el campo de entrada
    const [color, setColor] = useState('');
    //Estado para almacenar la lista de colores agregados
    const [colorBoxes, setColorBoxes] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //Verifica di el color ingresado no esta vacio
      if (color.trim() !== '') {
        //Agrega el color a la lista de colores
        setColorBoxes(prevColorBoxes => [...prevColorBoxes, color]);
        setColor(''); // Limpiar el estado del color después de agregarlo
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Color:
            <input className='input' type="text" value={color} onChange={(event) => setColor(event.target.value)} required />
          </label>
          <button className='btn-add' type="submit">Agregar</button>
        </form>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colorBoxes.map((color, index) => (
            <div
              key={index}
              style={{
                width: '100px',
                height: '100px',
                margin: '10px',
                backgroundColor: color,
                border: '2px solid black'
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ColorBoxForm;