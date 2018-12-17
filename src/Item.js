import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <li key={props.counter}>{props.item}</li>
  )
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Item;