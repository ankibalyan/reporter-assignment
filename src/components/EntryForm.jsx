import React, {Component} from 'react';

class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const data = {};

    this.props.onNewEntry(data);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter name" />
          <input type="number" ref="value" placeholder="Value for the identity" />
          <input type="date" ref="startDate" placeholder="" />
          <input type="date" ref="endDate" placeholder="" />
          <input type="submit" value="save" className="hollow button expanded" />
        </form>
      </div>
    );
  }
}

export {EntryForm};
