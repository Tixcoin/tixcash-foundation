import { React, Component } from 'react';
import './address.css';
export class AddEllipsis extends Component {
    static displayName = AddEllipsis.name;
    constructor(props) {
        super(props);
        this.state = {
            hash: props.hash,
            format: localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : 'mid'
        };

       // setInterval(() => { this.state = { hash: '0x000000000000000000000000000000000000000000000000000000', loading: true }; }, 10000);
    }


    componentDidMount() {
        setInterval(() => { this.setState({ format: localStorage.getItem("addFormat") ? localStorage.getItem("addFormat") : 'mid' }); }, 2000);
    }
   
    render() {
        const prefix = this.state.format === 'mid' ? (this.props.hash?.length && this.props.hash.slice(0, 12)) + '....' : (this.props.hash?.length && this.props.hash.slice(0, 18));      
        const suffix = this.state.format === 'mid' ? (this.props.hash?.length && this.props.hash.slice(-8, this.state.hash.length)) : '....';
      return (
          <span> 
              {prefix}{suffix}
          </span>
      );
  }
}
