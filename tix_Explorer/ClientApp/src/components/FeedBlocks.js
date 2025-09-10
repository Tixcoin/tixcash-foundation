import * as signalR from "@microsoft/signalr";

class ConnectorBks {
    connection: signalR.HubConnection;
    ifevents: (onIndexfeed: (username: string, message: string) => void) => void;
    //txnevents: (onTxnsfeed: (username: string, message: string) => void) => void;
    //bkevents: (onBksfeed: (username: string, message: string) => void) => void;

    constructor() {
        if (ConnectorBks._instance)
            throw new Error("Error: Instantiation failed: Use Connector.getInstance() instead of new.");

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(localStorage.getItem('FEEDBKSNETWORK'))
            .withAutomaticReconnect()
            .build();
        this.connection.start().then(result => {
            console.log("SignalR is now connected");
            this.connection.send("getflight_bks", 1).then(x => console.log("sent"));
        }).catch(err => {
            console.log(err);
        });
       // debugger;
       // this.connection.send("getflight_bks", 1).then(x => { alert(''); console.log("sent"); })
    }
 
    newMessage = () => {
        alert('');
        this.connection.send("getflight_bks", 1).then(x => console.log("sent"));
    }

    static instance = null;
    static getInstance() {
        if (!ConnectorBks.instance)
            ConnectorBks.instance = new ConnectorBks();
        return ConnectorBks.instance;
    }

    SubscribeBks = (pageindex) => (onBksfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1) this.connection.off("flight_bks_" + (pageindex - 1), null);
            this.connection.off("flight_bks_" + (pageindex + 1), null);
            this.connection.send("getflight_bks", pageindex).then(x => console.log("sent"));
        };
        this.connection.on("flight_bks_" + pageindex, (message) => {
            //  debugger;
            onBksfeed(message);
        });
    }


}
export default ConnectorBks.getInstance;