import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: props.initialMessage,
      bold: '',
      italic: '',
      underline: '',
      fontSize: '12',
      align: 'left',
      color: '#000000'
    };
  }

  handleOnChange(target) {
    let newValue = target.value;

    if(target.type === 'checkbox' && target.checked === true) newValue = target.name;
    else if(target.type === 'checkbox' && target.checked === false) newValue = '';

    this.setState({ [target.name]: newValue });

    console.log('target type', target.type);
    console.log('target name', target.name);
    console.log('value', newValue);
    
  }

  handleOnChangeFontSize(target) {
    this.setState({ fontSize: target.value });
  }

  handleClear() {
    this.setState({ message: '' });
  }

  handleClick() {
    if(this.state.message === this.props.initialMessage) this.handleClear();
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

          <label>
            font size:
            <select
              className="button"
              value={this.state.fontSize}
              onChange={({target}) => this.handleOnChangeFontSize(target)}>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
            </select>
          </label>

          <label>
            align: left
            <input
              name="align"
              type="radio"
              value="left"
              onClick={({target}) => this.handleOnChange(target)} />
            center
            <input
              name="align"
              type="radio"
              value="center"
              onClick={({target}) => this.handleOnChange(target)} />
            right
            <input
              name="align"
              type="radio"
              value="right"
              onClick={({target}) => this.handleOnChange(target)} />
          </label>
          
          <input
            name="clear-button"
            id="clear" className="button"
            type="button"
            value="Clear"
            onClick={() => this.handleClear()} />

        </div>
      
        <div>
          <textarea
            id="editor"
            name="message"
            value={this.state.message}
            style={{
              color: this.state.color,
              fontSize: this.state.fontSize + 'px',
              fontWeight: this.state.bold,
              fontStyle: this.state.italic,
              textDecoration: this.state.underline,
              textAlign: this.state.align
            }}
            rows="6" cols="50"
            onChange={({target}) => this.handleOnChange(target)}
            onClick={() => this.handleClick()} >
          </textarea>
        </div>

      </div>
    );
  }
}

export default App;
