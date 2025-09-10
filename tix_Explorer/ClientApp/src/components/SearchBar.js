import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
export class SearchBar extends Component {
    static displayName = SearchBar.name;
    constructor(props) {
    super(props);
     //   const navigate = useNavigate();
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
          suggestions: {},
          showSuggestions: false,
           collapsed: true
        };

  }

  toggleNavbar () {
    this.setState({
        collapsed: !this.state.collapsed,
        suggestions: this.state.suggestions,
        showSuggestions: this.state.showSuggestions,
        searchkey : null
    });
    }

    handleItems = async (evt) => {
        
        if (!(evt.key === 'Enter' || evt.keyCode === 13)) return;
        console.log(evt.target.value);
        var val = evt.target.value;
        evt.target.value = "";
        const response = await fetch(process.env.REACT_APP_HUB_DATA_API + '/weatherforecast/Search?key=' + val);
        const data = await response.json();
        try {
           // const navigate = useNavigate();
            //const history = useHistory();
            if (data.type == "Address") {
              //  this.state.searchkey = data.key;
                // navigate('/address/' + data.key);
               // this.props.navigation.navigate('/address/' + data.key)
              //  this.props.history.push('/address/' + data.key)
            }
            //if (data.type == "Transaction") { }
        }
        catch { }
        this.setState({
            showSuggestions: this.state.suggestions.length > 0, collapsed: this.state.collapsed,
            suggestions: data,
           // searchkey: this.state.searchkey
        });
        const timeoutId = setTimeout(() => {
            this.setState({
                showSuggestions: this.state.suggestions.length > 0, collapsed: this.state.collapsed,
                suggestions: {},
               // searchkey: null
            });
        }, 50);
        evt.preventDefault();
       //console.log(data);
    };
   
    handleFocus = () => {
        // When the input is focused, show suggestions
        this.setState({
            showSuggestions: this.state.suggestions.length >0, collapsed: this.state.collapsed,
            suggestions: this.state.suggestions
        });
    };
    handleBlur = () => {
        // When the input loses focus, hide suggestions after a short delay
        setTimeout(() => {
            this.setState({
                showSuggestions: false, collapsed: this.state.collapsed,
                suggestions: {}
            });
        }, 50);
    };

    render() {
        const { suggestions, showSuggestions, searchkey } = this.state;
      return (

           
                
           
         
              <div className="nav-searchbar hasactiveComponent dark-hasactive-component coloumn ">
              <div id="navSearchbarId">
                    
                      <div className="container p-0 index-page-search-sec d-flex justify-content-between">
                          <div className="searchAndHotSec">
                              <div className="row justify-content-center text-center">
                                  <div className="col-12">
                                      <div className="nav-searchbar">
                                          <div className="input-group dropdown">
                                              <section className="input-wrapper d-flex">
                                                  <div className="ant-input-group-wrapper form-control box-shadow-none newSearchInput input-search-focus">
                                                      <div className="ant-input-wrapper ant-input-group">
                                                          <span className="ant-input-affix-wrapper ant-input-affix-wrapper-borderless">
                                                              <span className="ant-input-prefix">
                                                                  <svg className="icon tron-icon tron-font-size-18px tron-font-black-level3-color" aria-hidden="true">
                                                                      <use xlinkHref="#icon-main-search-colorless"></use>
                                                                  </svg>
                                                          </span>
                                                        
                                                          
                                                          <input onFocus={this.handleFocus} onKeyUp={this.handleItems} onBlur={this.handleBlur} placeholder="Search by Token / Account / Contract / Txn Hash / Block" className="ant-input ant-input-borderless" type="text"  ></input>
                                                              <span className="ant-input-suffix">  
                                                                  <span className="ant-input-clear-icon ant-input-clear-icon-hidden" role="button" tabindex="-1">
                                                                      <span role="img" aria-label="close-circle" className="anticon anticon-close-circle">
                                                                          <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
                                                                          </svg>
                                                                      </span>
                                                                  </span>
                                                          </span>

                                                          {suggestions.type &&
                                                              (<Navigate to={"/Search/" + suggestions.type + "/" + suggestions.key} replace={true} />)
                                                          }

                                                          {showSuggestions && (
                                                              <ul className='input_suggestion_box' style={{
                                                                  overflow: 'hidden',
                                                                  maxHeight: '275px',
                                                                  zIndex: '12',
                                                                  display: 'block'
                                                              }}>
                                                                  {this.state.suggestions.map(s =>
                                                                      <li className="suggestion_list">SearchSuggestion1</li>
                                                                  )} 
                                                               </ul>
                                                           
                                                          ) }
                                                          
                                                      </span>


                                                          <div className="ant-input-group-addon">
                                                              <div className="search-type-suffix">
                                                                  <div className="fake-selecetd-content">
                                                                      <span>All</span>
                                                                      <svg className="icon tron-icon" aria-hidden="true">
                                                                          <use xlinkHref="#icon-down-arrow"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div className="ant-select nav-search-filter ant-select-single ant-select-show-arrow">
                                                                      <div className="ant-select-selector">
                                                                          <span className="ant-select-selection-search">
                                                                          <input type="search" autocomplete="off" className="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-controls="" readonly="" unselectable="on" value="" id="rc_select_0" />
                                                                          </span>
                                                                          <span className="ant-select-selection-item" title="All Filters">All Filters</span>
                                                                      </div>
                                                                      <span className="ant-select-arrow" unselectable="on" aria-hidden="true">
                                                                          <span className="hoverIcon">
                                                                              <svg className="icon tron-icon tron-search-icon" aria-hidden="true">
                                                                                  <use xlinkHref="#icon-down-arrow"></use>
                                                                              </svg>
                                                                          </span>
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </section>
                                              <div className="dropdown-menu" id="_searchBox"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                          </div>
                          <div className="profitSec hidden-mobile">
                              <div className="profit-box homepage-profit">
                                  <div className="common-profit-wapper" id="profitWrapper">
                                  <img alt="TXH"  src="assets/img/1747470873762304000.png" className="img-fluid rounded" />
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
            



    );
  }
}
