import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServe from 'react-dom/server';

class ErrorModal extends Component {
  componentDidMount() {
    const { title, message } = this.props;
    const modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="hollow button" data-close="">Okay</button>
        </p>
      </div>
    );
    const $modal = $(ReactDOMServe.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    return (
      <div></div>
    );
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
}

export { ErrorModal };
