import { useState } from 'react';

const brands = [
  { name: 'Disney', icon: '🏰', color: 'from-blue-900 to-blue-600' },
  { name: 'Pixar', icon: '🎨', color: 'from-purple-900 to-purple-600' },
  { name: 'Marvel', icon: '🦸', color: 'from-red-900 to-red-600' },
  { name: 'Star Wars', icon: '⚔️', color: 'from-yellow-900 to-yellow-600' },
  { name: 'National Geographic', icon: '🌍', color: 'from-green-900 to-green-600' },
];

interface Movie {
  id: string;
  title: string;
  brand: string;
  icon: string;
}

const DisneyPlus: React.FC = () => {
  const [movies] = useState<Movie[]>([
    { id: '1', title: 'The Mandalorian', brand: 'Star Wars', icon: '🔫' },
    { id: '2', title: 'Loki', brand: 'Marvel', icon: '🦹' },
    { id: '3', title: 'Frozen II', brand: 'Disney', icon: '❄️' },
    { id: '4', title: 'Soul', brand: 'Pixar', icon: '🎹' },
    { id: '5', title: 'WandaVision', brand: 'Marvel', icon: '🔮' },
    { id: '6', title: 'Moana', brand: 'Disney', icon: '🌊' },
  ]);

  return (
    <div className="h-full bg-[#1a1d29] text-white overflow-auto">
      {/* Brands */}
      <div className="p-6">
        <div className="grid grid-cols-5 gap-4 mb-8">
          {brands.map(brand => (
            <div 
              key={brand.name}
              className={`aspect-[2/1] bg-gradient-to-r ${brand.color} rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border border-gray-600`}
            >
              <span className="text-4xl mr-2">{brand.icon}</span>
              <span className="font-semibold">{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className="aspect-[3/1] bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-lg flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <h1 className="text-4xl font-bold">Featured Content</h1>
          </div>
        </div>

        {/* Trending */}
        <h2 className="text-xl font-bold mb-4">Trending</h2>
        <div className="grid grid-cols-6 gap-4">
          {movies.map(movie => (
            <div key={movie.id} className="cursor-pointer group">
              <div className="aspect-[2/3] bg-gray-800 rounded-lg flex items-center justify-center text-4xl mb-2 group-hover:ring-2 ring-white transition-all">
                {movie.icon}
              </div>
              <div className="text-sm font-medium">{movie.title}</div>
              <div className="text-xs text-gray-400">{movie.brand}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisneyPlus;
