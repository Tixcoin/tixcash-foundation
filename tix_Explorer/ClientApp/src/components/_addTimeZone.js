import { React, Component } from 'react';
import './address.css';

import moment from 'moment';
export class AddTimeZone extends Component {
    static displayName = AddTimeZone.name;
    constructor(props) {
        super(props);
        this.state = {
            dateUTC: props.dateUTC,
            dateDisplay:'',
            loading: true,
            timeformat: localStorage.getItem("timeFormat") ? localStorage.getItem("timeFormat") : 'UTC'
        };

       // setInterval(() => { this.state = { hash: '0x000000000000000000000000000000000000000000000000000000', loading: true }; }, 10000);
    }


    componentDidMount() {
        setInterval(() => { this.setState({ timeformat: localStorage.getItem("timeFormat") ? localStorage.getItem("timeFormat") : 'UTC' }); }, 2000);
    }
    
    render() {
     return (
          <span> 
             {this.state.dateUTC == 0 ? '<NA>' : (this.state.timeformat == 'LOCAL' ? moment.utc(this.state.dateUTC).local().format('llll') + ' (Local (UTC +5.5))' : moment.utc(this.state.dateUTC).format('llll') +' (Coordinated Universal Time (UTC))')}
          </span>
      );
  }
}
