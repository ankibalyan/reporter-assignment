import React, {Component} from 'react';

import {Graph} from 'Components';

class Report extends Component {
  render() {
    return (
      <div className="page-container text-center">
        <Graph value={75} />
      </div>
    );
  }
}

export {Report};
