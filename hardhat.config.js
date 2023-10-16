// const fs = require('fs');
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const { ALCHEMY_RPC_MUMBAI, PRIVATE_KEY, SEPOLIA_KEY } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_RPC_MUMBAI}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: '0.8.21',
};
