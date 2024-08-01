import React, {useEffect, useState} from 'react';
import axios from 'axios';
    const CurrentState = () => {
    const [currentState, setCurrentState] = useState([]);
    useEffect(() => {
        const fetchCurrentState = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/currentstate?strategyId=1');
                setCurrentState(response.data)
            } catch (error) {
                console.error('Error fetching current state:', error)
            }
        }
        fetchCurrentState();
    },[]);

    return (
        <div className="p-4 border border-grey-200 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Current State</h2>
            {currentState.length > 0 ? (
                <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-purple-900">
                    {currentState.map((items) => (

                        <ul className="flex flex-col divide-y divide">
                            <li className="flex flex-row">
                                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            {items.currentItemName}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-200">
                                            {items.currentItemDescription}
                                        </div>
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-200">
                                            {items.currentItemState}
                                        </div>

                                </div>
                            </li>
                        </ul>
                    ))}

                </div>
            ) : (
                    <p>No records found</p>
            )}
        </div>
    );

};


export default CurrentState;
