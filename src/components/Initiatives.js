import React, {useEffect, useState} from 'react';
import axios from 'axios';



const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/initiative?strategyId=1');
        setInitiatives(response.data)
      } catch (error) {
        console.error('Error fetching current state:', error)
      }
    }
    fetchInitiatives();
  }, []);



  return (
    <div className="p-4 border border-gray-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Initiatives</h2>

        <div className="grid grid-cols-3 gap-4">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white bg-opacity-80">
              <h3 className="text-lg font-semibold mb-2">{initiative.initiativeName}</h3>
              <p>{initiative.initiatveDescription}</p>
            </div>
          ))}
        </div>
    </div>
  );

};

export default Initiatives;
