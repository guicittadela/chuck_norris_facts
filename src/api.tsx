import React, { useEffect } from "react";
import axios from 'axios';





useEffect( () => {
    const fact = axios.get('https://api.chucknorris.io/jokes/random')
    console.log(fact)
  },  [])