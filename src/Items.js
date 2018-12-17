import React from 'react'
import PropTypes from 'prop-types';
import Item from './Item'

const Items = (props) => {
  return (
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {props.items.map((item, index) => <Item item={item} counter={index} />)}
        </ol>
    </div>
  )
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Items