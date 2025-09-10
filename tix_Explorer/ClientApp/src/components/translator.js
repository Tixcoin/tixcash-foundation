import React, { Component } from 'react';
import Shimmer from './Shimmer'
export class TranslatorComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFormat: localStorage.getItem("addFormat") === null ? 'mid' : localStorage.getItem("addFormat"),
            timeFormat: localStorage.getItem("timeFormat") === null ? 'LOCAL' : localStorage.getItem("timeFormat"),
            SaveText: 'Save'
        };
    }

    componentDidMount() {
       // this.loadGoogleTranslate();
    }

    loadGoogleTranslate = () => {
        const existingScript = document.getElementById('google-translate-script');
        if (!existingScript) {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = this.googleTranslateElementInit;
        }
    }

    googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        }, 'google_translate_element');
    }

    handleLanguageChange = (language) => {
        //debugger
       
        const googleTranslateElement = document.querySelector('.goog-te-combo');
        if (googleTranslateElement) {

            googleTranslateElement.value = language;
            googleTranslateElement.dispatchEvent(new Event('change'));
        }
        //setInterval(() => { this.setState({ SaveText: language == 'zh-CN' ? 'Keep' : 'Save' }) }, 3000);
        
    };
    handleAddressFormatChange = (format) => {
        localStorage.setItem("addFormat", format);
        this.setState({
            addFormat: format
        });
    };

    handleTimeFormatChange = (format) => {
        localStorage.setItem("timeFormat", format);
        this.setState({
            timeFormat: format
        });
    };
    render() {
        return (
            <div className="wrapperReg">
                <div className="ant-modal-wrap login-modal-wrap ant-modal-centered">
                    <div role="dialog" aria-modal="true" className="ant-modal login">
                        <div tabIndex="0" aria-hidden="true"></div>
                        <div className="ant-modal-content2">
                            
                            <button onClick={this.props.onClose} type="button" aria-label="Close" className="ant-modal-close">
                                <span className="ant-modal-close-x">X</span>
                            </button>
                            <div className="ant-modal-body">
                                <div className="login-container">
                                   
                                    <h2 className="text-center text-bold">Choose Your Language</h2>
                                    <div className="language-boxes">
                                        <div className="d-flex justify-content-center my-3 flex-box">
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('en')}><img src="./assets/img/english.svg" alt="eng" /> English</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('es')}><img src="./assets/img/spanish.png" width="10" alt="eng" /> española</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('fr')}><img src="./assets/img/french.png" width="10" alt="eng" /> française</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('ru')}><img src="./assets/img/russian.png" width="10" alt="eng" /> русский</div>
                                        </div>
                                        
                                        <div className="d-flex justify-content-center my-3 flex-box">
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('it')}><img src="./assets/img/italian.png" width="10" alt="eng" /> italiano</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('ja')}><img src="./assets/img/japan.png" width="10" alt="eng" /> 日本語</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('zh-CN')}><img src="./assets/img/chinese.svg" alt="eng" /> 华语</div>
                                            <div className="language-box notranslate" onClick={() => this.handleLanguageChange('th')}><img src="./assets/img/thai.png" width="10" alt="eng" /> แบบไทย</div>

                                        </div>
                                       
                                        </div>
                                    <div id="google_translate_element"></div>
                                    <div>
                                        <h2 className="text-bold">Address Display</h2>
                                        <p
                                            className={this.state.addFormat === "mid" ? "text-para active_time" : "text-para"}
                                            onClick={() => this.handleAddressFormatChange('mid')}
                                        >
                                            Middle Truncation (GdmKwfe5Z....oCi1NL)
                                        </p>
                                        <p
                                            className={this.state.addFormat === "back" ? "text-para active_time" : "text-para"}
                                            onClick={() => this.handleAddressFormatChange('back')}
                                        >
                                            Back Truncation (GdmKwfe5ZPyVX6vg7zGo1r11cn7g....)
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-bold">Time Format</h2>
                                        <p
                                            className={this.state.timeFormat === "UTC" ? "text-para active_time" : "text-para"}
                                            onClick={() => this.handleTimeFormatChange('UTC')}
                                        >
                                            Coordinated Universal Time (UTC)
                                        </p>
                                        <p
                                            className={this.state.timeFormat === "LOCAL" ? "text-para active_time" : "text-para"}
                                            onClick={() => this.handleTimeFormatChange('LOCAL')}
                                        >
                                            Local (UTC +5.5)
                                        </p>
                                    </div>
                                    <div className="prefrence-btn">
                                        
                                        <button onClick={this.props.onClose} >{this.state.SaveText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default TranslatorComp;
