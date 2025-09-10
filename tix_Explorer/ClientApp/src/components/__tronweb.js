import { React, Component } from 'react';
//import TronWeb  from 'tronweb';

import './address.css';

export class TronWebProxy extends Component {
    static displayName = TronWebProxy.name;
    constructor(props) {
        super(props);
        this.state = {
            hash: props.hash, loading: true,
            format: localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : 'mid'
        };

       // setInterval(() => { this.state = { hash: '0x000000000000000000000000000000000000000000000000000000', loading: true }; }, 10000);
    }


    componentDidMount() {
        setInterval(() => { this.setState({ format: localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : 'mid' }); }, 2000);
    }
   
    render() {
        const prefix = this.state.format === 'mid' ? (this.state.hash?.length && this.state.hash.slice(0, 12)) + '....' : (this.state.hash?.length && this.state.hash.slice(0, 18));      
        const suffix = this.state.format === 'mid' ? (this.state.hash?.length && this.state.hash.slice(-8, this.state.hash.length)) : '....';
      return (
          <span> 
              {prefix}{suffix}
          </span>
      );
  }
}
