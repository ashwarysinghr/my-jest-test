import React from 'react';
import PropTypes from 'prop-types';
import Engine from './Engine';

const Car = ({ color, handleCarStart }) => {
  return (
    <div>
      <h1 id='car--heading' style={{ color }}>
        Its {color} car
      </h1>
      <Engine type='diesel' />
      <button id='car--start' type='button'
        onClick={() => handleCarStart({ startTime: 223 })} > Start
      </button>
    </div>
  );
}
Car.propTypes = {
  color: PropTypes.string.isRequired,
  handleCarStart: PropTypes.func.isRequired
};
export default Car;
