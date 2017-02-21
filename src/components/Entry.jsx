import React, {Component} from 'react';

import { EntryForm } from 'Components';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.saveEntry = this.saveEntry.bind(this);
  }

  saveEntry(data) {
    alert('form submited');
  }

  render() {
    return (
      <div className="page-container">
        <div className="title">Add new entry</div>
        <EntryForm onNewEntry={this.saveEntry} />
      </div>
    );
  }
}

export {Entry};
