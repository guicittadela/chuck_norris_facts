import React, { Component, useEffect } from 'react';
import './App.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

type Props = {
};

type State = {
  category: string
  searchTerm: string
}




class App extends Component<Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      category: '',
      searchTerm: '',
    }
  }

  handleChange(e : any){
    this.setState({category:e.target.value})
    
  }

  handleChangeSearch(e : any) {
    this.setState(e)
  }
  
  
  
  render() {
    const { category, searchTerm } = this.state
    
    return(
    <div className="App">
      <div className="search">
        <TextField id="standard-basic" label="Search" onChange={this.handleChangeSearch}value={searchTerm}/>
        <div>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={this.handleChange}>
            <MenuItem value={16}>Any</MenuItem>
            <MenuItem value={0}>Animal</MenuItem>
            <MenuItem value={1}>Carrer</MenuItem>
            <MenuItem value={2}>Celebrity</MenuItem>
            <MenuItem value={3}>Dev</MenuItem>
            <MenuItem value={4}>Explicity</MenuItem>
            <MenuItem value={5}>Fashion</MenuItem>
            <MenuItem value={6}>Food</MenuItem>
            <MenuItem value={7}>History</MenuItem>
            <MenuItem value={8}>Money</MenuItem>
            <MenuItem value={9}>Movie</MenuItem>
            <MenuItem value={10}>Music</MenuItem>
            <MenuItem value={11}>Political</MenuItem>
            <MenuItem value={12}>Religion</MenuItem>
            <MenuItem value={13}>Science</MenuItem>
            <MenuItem value={14}>Sport</MenuItem>
            <MenuItem value={15}>Travel</MenuItem>
          </Select>
        </div>
      </div>
      <div>
        <TextField id="outlined-basic" label="Random fact" variant="outlined" />
      </div>
      <div>
        <button>Get a new random fact!</button>
      </div>
    </div>
    )}
}

export default App;
