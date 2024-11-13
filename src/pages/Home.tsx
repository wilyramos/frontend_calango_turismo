
import Categories from "../components/Categories";

export default function Home(){
   return (
      <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center text-blue-600">Encuentra tu siguiente aventura</h2>
          
          <p className="mt-4 text-gray-700 text-center">Descubre un turismo personalizado recomendado para ti.</p>
          <Categories />
        </div>
      );
    };


