import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
//const Initiatives = () => {

    const UserGraph = () => {
        const [users, setUsers] = useState([]);
        const [chartData, setChartData] = useState([]);
        useEffect(() => {
            const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5001/report/users?customerId=1');
                setUsers(response.data);
                console.log('users', response.data);
                const userData = users.map(users => users.age);
                const IdData = users.map(users => users.userId)
                console.log('users', userData);
                setChartData({
          labels: IdData,
          datasets: [
            {
              label: 'Age of Users',
              data: userData,
              backgroundColor: 'rgba(75, 92, 292, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
            } catch (error) {
                console.error('Error fetching current state:', error)
            }
            }
      fetchUsers();
  }, []);

        return (

    <div className="p-4 border border-gray-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">User Ages</h2>

         <div className="p-4 border border-gray-200 bg-slate-100 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4">User Distribution by Date</h2>
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
/*  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/report/users?customerId=1');
          const data = response.data;
          console.log('Returned Data', data);
          const firstName = data.map(item => item.firstName);
          //const firstName = ['a', 'b','c','d'];
          const counts = data.map(item => item.phone);
          //const counts = [1,2,1,2]
        setChartData({
          labels: firstName,
          datasets: [
            {
              label: 'Number of Users',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching customer data for graph:', error);
      }
    };
      console.log('about to call fetchUserData');
    fetchUserData();
  }, []);

  return (
    <div className="p-4 border border-gray-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4">User Distribution by Date</h2>
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
              text: 'Number of Users by Date',
            },
          },
        }}
      />
    </div>
  );
};
*/
export default UserGraph;
