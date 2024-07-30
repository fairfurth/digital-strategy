import React from 'react';

const initiatives = [
  { title: 'Security', description: 'Description for initiative 1' },
  { title: 'Digital marketing', description: 'Description for initiative 2' },
  { title: 'SEO', description: 'Description for initiative 3' },
  { title: 'Data Analytics', description: 'Description for initiative 4' },
  { title: 'Enagement', description: 'Description for initiative 5' },
  { title: 'Efficiency', description: 'Description for initiative 6' }
];

const Initiatives = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Initiatives</h2>
      <div className="grid grid-cols-3 gap-4">
        {initiatives.map((initiative, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white bg-opacity-80">
            <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
            <p>{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
