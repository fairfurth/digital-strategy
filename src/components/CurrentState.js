import React from 'react';

const CurrentState = () => {
  return (
    <div className="p-4 border border-grey-200 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Current State</h2>

<div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-purple-900">
    <ul className="flex flex-col divide-y divide">
        <li className="flex flex-row">
            <div className="flex items-center flex-1 p-4 cursor-pointer select-none">

                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                        Cloud
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                        Self hosting
                    </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                    Good
                </div>
            </div>
        </li>
        <li className="flex flex-row">
            <div className="flex items-center flex-1 p-4 cursor-pointer select-none">

                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                        Security
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                        Identity Management
                    </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                   Medium
                </div>
            </div>
        </li>
        <li className="flex flex-row">
            <div className="flex items-center flex-1 p-4 cursor-pointer select-none">

                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                        Cost
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                       Supplier Constracts
                    </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                    Medium
                </div>
            </div>
        </li>
        <li className="flex flex-row">
            <div className="flex items-center flex-1 p-4 cursor-pointer select-none">

                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                        Access
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                        Remote Desktop
                    </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200">
                    Poor
                </div>
            </div>
        </li>
    </ul>
</div>

    </div>
  );
};

export default CurrentState;
