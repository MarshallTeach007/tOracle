(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(6),s=n.n(i),o=(n(17),n(0)),c=n.n(o),l=n(2),f=n(7),d=n(8),u=n(10),p=n(9),y=n(11),m=n(4),g=n(3),b=n.n(g),_=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(c.a.mark((function n(){var r,a,i,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return r=new b.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(a=window.web3,console.log("Injected web3 detected."),e(a)):(i=new b.a.providers.HttpProvider("https://kovan.infura.io/v3/f8b4397c14484aa382dd9b96412e1db9"),s=new b.a(i),console.log("No web3 instance injected, using Local web3."),e(s));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))},D=(n(20),function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={storageLogString:"",web3:null,accounts:null,PriceConsumerContract:null,FuckTokenContract:null,TestTokenContract:null,FuckTokenAccountCoins:null,TestTokenAccountCoins:null,signerAddress1:"0x5D59C0b6C9B13E8c55145B86327C84938cBF1418",signerAddress2:"0x2576BD94dd46980c9D1Cec53481a306649fe49cc",dexAddress:"0xB9F8Bb65D295273424CAC7792104E064038AB066"},n.componentDidMount=Object(l.a)(c.a.mark((function e(){var t,r,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return r=e.sent,e.next=9,t.eth.net.getId();case 9:a=e.sent,i=m.networks[a],s=new t.eth.Contract(m.abi,i&&i.address),n.setState({web3:t,accounts:r,PriceConsumerContract:s},n.RunInit),console.info("networkId:",a),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 20:console.info("calller:",n.state.accounts[0]),console.info("dexAddress:",n.state.dexAddress.toString()),console.info("signerAddress1:",n.state.signerAddress1.toString()),console.info("signerAddress2:",n.state.signerAddress2.toString()),console.info("PriceConsumerContract:",n.state.PriceConsumerContract._address);case 25:case"end":return e.stop()}}),e,null,[[0,16]])}))),n.RunInit=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.test=Object(l.a)(c.a.mark((function e(){var t,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.accounts,a=t.PriceConsumerContract,e.next=3,a.methods.getLatestPrice(a._address.toString(),100).send({from:r[0]});case 3:i=e.sent,console.info("price:",i);case 5:case"end":return e.stop()}}),e)}))),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.web3?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"acc1 test:"),a.a.createElement("button",{onClick:this.test}," test")):a.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e){e.exports=JSON.parse('{"contractName":"PriceConsumer","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.6.6+commit.6c089d02\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"inputs\\":[],\\"name\\":\\"getLatestPrice\\",\\"outputs\\":[{\\"internalType\\":\\"int256\\",\\"name\\":\\"\\",\\"type\\":\\"int256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{\\"constructor\\":\\"Network: Kovan Aggregator: ETH/USD Address: 0x9326BFA02ADD2366b30bacB125260Af641031331\\",\\"getLatestPrice()\\":{\\"notice\\":\\"Returns the latest price\\"}}}},\\"settings\\":{\\"compilationTarget\\":{\\"/home/other/github/test_oracle/contracts/PriceConsumer.sol\\":\\"PriceConsumer\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/home/other/github/test_oracle/contracts/PriceConsumer.sol\\":{\\"keccak256\\":\\"0xe6cc8e088e6d940503087db22a8da0ec18ebc559d2c62282509af80a9e041005\\",\\"urls\\":[\\"bzz-raw://33eefcce3dfef453fa78420f410ee213bef4cffcbb40c82af4cd7516cc35f404\\",\\"dweb:/ipfs/QmWwiLDbWmaH56CpL3eS1uwm89c5Z9JLqMCKgwvBXY5qZe\\"]},\\"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol\\":{\\"keccak256\\":\\"0x12f0e35e0320088f2110173226860e44309766c0f7022a2433efdebd5bf1a002\\",\\"urls\\":[\\"bzz-raw://44645044454c4013f5f3bc3fda54b507494fe95921bf75de9a329933cb32b19d\\",\\"dweb:/ipfs/QmfP8kZZw6zYKy6cVPxbatSDZHiwTSJ1iMGyiYKE25DHLw\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b50739326bfa02add2366b30bacb125260af6410313316000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061016c806100746000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e15f47314610030575b600080fd5b61003861004e565b6040518082815260200191505060405180910390f35b6000806000806000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156100be57600080fd5b505afa1580156100d2573d6000803e3d6000fd5b505050506040513d60a08110156100e857600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050509450945094509450945083955050505050509056fea2646970667358221220f2d8c67cde16b12e5e07325e78cd9d0c8d833ae0416b5f62eb82231b88f9816364736f6c63430006060033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e15f47314610030575b600080fd5b61003861004e565b6040518082815260200191505060405180910390f35b6000806000806000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156100be57600080fd5b505afa1580156100d2573d6000803e3d6000fd5b505050506040513d60a08110156100e857600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050509450945094509450945083955050505050509056fea2646970667358221220f2d8c67cde16b12e5e07325e78cd9d0c8d833ae0416b5f62eb82231b88f9816364736f6c63430006060033","immutableReferences":{},"sourceMap":"104:679:1:-:0;;;304:137;5:9:-1;2:2;;;27:1;24;17:12;2:2;304:137:1;382:42;335:9;;:99;;;;;;;;;;;;;;;;;;104:679;;;;;;","deployedSourceMap":"104:679:1:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;104:679:1;;;;;;;;;;;;;;;;12:1:-1;9;2:12;495:286:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;542:6;574:14;602:12;628:17;659;690:22;725:9;;;;;;;;;;;:25;;;:27;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;725:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;725:27:1;;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;725:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;560:192;;;;;;;;;;769:5;762:12;;;;;;;495:286;:::o","source":"pragma solidity >=0.6.0;\\n\\nimport \\"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol\\";\\n\\ncontract PriceConsumer {\\n    AggregatorV3Interface internal priceFeed;\\n\\n    /**\\n     * Network: Kovan\\n     * Aggregator: ETH/USD\\n     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331\\n     */\\n    constructor() public {\\n        priceFeed = AggregatorV3Interface(\\n            0x9326BFA02ADD2366b30bacB125260Af641031331\\n        );\\n    }\\n\\n    /**\\n     * Returns the latest price\\n     */\\n    function getLatestPrice() public view returns (int256) {\\n        (\\n            uint80 roundID,\\n            int256 price,\\n            uint256 startedAt,\\n            uint256 timeStamp,\\n            uint80 answeredInRound\\n        ) = priceFeed.latestRoundData();\\n        return price;\\n    }\\n}\\n","sourcePath":"/home/other/github/test_oracle/contracts/PriceConsumer.sol","ast":{"absolutePath":"/home/other/github/test_oracle/contracts/PriceConsumer.sol","exportedSymbols":{"PriceConsumer":[72]},"id":73,"nodeType":"SourceUnit","nodes":[{"id":34,"literals":["solidity",">=","0.6",".0"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol","file":"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol","id":35,"nodeType":"ImportDirective","scope":73,"sourceUnit":119,"src":"26:76:1","symbolAliases":[],"unitAlias":""},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":72,"linearizedBaseContracts":[72],"name":"PriceConsumer","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":37,"mutability":"mutable","name":"priceFeed","nodeType":"VariableDeclaration","overrides":null,"scope":72,"src":"133:40:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"},"typeName":{"contractScope":null,"id":36,"name":"AggregatorV3Interface","nodeType":"UserDefinedTypeName","referencedDeclaration":118,"src":"133:21:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"value":null,"visibility":"internal"},{"body":{"id":47,"nodeType":"Block","src":"325:116:1","statements":[{"expression":{"argumentTypes":null,"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":41,"name":"priceFeed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"335:9:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307839333236424641303241444432333636623330626163423132353236304166363431303331333331","id":43,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"382:42:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"value":"0x9326BFA02ADD2366b30bacB125260Af641031331"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":42,"name":"AggregatorV3Interface","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":118,"src":"347:21:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_AggregatorV3Interface_$118_$","typeString":"type(contract AggregatorV3Interface)"}},"id":44,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"347:87:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"src":"335:99:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"id":46,"nodeType":"ExpressionStatement","src":"335:99:1"}]},"documentation":{"id":38,"nodeType":"StructuredDocumentation","src":"180:119:1","text":"Network: Kovan\\nAggregator: ETH/USD\\nAddress: 0x9326BFA02ADD2366b30bacB125260Af641031331"},"id":48,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":39,"nodeType":"ParameterList","parameters":[],"src":"315:2:1"},"returnParameters":{"id":40,"nodeType":"ParameterList","parameters":[],"src":"325:0:1"},"scope":72,"src":"304:137:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":70,"nodeType":"Block","src":"550:231:1","statements":[{"assignments":[55,57,59,61,63],"declarations":[{"constant":false,"id":55,"mutability":"mutable","name":"roundID","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"574:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"},"typeName":{"id":54,"name":"uint80","nodeType":"ElementaryTypeName","src":"574:6:1","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"}},"value":null,"visibility":"internal"},{"constant":false,"id":57,"mutability":"mutable","name":"price","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"602:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":56,"name":"int256","nodeType":"ElementaryTypeName","src":"602:6:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":null,"visibility":"internal"},{"constant":false,"id":59,"mutability":"mutable","name":"startedAt","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"628:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint256","nodeType":"ElementaryTypeName","src":"628:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":61,"mutability":"mutable","name":"timeStamp","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"659:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint256","nodeType":"ElementaryTypeName","src":"659:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":63,"mutability":"mutable","name":"answeredInRound","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"690:22:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"},"typeName":{"id":62,"name":"uint80","nodeType":"ElementaryTypeName","src":"690:6:1","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"}},"value":null,"visibility":"internal"}],"id":67,"initialValue":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":64,"name":"priceFeed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"725:9:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"latestRoundData","nodeType":"MemberAccess","referencedDeclaration":117,"src":"725:25:1","typeDescriptions":{"typeIdentifier":"t_function_external_view$__$returns$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$","typeString":"function () view external returns (uint80,int256,uint256,uint256,uint80)"}},"id":66,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"725:27:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$","typeString":"tuple(uint80,int256,uint256,uint256,uint80)"}},"nodeType":"VariableDeclarationStatement","src":"560:192:1"},{"expression":{"argumentTypes":null,"id":68,"name":"price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"769:5:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"functionReturnParameters":53,"id":69,"nodeType":"Return","src":"762:12:1"}]},"documentation":{"id":49,"nodeType":"StructuredDocumentation","src":"447:43:1","text":"Returns the latest price"},"functionSelector":"8e15f473","id":71,"implemented":true,"kind":"function","modifiers":[],"name":"getLatestPrice","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":50,"nodeType":"ParameterList","parameters":[],"src":"518:2:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[{"constant":false,"id":52,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":71,"src":"542:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":51,"name":"int256","nodeType":"ElementaryTypeName","src":"542:6:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":null,"visibility":"internal"}],"src":"541:8:1"},"scope":72,"src":"495:286:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":73,"src":"104:679:1"}],"src":"0:784:1"},"legacyAST":{"absolutePath":"/home/other/github/test_oracle/contracts/PriceConsumer.sol","exportedSymbols":{"PriceConsumer":[72]},"id":73,"nodeType":"SourceUnit","nodes":[{"id":34,"literals":["solidity",">=","0.6",".0"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol","file":"@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol","id":35,"nodeType":"ImportDirective","scope":73,"sourceUnit":119,"src":"26:76:1","symbolAliases":[],"unitAlias":""},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":72,"linearizedBaseContracts":[72],"name":"PriceConsumer","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":37,"mutability":"mutable","name":"priceFeed","nodeType":"VariableDeclaration","overrides":null,"scope":72,"src":"133:40:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"},"typeName":{"contractScope":null,"id":36,"name":"AggregatorV3Interface","nodeType":"UserDefinedTypeName","referencedDeclaration":118,"src":"133:21:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"value":null,"visibility":"internal"},{"body":{"id":47,"nodeType":"Block","src":"325:116:1","statements":[{"expression":{"argumentTypes":null,"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":41,"name":"priceFeed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"335:9:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"307839333236424641303241444432333636623330626163423132353236304166363431303331333331","id":43,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"382:42:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"value":"0x9326BFA02ADD2366b30bacB125260Af641031331"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":42,"name":"AggregatorV3Interface","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":118,"src":"347:21:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_AggregatorV3Interface_$118_$","typeString":"type(contract AggregatorV3Interface)"}},"id":44,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"347:87:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"src":"335:99:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"id":46,"nodeType":"ExpressionStatement","src":"335:99:1"}]},"documentation":{"id":38,"nodeType":"StructuredDocumentation","src":"180:119:1","text":"Network: Kovan\\nAggregator: ETH/USD\\nAddress: 0x9326BFA02ADD2366b30bacB125260Af641031331"},"id":48,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":39,"nodeType":"ParameterList","parameters":[],"src":"315:2:1"},"returnParameters":{"id":40,"nodeType":"ParameterList","parameters":[],"src":"325:0:1"},"scope":72,"src":"304:137:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":70,"nodeType":"Block","src":"550:231:1","statements":[{"assignments":[55,57,59,61,63],"declarations":[{"constant":false,"id":55,"mutability":"mutable","name":"roundID","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"574:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"},"typeName":{"id":54,"name":"uint80","nodeType":"ElementaryTypeName","src":"574:6:1","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"}},"value":null,"visibility":"internal"},{"constant":false,"id":57,"mutability":"mutable","name":"price","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"602:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":56,"name":"int256","nodeType":"ElementaryTypeName","src":"602:6:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":null,"visibility":"internal"},{"constant":false,"id":59,"mutability":"mutable","name":"startedAt","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"628:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":58,"name":"uint256","nodeType":"ElementaryTypeName","src":"628:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":61,"mutability":"mutable","name":"timeStamp","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"659:17:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":60,"name":"uint256","nodeType":"ElementaryTypeName","src":"659:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":63,"mutability":"mutable","name":"answeredInRound","nodeType":"VariableDeclaration","overrides":null,"scope":70,"src":"690:22:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"},"typeName":{"id":62,"name":"uint80","nodeType":"ElementaryTypeName","src":"690:6:1","typeDescriptions":{"typeIdentifier":"t_uint80","typeString":"uint80"}},"value":null,"visibility":"internal"}],"id":67,"initialValue":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":64,"name":"priceFeed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"725:9:1","typeDescriptions":{"typeIdentifier":"t_contract$_AggregatorV3Interface_$118","typeString":"contract AggregatorV3Interface"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"latestRoundData","nodeType":"MemberAccess","referencedDeclaration":117,"src":"725:25:1","typeDescriptions":{"typeIdentifier":"t_function_external_view$__$returns$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$","typeString":"function () view external returns (uint80,int256,uint256,uint256,uint80)"}},"id":66,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"725:27:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$","typeString":"tuple(uint80,int256,uint256,uint256,uint80)"}},"nodeType":"VariableDeclarationStatement","src":"560:192:1"},{"expression":{"argumentTypes":null,"id":68,"name":"price","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"769:5:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"functionReturnParameters":53,"id":69,"nodeType":"Return","src":"762:12:1"}]},"documentation":{"id":49,"nodeType":"StructuredDocumentation","src":"447:43:1","text":"Returns the latest price"},"functionSelector":"8e15f473","id":71,"implemented":true,"kind":"function","modifiers":[],"name":"getLatestPrice","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":50,"nodeType":"ParameterList","parameters":[],"src":"518:2:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[{"constant":false,"id":52,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":71,"src":"542:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":51,"name":"int256","nodeType":"ElementaryTypeName","src":"542:6:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":null,"visibility":"internal"}],"src":"541:8:1"},"scope":72,"src":"495:286:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":73,"src":"104:679:1"}],"src":"0:784:1"},"compiler":{"name":"solc","version":"0.6.6+commit.6c089d02.Emscripten.clang"},"networks":{"42":{"events":{},"links":{},"address":"0x0B79D07BDE382412ef159d523F2a0926cA387B31","transactionHash":"0x634a564788b31234ebd80b45588c3a535afbedd194b4706aa442fc25101476a7"}},"schemaVersion":"3.3.2","updatedAt":"2020-12-03T10:20:33.361Z","networkType":"ethereum","devdoc":{"methods":{}},"userdoc":{"methods":{"constructor":"Network: Kovan Aggregator: ETH/USD Address: 0x9326BFA02ADD2366b30bacB125260Af641031331","getLatestPrice()":{"notice":"Returns the latest price"}}}}')}},[[12,1,2]]]);
//# sourceMappingURL=main.dcac4b2b.chunk.js.map