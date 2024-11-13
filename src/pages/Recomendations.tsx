import { useState } from 'react';

const categories = [
  {
    title: 'Aventura y Naturaleza',
    description: 'Explora caminatas, ciclismo de montaña, y el hermoso paisaje natural de Calango.',
    imageUrl: './images/4.svg',
    link: '#',
  },
  {
    title: 'Gastronomía Local',
    description: 'Disfruta de los platillos y bebidas típicas de la región.',
    imageUrl: './images/5.svg',
    link: '#',
  },
  {
    title: 'Turismo Cultural e Histórico',
    description: 'Conoce los sitios arqueológicos y monumentos históricos de Calango.',
    imageUrl: './images/6.svg',
    link: '#',
  },
  {
    title: 'Agroturismo',
    description: 'Experimenta la vida rural y descubre prácticas agrícolas tradicionales.',
    imageUrl: './images/7.svg',
    link: '#',
  },
  {
    title: 'Eco-Turismo',
    description: 'Disfruta de actividades y recorridos para cuidar el medio ambiente.',
    imageUrl: './images/8.svg',
    link: '#',
  },
  {
    title: 'Bienestar y Relax',
    description: 'Encuentra paz en retiros y hospedajes en el entorno natural de Calango.',
    imageUrl: './images/9.svg',
    link: '#',
  },
];

const recomendaciones = [
  { 
    titulo: 'Tour de Aventura', 
    descripcion: 'Explora emocionantes rutas en Calango.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.5, 
    categoria: 'Aventura y Naturaleza', 
    duracion: '3h', 
    precio: 50 
  },
  { 
    titulo: 'Experiencia Cultural', 
    descripcion: 'Sumérgete en la historia y cultura local.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.7, 
    categoria: 'Turismo Cultural e Histórico', 
    duracion: '4h', 
    precio: 30 
  },
  { 
    titulo: 'Caminata en la Naturaleza', 
    descripcion: 'Descubre los paisajes naturales de Calango.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.8, 
    categoria: 'Aventura y Naturaleza', 
    duracion: '2h', 
    precio: 20 
  },
  { 
    titulo: 'Tour Gastronómico', 
    descripcion: 'Prueba los sabores únicos de la región.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.6, 
    categoria: 'Gastronomía Local', 
    duracion: '5h', 
    precio: 70 
  },
  { 
    titulo: 'Cata de Manzanas', 
    descripcion: 'Degusta las diferentes variedades de manzanas cultivadas en la región.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.9, 
    categoria: 'Gastronomía Local', 
    duracion: '2h', 
    precio: 25 
  },
  { 
    titulo: 'Festival del Camarón', 
    descripcion: 'Celebra el camarón con platillos típicos y actividades culturales.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.8, 
    categoria: 'Gastronomía Local', 
    duracion: '6h', 
    precio: 40 
  },
  { 
    titulo: 'Excursión a la Costa', 
    descripcion: 'Visita las playas cercanas y disfruta de la pesca de camarones.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.7, 
    categoria: 'Aventura y Naturaleza', 
    duracion: '5h', 
    precio: 60 
  },
  { 
    titulo: 'Clases de Cocina con Camarones', 
    descripcion: 'Aprende a preparar platillos deliciosos con camarones frescos.', 
    imagenUrl: './images/9.svg', 
    calificacion: 4.6, 
    categoria: 'Gastronomía Local', 
    duracion: '3h', 
    precio: 35 
  },
];

const categorias = ['Todas', ...categories.map(c => c.title)];

export default function Recomendations() {
  const [categoria, setCategoria] = useState('Todas');
  const [precio, setPrecio] = useState(0);

  const filtradas = recomendaciones.filter(rec => 
    (categoria === 'Todas' || rec.categoria === categoria) &&
    (precio === 0 || rec.precio <= precio)
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Explora Calango</h2>
      
      <div className="flex justify-center space-x-2 mb-6">
        {categorias.map(c => (
          <button 
            key={c} 
            className={`px-3 py-1 rounded-full transition duration-300 ${c === categoria ? 'bg-green-500 text-white transform scale-105' : 'bg-gray-200 hover:bg-gray-300'}`} 
            onClick={() => setCategoria(c)}>
            {c}
          </button>
        ))}
        <input 
          type="number" 
          placeholder="Max precio" 
          className="border p-1 rounded"
          onChange={(e) => setPrecio(Number(e.target.value))} 
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((rec, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 transition-transform transform hover:scale-105">
            <img className="w-full h-32 object-cover rounded" src={rec.imagenUrl} alt={rec.titulo} />
            <h3 className="mt-4 text-xl font-semibold">{rec.titulo}</h3>
            <p className="text-gray-600">{rec.descripcion}</p>
            <div className="text-sm mt-2 text-green-700">Calificación: {rec.calificacion}</div>
            <div className="text-sm text-gray-500">Duración: {rec.duracion} | Precio: ${rec.precio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
