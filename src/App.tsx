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
  categories: []
}


 

class App extends Component<Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      category: '',
      searchTerm: '',
      categories: [],
    }

    axios.get('http://localhost:5000/api/categories').then((res) => {
      this.setState({ categories: res.data})
      console.log(this.state.categories)
    })

  }

  handleChange(e : any){
    this.setState({category:e.target.value})
    
  }

  handleChangeSearch(e : any) {
    this.setState(e)
  }
  
  
  
  render() {
    const { category, searchTerm, categories } = this.state
    
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
              {
                categories.map(category => (
                  <MenuItem value={category}>Any</MenuItem>
                ))
              }
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
