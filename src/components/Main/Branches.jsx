import { FaMapMarkerAlt } from 'react-icons/fa';

const Branches = () => {
  return (
    <div className="px-3 mt-16">
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-serif font-bold text-[#092469]">
        ¡Tenemos una tienda cerca de ti!
      </h1>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl  font-medium">
        Descubre nuestras ubicaciones y visita nuestras tiendas.
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto my-12 px-8 lg:px-20 justify-items-center cursor-pointer">
        <div className="border border-white hover:border hover:border-red-700 rounded-xl shadow-slate-500 shadow-md w-full max-w-[550px] max-h-[500px]">
          <iframe
            className="w-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.8208581962125!2d-91.56091228480794!3d14.869982000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUyJzExLjkiTiA5McKwMzMnMzEuNyJX!5e0!3m2!1sen!2s!4v1686606182896!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0, width: '100%', height: '300px' }}
          ></iframe>
          <h2 className="text-center py-3 text-lg font-medium">La Esperanza, Quetzaltenango</h2>
          <p className="text-center">7ma. Av. 2-60 zona 1 La Esperanza, Quetzaltenango.</p>
          <a
            href="https://www.google.com/maps/place/14.869982,-91.558723/data=!3m1!1e3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-center text-lg font-medium cursor-pointer text-blue-500 hover:text-blue-700 mb-3">
              Visitar
            </h3>
          </a>
        </div>
        <div className="border border-white hover:border hover:border-red-500 rounded-xl shadow-slate-500 shadow-md w-full max-w-[550px] max-h-[500px]">
          <iframe
            className="w-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.3692390634195!2d-91.52670408480746!3d14.842348000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e99ab90869a8f%3A0xb094ebc378e129bc!2sQuetzalcoat%2C%20Centro%20de%20pinturas!5e0!3m2!1sen!2sgt!4v1686606182896!5m2!1sen!2sgt"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0, width: '100%', height: '300px' }}
          ></iframe>
          <h2 className="text-center py-3 text-lg font-medium">Quetzaltenango, Quetzaltenango</h2>
          <p className="text-center">20 Av. 1-11 zona 3 Quetzaltenango, Quetzaltenango.</p>
          <a
            href="https://www.google.com/maps/place/Quetzalcoat,+Centro+de+pinturas/@14.842348,-91.5245156,17z/data=!3m1!4b1!4m6!3m5!1s0x858e99ab90869a8f:0xb094ebc378e129bc!8m2!3d14.842348!4d-91.5245156!16s%2Fg%2F11l1_yyx60?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-center text-lg font-medium cursor-pointer text-blue-500 hover:text-blue-700 mb-3">
              Visitar
            </h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Branches;
