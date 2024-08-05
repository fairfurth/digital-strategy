import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CaseGraph = () => {
 // const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/case?customerId=1');
        console.log('API Response:', response.data); // Debugging log

        if (response.data && Array.isArray(response.data)) {
         // setUsers(response.data);
          const countData = response.data.map(user => user.count);
          const IdData = response.data.map(user => user._id);
          console.log('Case Data:', countData); // Debugging log
          // console.log('ID Data:', IdData); // Debugging log

          setChartData({
            labels: IdData,
            datasets: [
              {
                label: 'Cases by Month',
                data: countData,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 205, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'],
                  borderColor: ['rgba(255, 99, 132, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 205, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(201, 203, 207, 1)'],
                borderWidth: 1,
              },
            ],
          });
          setLoading(false);
        } else {
          setError('Invalid data format');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 border border-gray-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">User Ages</h2>
      <div className="p-4 border border-gray-200 bg-slate-100 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-4">User Distribution by Age</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Number of Cases by Month',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CaseGraph;
