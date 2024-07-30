import React from 'react';

const Phase = ({ number , image}) => {
  return (
      <div className="p-4 border border-gray-200 rounded-lg mb-4">
           <h2 className="text-xl font-bold mb-2">Phases</h2>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">

              <div className="w-full p-4 bg-white dark:bg-gray-800">
                   <img alt="Phase" src={image} className="object-cover w-full max-h-40"/>

                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                    </p>
                </div>
        </div>
      </div>
  );
};

export default Phase;
