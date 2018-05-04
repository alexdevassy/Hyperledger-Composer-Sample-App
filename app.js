    const BusinessNetworkConnection = require(‘composer-client’).BusinessNetworkConnection;

    this.bizNetworkConnection = new BusinessNetworkConnection();
    this.cardName =’admin@testnetwork’;
    this.businessNetworkIdentifier = ‘testnetwork’;

    this.bizNetworkConnection.connect(this.cardName)
    .then((result) => {

    this.bizNetworkConnection.getAssetRegistry(‘org.acme.model.account’)
    .then((registry) => {

    return registry.getAll();
    })
    .then((aResources) => {
     console.log(“No.of accounts: “+aResources.length);
     console.log(“Account list”);
     let arrayLength = aResources.length;
     for(let i = 0; i < arrayLength; i++) {
     console.log(aResources[i].accntId);
     }

    })
    .catch(function (error) {
     throw error;
    })
    })

    .catch(function (error) {
     throw error;

    });
    this.bizNetworkConnection.on(‘event’,(evt)=>{
     
     console.log(“ — — — — — -Transcation happend — — — — -”);
     console.log(“From Account: “+evt.fromaccnt);
     console.log(“To Account: “+evt.toaccnt);
     console.log(“Amount Transfered: “+evt.amount);
     
    });
