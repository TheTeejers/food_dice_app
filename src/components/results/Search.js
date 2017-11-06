import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: [], count: 1};
  }

  handleChange(i, event) {
     let value = this.state.value.slice();
     value[i] = event.target.value;
     this.setState({value});
  }

  addClick(){
    if (this.state.count < 3) {
      this.setState({count: this.state.count+1})
    }
    else {
      alert('You can only have up to three fields.')
    }
  }

  removeClick(i){
     let value = this.state.value.slice();
     value.splice(i,1);
     this.setState({
        count: this.state.count - 1,
        value
     })
  }

  createUI(){
     let uiItems = [];
     for(let i = 0; i < this.state.count; i++){
           uiItems.push(
               <div id='input-form' key={i}>
                   <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
               </div>
            )
     }
     return uiItems || null;
  }

  render() {
    return (
      <form>
          {this.createUI()}
          <div id='add-remove-buttons'>
            <input id='add-input' type='button' value='+' onClick={this.addClick.bind(this)}/>
            <input id='remove-input' type='button' value='-' onClick={this.removeClick.bind(this)} />
          </div>
          <input id='submit-cravings' type="submit" value="Submit" />
      </form>
    );
  }
}
