import React from 'react'
import PropTypes from 'prop-types'

const ControlButtons = ({ isActivated, onStart, onPause, onReset, onSplit }) => {
  return (
    <div>
      <style jsx>{`
        .left-btn, .right-btn {
          border-radius: 50%;
          width: 70px;
          height: 70px;
        }

        .left-btn {
          margin: 0 35px 0 0;
        }

        .right-btn {
          margin: 0 0 0 35px;
        }        
      `}</style>
      { 
        !isActivated ? 
        (<>
          <button className='left-btn' onClick={ onReset }>复位</button>
          <button className='right-btn' onClick={ onStart }>开始</button>
        </>) : 
        (<>
          <button className='left-btn' onClick={ onSplit }>计次</button>
          <button className='right-btn' onClick={ onPause }>停止</button>
        </>)
      }
    </div>
  )
}

ControlButtons.propTypes = {
  isActivated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired
}

export default ControlButtons
