import { React, Component } from 'react';
import { Navigate } from "react-router-dom";
export class Search extends Component {
    static displayName = Search.name;
    constructor(props) {
        super(props); 
        this.state = {
            type: window.location.href.split('/')[4].split('#')[0],
            key: window.location.href.split('/')[5].split('#')[0]
        };   

       setTimeout(() => {
            this.state = {
                type: null,
                key: null
            };   
        }, 50);
//        debugger;
    }



    render() {
       return (
             <div id="mainContent">
                <main className="container header-overlap account-new address-container address-page">
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.type &&
                                   (<Navigate to={"/" + this.state.type + "/" + this.state.key} replace={true} />)
                            }
                        </div>
                    </div>
                </main>
            </div>
    );
  }
}
