
export default GetMethodType;
function GetMethodType(inx) {
    let mtype = [
    'AccountCreateContract',
    'TXH Transfer', //'TransferContract',
    'TransferAssetContract',
    'VoteAssetContract',
    'VoteWitnessContract',
    'WitnessCreateContract',
    'AssetIssueContract',
    'WitnessUpdateContract',
    'ParticipateAssetIssueContract',
    'AccountUpdateContract',
    'FreezeBalanceContract',
    'UnfreezeBalanceContract',
    'WithdrawBalanceContract',
    'UnfreezeAssetContract',
    'UpdateAssetContract',
    'ProposalCreateContract',
    'ProposalApproveContract',
    'ProposalDeleteContract',
    'SetAccountIdContract',
    'CustomContract',
    'CreateSmartContract',
    'TriggerSmartContract',
    'GetContract',
    'UpdateSettingContract',
    'ExchangeCreateContract',
    'ExchangeInjectContract',
    'ExchangeWithdrawContract',
    'ExchangeTransactionContract',
    'UpdateEnergyLimitContract',
    'AccountPermissionUpdateContract',
    'ClearAbicontract',
    'UpdateBrokerageContract',
    'ShieldedTransferContract',
    'MarketSellAssetContract',
    'MarketCancelOrderContract',
    'DelegateResourceContract',
    'FreezeBalanceV2Contract',
    'UnDelegateResourceContract'
    ];

    return mtype[inx];
}
