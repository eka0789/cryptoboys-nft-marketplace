const CryptoNfts = artifacts.require("CryptoNfts");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoNfts);
};
