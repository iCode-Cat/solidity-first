// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'clog ridge peace super hard thank tobacco bracket master erosion fetch early',
  'https://rinkeby.infura.io/v3/9e87ee6f7cd7436888aa6eca38608789'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from contract ', accounts[0]);
  // Interface === ABI , arguments === initial
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi There!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
  provider.engine.stop();
};

deploy();
