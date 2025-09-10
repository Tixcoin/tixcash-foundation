import * as signalR from "@microsoft/signalr";

class ConnectorTxn {
    connection: signalR.HubConnection;
    ifevents: (onIndexfeed: (username: string, message: string) => void) => void;
    //txnevents: (onTxnsfeed: (username: string, message: string) => void) => void;
    //bkevents: (onBksfeed: (username: string, message: string) => void) => void;
    
    constructor(add) {
        if (ConnectorTxn._instance)
            throw new Error("Error: Instantiation failed: Use Connector.getInstance() instead of new.");

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(localStorage.getItem('FEEDTXNSNETWORK'))
            .withAutomaticReconnect()
            .build();
        this.connection.start().then(result => {
            console.log("SignalR is now connected");
            if (!add) {
                this.connection.send("getflight_txns", 1);//.then(x => console.log("sent"));
                this.connection.send("getflight_transfer", 1);//.then(x => console.log("sent"));
            }
            if (add) {
                this.connection.send("getflight_addtxns", 1, add);//.then(x => console.log("sent"));
                this.connection.send("getflight_addinternalTxns", 1, add);//.then(x => console.log("sent"));
                this.connection.send("getflight_addTransfer", 1, add);//.then(x => console.log("sent"));
              
            }
        }).catch(err => {
            console.log(err);
        });

        //this.ifevents = (onIndexfeed) => {
        //    this.connection.on("flight_if", (username, message) => {
        //        onIndexfeed(username, message);
        //    });
        //};
    }
    /*newMessage = (messages: string) => {
        this.connection.send("newMessage", "foo", messages).then(x => console.log("sent"))
    }*/

    newMessage = () => {
       // alert('');
        this.connection.send("getflight_txns", 1).then(x => console.log("sent"));
    }

    static instance = null;
    static getInstance(add) {
        if (!ConnectorTxn.instance)
            ConnectorTxn.instance = new ConnectorTxn(add);
        return ConnectorTxn.instance;
    }

    SubscribeTxns = (pageindex) => (onTxnsfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1)  this.connection.off("flight_txns_" + (pageindex - 1), null);
            this.connection.off("flight_txns_" + (pageindex + 1), null);
            this.connection.send("getflight_txns", pageindex).then(x => console.log("sent"));
        };
      
        this.connection.on("flight_txns_" + pageindex, (message) => {
           
            onTxnsfeed(message);
        });
        //};
    }

    SubscribeTransfer = (pageindex) => (onTxnsfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1) this.connection.off("flight_transfer_" + (pageindex - 1), null);
            this.connection.off("flight_transfer_" + (pageindex + 1), null);
            this.connection.send("getflight_transfer", pageindex).then(x => console.log("sent"));
        };
        this.connection.on("flight_transfer_" + pageindex, (message) => {

            onTxnsfeed(message);
        });
        //};
    }

    SubscribeAddressTxns = (address, pageindex) => (onTxnsfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1) this.connection.off("flight_txns_" + address + "_" + (pageindex - 1), null);
            this.connection.off("flight_txns_" + address + "_" + (pageindex + 1), null);
            this.connection.send("getflight_addtxns", pageindex, address).then(x => console.log("sent"));
        };
        this.connection.on("flight_txns_" + address + "_" + pageindex, (message) => {
            //    debugger;
            onTxnsfeed(message, pageindex);
        });
        //};
    }

    SubscribeAddressInternalTxns = (address, pageindex) => (onTxnsfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1) this.connection.off("flight_internalTxns_" + address + "_" + (pageindex - 1), null);
            this.connection.off("flight_internalTxns_" + address + "_" + (pageindex + 1), null);
            this.connection.send("getflight_addinternalTxns", pageindex, address).then(x => console.log("sent"));
        };
        this.connection.on("flight_internalTxns_" + address + "_" + pageindex, (message) => {

            onTxnsfeed(message, pageindex);
        });
        //};
    }

    SubscribeAddressTransfer = (address, pageindex) => (onTxnsfeed) => {
        if (this.connection.state === 'Connected') {
            if (pageindex > 1) this.connection.off("flight_transfer_" + address + "_" + (pageindex - 1), null);
            this.connection.off("flight_transfer_" + address + "_" + (pageindex + 1), null);
            this.connection.send("getflight_addTransfer", pageindex, address).then(x => console.log("sent"));
        };
        this.connection.on("flight_transfer_" + address + "_" + pageindex, (message) => {

            onTxnsfeed(message, pageindex);
        });
        //};
    }
    
}

export default ConnectorTxn.getInstance;