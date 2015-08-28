
var AvatarAggregatorContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"id","type":"address"}],"name":"getItem","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"address"}],"name":"getItemPrev","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"address"}],"name":"getItemNext","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"avatar","type":"address"}],"name":"register","outputs":[{"name":"contractAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"createAvatar","outputs":[{"name":"contractAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"deregister","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"getLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getHead","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getTail","outputs":[{"name":"","type":"address"}],"type":"function"}]);

var avatarAggregatorBinary =  '606060405260008054600160a060020a03191633179055610c1b806100256000396000f3006060604052361561008d5760e060020a600035046314d8c981811461008f5780631a695230146100b957806322fb3fb0146100ef57806341c0e1b51461011a578063438f503d146101435780634420e4861461016c5780635e5cd13a1461027f578063aff5edb1146102ef578063be1c766b146104df578063dc281aff146104e9578063f8cdfbf8146104fd575b005b610511600435600160a060020a03818116600090815260046020526040902060020154165b919050565b61052e60043560008054600160a060020a039081163390911614156100b4578054600160a060020a0319168217905560016100b4565b610511600435600160a060020a038181166000908152600460205260409020546101009004166100b4565b61052e60008054600160a060020a039081163390911614156104e6578054600160a060020a0316ff5b610511600435600160a060020a03818116600090815260046020526040902060010154166100b4565b610511600435600061054633835b600160a060020a0382166000908152600460205260408120548390829060ff1681141561055b57604080822060018054600160a060020a03908116855283852082018054600160a060020a031990811688179091558451608081018652838152835483166020828101918252968201888152606083018c81528a86168a5260049098529151865491516101000260ff19929092161774ffffffffffffffffffffffffffffffffffffffff001916178555518484018054831690911790559351600293840180548616909117905581549093168517815560038054909101905554168114156102755760028054600160a060020a031916831790555b839250505061055e565b610511600060006040516106b68061056583399082f0905080600160a060020a0316631a695230336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575061054091503390508261017a565b61052e600061054d33600160a060020a038116600090815260046020526040812054829060019060ff16811415610554578054600160a060020a03908116908516141561035a5760408320548154600160a060020a031916610100909104600160a060020a03161781555b600254600160a060020a0390811690851614156103a457600160a060020a0384811660009081526004602052604090206001015460028054600160a060020a031916919092161790555b600160a060020a0384811660009081526004602052604081205461010090049091161461040657604060008181208054600191820154610100909104600160a060020a03908116845293909220018054600160a060020a031916919092161790555b600160a060020a0384811660009081526004602052604081206001015490911614610475576040600081812060018101549054600160a060020a03918216835292909120805474ffffffffffffffffffffffffffffffffffffffff001916610100938490049092169092021790555b50506003805460001901905550600160a060020a0381166000908152600460205260409020805474ffffffffffffffffffffffffffffffffffffffffff1916815560018181018054600160a060020a031990811690915560029290920180549092169091556100b4565b61052e6003545b90565b610511600154600160a060020a03166104e6565b610511600254600160a060020a03166104e6565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b91505090565b90506100b4565b90506104e6565b5050919050565b50505b929150505600606060405260008054600160a060020a03191633179055610691806100256000396000f300606060405236156100565760e060020a60003504631a695230811461005857806341c0e1b51461009b57806347fca8d8146100c45780638eaa6ac01461016b578063ba44593c14610186578063f71f7a25146101bc575b005b6101f460043560008054600160a060020a0390811633909116141561018157805473ffffffffffffffffffffffffffffffffffffffff1916821790556001610181565b6101f460008054600160a060020a03908116339091161415610223578054600160a060020a0316ff5b610206600080548190600160a060020a03908116339091161415610234576040516104588061023983399082f0905080600160a060020a0316631a695230336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575061022f91507f776f740000000000000000000000000000000000000000000000000000000000905082610190565b6101f46004356000818152600160205260409020545b919050565b6101f46004356024355b60008054600160a060020a039081163390911614156102295761022683600160a060020a0384166101c6565b6101f46004356024355b60008054600160a060020a039081163390911614156102295782815260016020526040902081905580610229565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b90565b90505b92915050565b508091505b50905600606060405260008054600160a060020a03191633179055610433806100256000396000f3006060604052361561008d5760e060020a600035046314d8c981811461008f5780631a695230146100b757806322fb3fb0146100ed578063284cc0a914610118578063292493931461016957806341c0e1b5146101b8578063438f503d146101e1578063be1c766b1461020a578063ca4fffad14610214578063dc281aff14610264578063f8cdfbf814610278575b005b61028c600435600160a060020a0381166000908152600460205260409020600201545b919050565b61028c60043560008054600160a060020a039081163390911614156100b2578054600160a060020a0319168217905560016100b2565b61029e600435600160a060020a038181166000908152600460205260409020546101009004166100b2565b61028c60043560008054600160a060020a039081163390911614156100b257600160a060020a03821681526004602052604081205460ff16156103ed576040812060020180546000190190556103cb565b61028c60043560243560008054600160a060020a0390811633909116141561041957600160a060020a03831681526004602052604081205460ff161561041f57604081206002018290556103fb565b61028c60008054600160a060020a03908116339091161415610211578054600160a060020a0316ff5b61029e600435600160a060020a03818116600090815260046020526040902060010154166100b2565b61028c6003545b90565b61028c60043560008054600160a060020a039081163390911614156100b257600160a060020a03821681526004602052604081205460ff16156102bb5760408120600201805460010190556103cb565b61029e600154600160a060020a0316610211565b61029e600254600160a060020a0316610211565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6103c98260015b600160a060020a03821660009081526004602052604081206002015481908490829081141581141561042957604080822060018054600160a060020a0390811680865284862083018054600160a060020a03199081168d1790915585516080810187528481526020818101848152978201898152606083018e81528f87168b5260049092529151875498516101000260ff19999099161774ffffffffffffffffffffffffffffffffffffffff00191697909717865551858501805483169091179055945160029485015582549094168a178255600380549092019091559054919450168114156103bf5760028054600160a060020a031916871790555b849350505061042c565b505b50600160a060020a0381166000908152600460205260409020600201546100b2565b6103c9826000196102c2565b505b50600160a060020a0382166000908152600460205260409020600201545b92915050565b6103f983836102c2565b50505b509291505056';

var AvatarContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"createWoT","outputs":[{"name":"wotContractAddress","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"key","type":"bytes32"}],"name":"get","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes32"},{"name":"val","type":"address"}],"name":"set","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes32"},{"name":"value","type":"bytes32"}],"name":"set","outputs":[{"name":"","type":"bytes32"}],"type":"function"}]);


var myAccount = eth.accounts[0];

var myAvatar = null;

var avatars = AvatarAggregatorContract.new({
  from: myAccount, 
  data: avatarAggregatorBinary, 
  gas: 1000000
}, function(e, contract){
  if (typeof contract.address != 'undefined') {
    console.log(e, contract);
    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
  }
});

// once mined

var receipt = avatars.createAvatar( { from: myAccount, gas: 1000000 } );
var myAvatar = AvatarContract.at( avatars.getItem( myAccount ) );

var receipt2 = myAvatar.set.call( "name", "My Name", { from: myAccount, gas: 100000 });




