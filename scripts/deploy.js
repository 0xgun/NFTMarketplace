const hre = require('hardhat');

async function main() {
  const MarketPlace = await hre.ethers.getContractFactory('MarketPlace');
  const nftMarketplace = await MarketPlace.deploy();
  await nftMarketplace.deployed();
  console.log('Market deployed to:', nftMarketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
