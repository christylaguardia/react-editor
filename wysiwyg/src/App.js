import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: 'type your message here',
      bold: '',
      italic: '',
      underlined: '',
      color: '#000000'
    };
  }

  handleOnChange(target) {
    // let newValue = target.type === 'checkbox' ? target.name : target.value;

    let newValue = target.value;

    if(target.type === 'checkbox' && target.checked === true) newValue = target.name;
    else if(target.type === 'checkbox' && target.checked === false) newValue = '';

    // if(target.name === 'bold' && target.checked === true) newValue = 'bold';
    // else if(target.name === 'bold' && target.checked === false) newValue = '';
    
    // if(target.name === 'italic' && target.checked === true) newValue = 'italic';
    // else if(target.name === 'italic' && target.checked === false) newValue = '';

    // if(target.name === 'underline' && target.checked === true) newValue = 'underline';
    // else if(target.name === 'underline' && target.checked === false) newValue = '';

    this.setState({ [target.name]: newValue });
    
    // console.log(target.name, newValue);
  }

  // toggleCheckbox(target) {
  // }

  handleClearButton() {
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="main">
        <h1>Christy's WYSIWYG Editor</h1>

        <div>

          <label>
            bold: 
            <input
              name="bold"
              type="checkbox"
              checked={this.state.bold}
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <label>
            italic: 
            <input
              name="italic"
              type="checkbox"
              checked={this.state.italic}
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <label>
            underline: 
            <input
              name="underline"
              type="checkbox"
              checked={this.state.underline}
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <label>
            color: 
            <input
              name="color"
              type="color"
              value={this.state.color}
              onChange={({target}) => this.handleOnChange(target)} />
          </label>
          
          <input
            name="clear-button"
            type="button"
            value="Clear"
            onClick={() => this.handleClearButton()} />
        </div>
      
        <div>
          <textarea
            id="editor"
            name="message"
            value={this.state.message}
            style={{
              color: this.state.color,
              fontWeight: this.state.bold,
              fontStyle: this.state.italic,
              textDecoration: this.state.underline
            }}
            rows="6" cols="50"
            onChange={({target}) => this.handleOnChange(target)}>
          </textarea>
        </div>

      </div>
    );
  }
}

export default App;
