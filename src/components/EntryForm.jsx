import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';
import { ErrorModal } from 'Components/common';

require('style-loader!css-loader!react-datepicker/dist/react-datepicker.css');

class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      value: '',
      startDate: moment(),
      endDate: moment(),
      errorMessage: undefined
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const { name, value, startDate, endDate } = this.state;

    this.setState({
      errorMessage: undefined
    })

    if (!name.length) {
      this.setState({
        errorMessage: "Enter valid name"
      });
      return null;
    }
    if (!value.length || !value.match(/^[0-9]*$/)) {
      this.setState({
        errorMessage: "Enter valid number"
      });
      return null;
    }

    if (!startDate._d.length) {
      this.setState({
        errorMessage: "Enter valid start date"
      });
      return null;
    }
    if (!endDate._d.length) {
      this.setState({
        errorMessage: "Enter valid end date"
      });
      return null;
    }

    if(Date.parse(endDate._d) > Date.parse(startDate._d)) {
      this.setState({
        errorMessage: "End date should be after start date"
      });
      return null;
    }

    if (!typeof this.state.errorMessage === 'string') {
      this.props.onNewEntry({ name, value, startDatev, endDate: endDate._d });
    }
  }


  handleInputChange(name, e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    const { errorMessage } = this.state;

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />;
      }
      return null;
    }
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="small-12 columns">
              <label className="error">Name
                <input
                  type="text"
                  // name="name"
                  className="labelErrorClass"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this,'name')}
                />
              </label>
            </div>
            <div className="small-12 columns">
              <label className="error">Value
                <input
                  type="number"
                  // name="value"
                  placeholder="Value for the identity"
                  value={this.state.value}
                  onChange={this.handleInputChange.bind(this,'value')}
                />
              </label>
            </div>
            <div className="small-12 columns">
              <label className="error">Start Date
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleStartDateChange}
                 />
               </label>
            </div>
            <div className="small-12 columns">
              <label className="error">start Date
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleEndDateChange}
                 />
               </label>
            </div>
           </div>
           {renderError()}
          <input type="submit" value="save" className="hollow button expanded" />
        </form>
      </div>
    );
  }
}

export {EntryForm};
