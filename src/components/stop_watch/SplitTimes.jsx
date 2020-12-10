import React from 'react'
import PropTypes from 'prop-types'

import MajorClock from './MajorClock'

const SplitTimes = ({ splitTimes = [] }) => {
  return splitTimes.map((v, k) => (
    <MajorClock milliseconds={ v } key={ k } />
  ))
}

SplitTimes.prototypes = {
  splitTimes: PropTypes.arrayOf(Number).isRequired
}

export default SplitTimes
