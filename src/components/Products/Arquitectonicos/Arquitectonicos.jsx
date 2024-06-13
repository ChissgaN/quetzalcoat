import { useEffect, useState } from 'react';
import CardArquitectonicos from './CardArquitectonicos';

const Arquitectonicos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../../../products/arquitectonicos.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.arquitectonicos)) {
          setData(data.arquitectonicos);
        } else {
          console.error('Error: expected data.arquitectonicos to be an array');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid gap-8 sm:gap-8 md:gap-14 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center ">
      {data.map((item) => (
        <CardArquitectonicos
          key={item.id}
          imagen={item.imagen}
          nombre={item.nombre}
          descripcion={item.descripcion}
          precio={item.precio}
        />
      ))}
    </div>
  );
};

export default Arquitectonicos;
