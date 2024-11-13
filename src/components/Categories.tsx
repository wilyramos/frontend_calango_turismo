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

export default function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 transition duration-300 hover:text-blue-600">
              {category.title}
            </h3>
            <p className="text-gray-700 mb-4">{category.description}</p>
            <a
              href={category.link}
              className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

