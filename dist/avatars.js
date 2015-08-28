var AvatarAggregatorContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"tail","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"length","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"avatar","type":"address"}],"name":"register","outputs":[{"name":"contractAddress","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"head","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"deregister","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"items","outputs":[{"name":"exists","type":"bool"},{"name":"prev","type":"address"},{"name":"next","type":"address"},{"name":"value","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"create","outputs":[{"name":"contractAddress","type":"address"}],"type":"function"}]);
var AvatarContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes32"},{"name":"value","type":"string"}],"name":"set","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"keys","outputs":[{"name":"","type":"string"}],"type":"function"}]);

var avatars = AvatarAggregatorContract.at("0x2c62c7b5fd245fa08cb8bd2fff4417eb3efe2aae");
