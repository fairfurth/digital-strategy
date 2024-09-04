import React, { useState } from 'react';
import axios from 'axios';

const CurrentStateForm = () => {
  const [formData, setFormData] = useState({
    strategyId: '',
    currentItemId: '',
    currentItemName: '',
    currentItemDescription: '',
    currentItemState: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:5001/api/currentstate', formData);
      console.log('Data saved:', response.data);
      setSuccess(true);
      setFormData({
        strategyId: '',
        currentItemId: '',
        currentItemName: '',
        currentItemDescription: '',
        currentItemState: ''
      });
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Error saving data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Current State Form</h2>
          <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-2 gap-1">
                    <div className="w-1/2 mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="strategyId">
                        Strategy ID
                    </label>
                    <input
                        type="number"
                        id="strategyId"
                        name="strategyId"
                        value={formData.strategyId}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                    </div>
                    <div className="w-1/2 mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="currentItemId">
                        Current Item ID
                    </label>
                    <input
                        type="number"
                        id="currentItemId"
                        name="currentItemId"
                        value={formData.currentItemId}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                  </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="currentItemName">
            Current Item Name
          </label>
          <input
            type="text"
            id="currentItemName"
            name="currentItemName"
            value={formData.currentItemName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="currentItemDescription">
            Current Item Description
          </label>
          <textarea
            id="currentItemDescription"
            name="currentItemDescription"
            value={formData.currentItemDescription}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="currentItemState">
            Current Item State
          </label>
          <input
            type="text"
            id="currentItemState"
            name="currentItemState"
            value={formData.currentItemState}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
              </div>
         <div className="flex justify-end">
        <button
          type="submit"
          className=" px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Submitting...' : 'Submit'}
              </button>
              </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">Data saved successfully!</p>}
      </form>
    </div>
  );
};

export default CurrentStateForm;
