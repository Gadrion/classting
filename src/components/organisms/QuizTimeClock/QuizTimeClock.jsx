import React from 'react'
import PropTypes from 'prop-types';

const pad = number => String(number).padStart(2, '0');

const QuizTimeClock = ({ hour, min, sec }) => {
  return (
    <div>
      {`${pad((hour))}:${pad(min)}:${pad(sec)}`}
    </div>
  )
}

QuizTimeClock.propTypes = {
  hour: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
}

export default QuizTimeClock;
