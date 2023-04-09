/*
  You can use this script to quickly manually mintNFTs. To do so:
  Run `truffle exec ./scripts/mint.js`
 */
var ERC4907Demo = artifacts.require("./ERC4907Demo.sol");

function getErrorMessage(error) {
  if (error instanceof Error) return error.message
  return String(error)
}

const main = async (cb) => {
  try {
    const demo = await ERC4907Demo.deployed();

    
    const userOfToken = await demo.userOf(4);
    console.log('user of token', userOfToken);

    const ownerOfToken = await demo.ownerOf(4);
    console.log('owner of token', ownerOfToken);

  } catch(err) {
    console.log('Doh! ', getErrorMessage(err));
  }
  cb();
}

module.exports = main;