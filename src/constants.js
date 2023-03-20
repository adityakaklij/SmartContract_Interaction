export const contractAddress = '0x4076144027b8D70E72744E9C080ED5cc9DA779B5' // Deployed on Polygon TestNet
//https://mumbai.polygonscan.com/address/0x4076144027b8d70e72744e9c080ed5cc9da779b5

// Add polygon to metamask
// https://chainlist.org/?testnets=true&search=polygon

export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_manufactureDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_paymentInfo",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_distributor",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_distributorDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_distributorLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_distributorPaymentInfo",
				"type": "string"
			}
		],
		"name": "passToDistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_retailerDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_retailerLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailerPaymentInfo",
				"type": "string"
			}
		],
		"name": "passToRetailer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_wholesaler",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_wholesalerDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_wholesalerLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_wholesalerPaymentInfo",
				"type": "string"
			}
		],
		"name": "passToWholesaler",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "manufactureDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "paymentInfo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "distributor",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "distributorDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "distributorLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "distributorPaymentInfo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "wholesaler",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "wholesalerDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "wholesalerLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "wholesalerPaymentInfo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "retailer",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "retailerDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "retailerLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "retailerPaymentInfo",
						"type": "string"
					}
				],
				"internalType": "struct ProductSupplyChain.Product",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "from",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "to",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ProductSupplyChain.Transfer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]