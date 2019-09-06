import React from 'react';
import PropTypes from 'prop-types';
// import './VerticalBar.css';

function Keg(props) {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '150px'
  }
  const barStyles = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  }
  return (
    <div style={containerStyles} className='VerticalBar'>
      <div style={barStyles} />
      <div>{props.label}</div>
    </div>
  );
}

Keg.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string
};

export default Keg;
