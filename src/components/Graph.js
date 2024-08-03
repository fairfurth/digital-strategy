import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserGraph = () => {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/report/users?customerId=1');
        console.log('API Response:', response.data); // Debugging log

        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
          const userData = response.data.map(user => user.age);
          const IdData = response.data.map(user => user.userId);
          console.log('User Data:', userData); // Debugging log
          console.log('ID Data:', IdData); // Debugging log

          setChartData({
            labels: IdData,
            datasets: [
              {
                label: 'Age of Users',
                data: userData,
                backgroundColor: 'rgba(112, 60, 91, 0.4)',
                borderColor: 'rgba(112, 60, 91, 1)',
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
                text: 'Number of Users by Age',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserGraph;
