import {ethers} from 'ethers'
import './App.css';
import { contractABI, contractAddress } from './constants';
function App() {


  // Function to connect Metamask to our React App
  const connectWallet = async() =>{
    window.ethereum.request( {method: "eth_requestAccounts"})
    .then((accounts) => {
      // setAccount(accounts[0]);
    }).catch( (e) => {
      alert(e)
    })
}

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // RPC link for Polygon testNetwork 
  const provider2 = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com	/");

  const interactWithContract = async() => {

    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer)
      // Calling addProduct smart contract function with paramaters/
    const tx = await contractInstance.addProduct("Name1", "ABC", "1234567", 'Pune', "11222334455AB")

  }

  // // Fetching data while user is connected to metamask
  const getProducts = async() => {

    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer)
    const tx = await contractInstance.getProduct("Name1")
    // tx is returning 2 arrays
    console.log(tx[0])
    console.log(tx[1])

    // To fetch the BigNumber, just user, Converting the bigNumber into the String, we can also use BigNumber js library for this.
    console.log(tx[0][2].toString())

  }

  // Fetching data without connecting to metamask.
  const getProducts2 = async() => {

    const contractInstance = new ethers.Contract(contractAddress, contractABI, provider2)
    const tx = await contractInstance.getProduct("Name1")
    console.log(tx[0])

  }
  // string memory _productName, 
  // string memory _manufacturer, 
  // uint256 _manufactureDate,
  // string memory _location,
  // string memory _paymentInfo


  return (
    <div className="App">

      <button onClick={connectWallet} >Connect</button>
      <br /><br />
      <button onClick={interactWithContract} >interactWithContract</button>
      <br /><br />

      <button onClick={getProducts} >getProducts</button>
      <br /><br />

      <button onClick={getProducts2} >getProducts2</button>
      
    </div>
  );
}

export default App;
