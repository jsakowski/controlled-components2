import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewItem extends Component {
  state = {
    value: ''
  }
  
  handleChange = (value) => {
    this.setState({ value: value });
  };

  addItem = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  }

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render () {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={(event) => this.handleChange(event.target.value)}
       />
       <button disabled={this.inputIsEmpty()}>Add</button>
     </form>  
    )
  }
}

NewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default NewItem