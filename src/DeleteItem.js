import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = props => {  
  return (
    <button onClick={(event) => props.onDeleteLastItem()} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
}

DeleteItem.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteItem;