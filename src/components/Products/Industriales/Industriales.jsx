import { useEffect, useState } from 'react';
import CardIndustriales from './CardIndustriales';

const Industriales = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../../../products/industrial.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.industrial)) {
          setData(data.industrial);
        } else {
          console.error('Error: expected data.industrial to be an array');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid gap-8 sm:gap-8 md:gap-14 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center ">
      {data.map((item) => (
        <CardIndustriales
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

export default Industriales;
