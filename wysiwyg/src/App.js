import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: 'type your message here',
      color: '#000000',
      bold: 'checked',
      italic: 'checked'
    };
  }

  handleOnChange({name, value}) {
    this.setState({ [name]: value });
    console.log(name, value);
  }

  render() {
    return (
      <div className="main">
        <h1>Christy's WYSIWYG Editor</h1>

        <div className="inputs">

          
          
          <label>
            bold: 
            <input
              name="bold"
              value={this.state.bold}
              type="checkbox"
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <label>
            italic: 
            <input
              name="italic"
              value={this.state.italic}
              type="checkbox"
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <label>
            color: 
            <input
              name="color"
              value={this.state.color}
              type="color"
              onChange={({target}) => this.handleOnChange(target)} />
          </label>
          
          <input
            name="button"
            value="do something"
            type="button" />
        </div>
      
        <div>

          <label>
            message: 
            <input
              id="editor"
              name="message"
              value={this.state.message}
              type="text"
              onChange={({target}) => this.handleOnChange(target)} />
          </label>

          <div id="preview"
            style={{color: this.state.color}}
            onChange={({target}) => this.handleOnChange(target)}>
            
            {this.state.message}

          </div>
        </div>

      </div
      >
    );
  }
}

export default App;
