import React from 'react';
import Vision from './Vision';
import CurrentState from './CurrentState';
import Initiatives from './Initiatives';
import FutureState from './FutureState';
import Phase from './Phase';
import Principles from './Principles';
import Measures from './Measures';
import UserGraph from './Graph.js';
import LineTest from './LineTest.js';

const DigitalStrategy = () => {
  return (
    <div className="digital-strategy">
      <Vision />
      <div className="row">
        <CurrentState />
        <Initiatives />
        <FutureState />
      </div>
      <div className="phases">
        <Phase number={1} image={'images/Phase1.jpg'} />
        <Phase number={2} image={'images/Phase2.jpg'}/>
        <Phase number={3} image={'images/Phase3.jpg'}/>
        <Phase number={4} image={'images/Phase4.jpg'}/>
      </div>
      <Principles />
      <Measures />
      <LineTest />
      <UserGraph />
    </div>
  );
};

export default DigitalStrategy;
