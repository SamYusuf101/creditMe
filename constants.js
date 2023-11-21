export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const abi = {
    _format: "hh-sol-artifact-1",
    contractName: "FundMe",
    sourceName: "contracts/FundMe.sol",
    abi: [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "priceFeed",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [],
            name: "FundMe__NotOwner",
            type: "error",
        },
        {
            inputs: [],
            name: "MINIMUM_USD",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "cheaperWithdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "fund",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "fundingAddress",
                    type: "address",
                },
            ],
            name: "getAddressToAmountFunded",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256",
                },
            ],
            name: "getFunder",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getPriceFeed",
            outputs: [
                {
                    internalType: "contract AggregatorV3Interface",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getVersion",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    bytecode:
        "0x60a06040523480156200001157600080fd5b5060405162001354380380620013548339818101604052810190620000379190620000cd565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505062000152565b600081519050620000c78162000138565b92915050565b600060208284031215620000e657620000e562000133565b5b6000620000f684828501620000b6565b91505092915050565b60006200010c8262000113565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200014381620000ff565b81146200014f57600080fd5b50565b60805160601c6111c76200018d600039600081816102db0152818161046e015281816105140152818161069f015261089501526111c76000f3fe6080604052600436106100865760003560e01c8063893d20e811610059578063893d20e8146101355780639e87a5cd14610160578063b60d42881461018b578063be2693f014610195578063d7b4750c146101ac57610086565b80630343fb251461008b5780630d8e6e2c146100c85780633ccfd60b146100f35780636b69a5921461010a575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610b5e565b6101e9565b6040516100bf9190610d3e565b60405180910390f35b3480156100d457600080fd5b506100dd610232565b6040516100ea9190610d3e565b60405180910390f35b3480156100ff57600080fd5b506101086102d9565b005b34801561011657600080fd5b5061011f610503565b60405161012c9190610d3e565b60405180910390f35b34801561014157600080fd5b5061014a610510565b6040516101579190610ce8565b60405180910390f35b34801561016c57600080fd5b50610175610538565b6040516101829190610d03565b60405180910390f35b610193610562565b005b3480156101a157600080fd5b506101aa61069d565b005b3480156101b857600080fd5b506101d360048036038101906101ce9190610b8b565b61092b565b6040516101e09190610ce8565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561029c57600080fd5b505afa1580156102b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d49190610bb8565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461035e576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b600080549050811015610409576000808281548110610383576103826110a6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061040190610fff565b915050610361565b50600067ffffffffffffffff811115610425576104246110d5565b5b6040519080825280602002602001820160405280156104535781602001602082028036833780820191505090505b5060009080519060200190610469929190610a4e565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516104b090610cd3565b60006040518083038185875af1925050503d80600081146104ed576040519150601f19603f3d011682016040523d82523d6000602084013e6104f2565b606091505b505090508061050057600080fd5b50565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6802b5e3af16b18800006105a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163461097290919063ffffffff16565b10156105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610d1e565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106319190610d75565b925050819055506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610722576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808054806020026020016040519081016040528092919081815260200182805480156107a557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161075b575b5050505050905060005b81518110156108305760008282815181106107cd576107cc6110a6565b5b602002602001015190506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061082890610fff565b9150506107af565b50600067ffffffffffffffff81111561084c5761084b6110d5565b5b60405190808252806020026020018201604052801561087a5781602001602082028036833780820191505090505b5060009080519060200190610890929190610a4e565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516108d790610cd3565b60006040518083038185875af1925050503d8060008114610914576040519150601f19603f3d011682016040523d82523d6000602084013e610919565b606091505b505090508061092757600080fd5b5050565b60008082815481106109405761093f6110a6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008061097e836109ae565b90506000670de0b6b3a764000085836109979190610f13565b6109a19190610dcb565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156109f757600080fd5b505afa158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190610be5565b5050509150506402540be40081610a469190610dfc565b915050919050565b828054828255906000526020600020908101928215610ac7579160200282015b82811115610ac65782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a6e565b5b509050610ad49190610ad8565b5090565b5b80821115610af1576000816000905550600101610ad9565b5090565b600081359050610b0481611135565b92915050565b600081519050610b198161114c565b92915050565b600081359050610b2e81611163565b92915050565b600081519050610b4381611163565b92915050565b600081519050610b588161117a565b92915050565b600060208284031215610b7457610b73611104565b5b6000610b8284828501610af5565b91505092915050565b600060208284031215610ba157610ba0611104565b5b6000610baf84828501610b1f565b91505092915050565b600060208284031215610bce57610bcd611104565b5b6000610bdc84828501610b34565b91505092915050565b600080600080600060a08688031215610c0157610c00611104565b5b6000610c0f88828901610b49565b9550506020610c2088828901610b0a565b9450506040610c3188828901610b34565b9350506060610c4288828901610b34565b9250506080610c5388828901610b49565b9150509295509295909350565b610c6981610f6d565b82525050565b610c7881610fc9565b82525050565b6000610c8b601b83610d64565b9150610c9682611109565b602082019050919050565b6000610cae600083610d59565b9150610cb982611132565b600082019050919050565b610ccd81610fa9565b82525050565b6000610cde82610ca1565b9150819050919050565b6000602082019050610cfd6000830184610c60565b92915050565b6000602082019050610d186000830184610c6f565b92915050565b60006020820190508181036000830152610d3781610c7e565b9050919050565b6000602082019050610d536000830184610cc4565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610d8082610fa9565b9150610d8b83610fa9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dc057610dbf611048565b5b828201905092915050565b6000610dd682610fa9565b9150610de183610fa9565b925082610df157610df0611077565b5b828204905092915050565b6000610e0782610f7f565b9150610e1283610f7f565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610e5157610e50611048565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610e8e57610e8d611048565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610ecb57610eca611048565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610f0857610f07611048565b5b828202905092915050565b6000610f1e82610fa9565b9150610f2983610fa9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f6257610f61611048565b5b828202905092915050565b6000610f7882610f89565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600069ffffffffffffffffffff82169050919050565b6000610fd482610fdb565b9050919050565b6000610fe682610fed565b9050919050565b6000610ff882610f89565b9050919050565b600061100a82610fa9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561103d5761103c611048565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b50565b61113e81610f6d565b811461114957600080fd5b50565b61115581610f7f565b811461116057600080fd5b50565b61116c81610fa9565b811461117757600080fd5b50565b61118381610fb3565b811461118e57600080fd5b5056fea26469706673582212209501a8d5849ec7e93eabe727b757fae1948c38fb5e44233de9bdc1ca992088f264736f6c63430008070033",
    deployedBytecode:
        "0x6080604052600436106100865760003560e01c8063893d20e811610059578063893d20e8146101355780639e87a5cd14610160578063b60d42881461018b578063be2693f014610195578063d7b4750c146101ac57610086565b80630343fb251461008b5780630d8e6e2c146100c85780633ccfd60b146100f35780636b69a5921461010a575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610b5e565b6101e9565b6040516100bf9190610d3e565b60405180910390f35b3480156100d457600080fd5b506100dd610232565b6040516100ea9190610d3e565b60405180910390f35b3480156100ff57600080fd5b506101086102d9565b005b34801561011657600080fd5b5061011f610503565b60405161012c9190610d3e565b60405180910390f35b34801561014157600080fd5b5061014a610510565b6040516101579190610ce8565b60405180910390f35b34801561016c57600080fd5b50610175610538565b6040516101829190610d03565b60405180910390f35b610193610562565b005b3480156101a157600080fd5b506101aa61069d565b005b3480156101b857600080fd5b506101d360048036038101906101ce9190610b8b565b61092b565b6040516101e09190610ce8565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561029c57600080fd5b505afa1580156102b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d49190610bb8565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461035e576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b600080549050811015610409576000808281548110610383576103826110a6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061040190610fff565b915050610361565b50600067ffffffffffffffff811115610425576104246110d5565b5b6040519080825280602002602001820160405280156104535781602001602082028036833780820191505090505b5060009080519060200190610469929190610a4e565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516104b090610cd3565b60006040518083038185875af1925050503d80600081146104ed576040519150601f19603f3d011682016040523d82523d6000602084013e6104f2565b606091505b505090508061050057600080fd5b50565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6802b5e3af16b18800006105a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163461097290919063ffffffff16565b10156105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610d1e565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106319190610d75565b925050819055506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610722576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808054806020026020016040519081016040528092919081815260200182805480156107a557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161075b575b5050505050905060005b81518110156108305760008282815181106107cd576107cc6110a6565b5b602002602001015190506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061082890610fff565b9150506107af565b50600067ffffffffffffffff81111561084c5761084b6110d5565b5b60405190808252806020026020018201604052801561087a5781602001602082028036833780820191505090505b5060009080519060200190610890929190610a4e565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516108d790610cd3565b60006040518083038185875af1925050503d8060008114610914576040519150601f19603f3d011682016040523d82523d6000602084013e610919565b606091505b505090508061092757600080fd5b5050565b60008082815481106109405761093f6110a6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008061097e836109ae565b90506000670de0b6b3a764000085836109979190610f13565b6109a19190610dcb565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156109f757600080fd5b505afa158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190610be5565b5050509150506402540be40081610a469190610dfc565b915050919050565b828054828255906000526020600020908101928215610ac7579160200282015b82811115610ac65782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a6e565b5b509050610ad49190610ad8565b5090565b5b80821115610af1576000816000905550600101610ad9565b5090565b600081359050610b0481611135565b92915050565b600081519050610b198161114c565b92915050565b600081359050610b2e81611163565b92915050565b600081519050610b4381611163565b92915050565b600081519050610b588161117a565b92915050565b600060208284031215610b7457610b73611104565b5b6000610b8284828501610af5565b91505092915050565b600060208284031215610ba157610ba0611104565b5b6000610baf84828501610b1f565b91505092915050565b600060208284031215610bce57610bcd611104565b5b6000610bdc84828501610b34565b91505092915050565b600080600080600060a08688031215610c0157610c00611104565b5b6000610c0f88828901610b49565b9550506020610c2088828901610b0a565b9450506040610c3188828901610b34565b9350506060610c4288828901610b34565b9250506080610c5388828901610b49565b9150509295509295909350565b610c6981610f6d565b82525050565b610c7881610fc9565b82525050565b6000610c8b601b83610d64565b9150610c9682611109565b602082019050919050565b6000610cae600083610d59565b9150610cb982611132565b600082019050919050565b610ccd81610fa9565b82525050565b6000610cde82610ca1565b9150819050919050565b6000602082019050610cfd6000830184610c60565b92915050565b6000602082019050610d186000830184610c6f565b92915050565b60006020820190508181036000830152610d3781610c7e565b9050919050565b6000602082019050610d536000830184610cc4565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610d8082610fa9565b9150610d8b83610fa9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dc057610dbf611048565b5b828201905092915050565b6000610dd682610fa9565b9150610de183610fa9565b925082610df157610df0611077565b5b828204905092915050565b6000610e0782610f7f565b9150610e1283610f7f565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610e5157610e50611048565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610e8e57610e8d611048565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610ecb57610eca611048565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610f0857610f07611048565b5b828202905092915050565b6000610f1e82610fa9565b9150610f2983610fa9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f6257610f61611048565b5b828202905092915050565b6000610f7882610f89565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600069ffffffffffffffffffff82169050919050565b6000610fd482610fdb565b9050919050565b6000610fe682610fed565b9050919050565b6000610ff882610f89565b9050919050565b600061100a82610fa9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561103d5761103c611048565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b50565b61113e81610f6d565b811461114957600080fd5b50565b61115581610f7f565b811461116057600080fd5b50565b61116c81610fa9565b811461117757600080fd5b50565b61118381610fb3565b811461118e57600080fd5b5056fea26469706673582212209501a8d5849ec7e93eabe727b757fae1948c38fb5e44233de9bdc1ca992088f264736f6c63430008070033",
    linkReferences: {},
    deployedLinkReferences: {},
}
