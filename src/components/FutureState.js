import React, {useEffect, useState} from 'react';
import axios from 'axios';
    const CurrentState = () => {
    const [futureState, setFutureState] = useState([]);
    useEffect(() => {
        const fetchFutureState = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/futurestate?strategyId=1');
                setFutureState(response.data)
            } catch (error) {
                console.error('Error fetching current state:', error)
            }
        }
        fetchFutureState();
    },[]);

    return (
        <div className="p-4 border border-grey-200 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Future State</h2>
            {futureState.length > 0 ? (
                <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-teal-900">
                    {futureState.map((items) => (

                        <ul className="flex flex-col divide-y divide">
                            <li className="flex flex-row">
                                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            {items.futureItemName}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-200">
                                            {items.futureItemDescription}
                                        </div>
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-200">
                                            {items.futureItemState}
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
