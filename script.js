    /**
     * New script file
    */
    /**
     * Sample transaction function.
     * @param {org.acme.model.SampleTransaction} sampletransfer
     * @transaction
     */
    function sampletransfer(sampletransfer){
     sampletransfer.fromaccnt.balance -=sampletransfer.amount;
     sampletransfer.toaccnt.balance +=sampletransfer.amount;
     return getAssetRegistry('org.acme.model.account')
     .then(function(accountRegistery){
        return accountRegistery.updateAll([sampletransfer.fromaccnt,sampletransfer.toaccnt]);
     });
    }
