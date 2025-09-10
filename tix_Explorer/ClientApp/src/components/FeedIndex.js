import * as signalR from "@microsoft/signalr";

class Connector {
    connection: signalR.HubConnection;
    ifevents: (onIndexfeed: (username: string, message: string) => void) => void;
    //txnevents: (onTxnsfeed: (username: string, message: string) => void) => void;
    //bkevents: (onBksfeed: (username: string, message: string) => void) => void;
    
    constructor() {
        if (Connector._instance)
            throw new Error("Error: Instantiation failed: Use Connector.getInstance() instead of new.");

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(localStorage.getItem('FEEDINDEXNETWORK'))
            .withAutomaticReconnect()
            .build();
        this.connection.start().then(res => {
            this.connection.send("getflight_if", 1);//.then(x => console.log("sent"));
        }).catch(err => {
            console.log(err);
        });
        //debugger;
        //this.ifevents = (onIndexfeed) => {
        //    this.connection.on("flight_if", (username, message) => {
        //        onIndexfeed(username, message);
        //    });
        //};
    }
    /*newMessage = (messages: string) => {
        this.connection.send("newMessage", "foo", messages).then(x => console.log("sent"))
    }*/


    static instance = null;
    static getInstance() {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }

    SubscribeIf = (onIndexfeed) => {

        // this.ifevents = (onIndexfeed) => {
        this.connection.on("flight_if", (message) => {
            //console.log(message);
            onIndexfeed(message);
        });
        // };
    }
   

}
export default Connector.getInstance;