const hre = require("hardhat");
const BN = require("ethers").BigNumber;
const owner = "0xC9b1dCfd782B36c2b1bc0FB2805c64cb64B2f225";

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0xCF967d016818C5432d57fb45e22A221969EBbeE4",
    //Pass arguments as string and comma seprated values
    constructorArguments: ["0xf45d94927cCF82A44dE5f0A8e1973e0c80743675", "0xD631C7CFc2b44ec1ef60fc9D2d61e5cCfC0C0E8b"],
    //Path of your main contract.
    contract: "contracts/Faucet.sol:Faucet", 
  });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x8a1775c60511503586aDBfe5cA6D81Bf26aBCe3C",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: ["Lithium","ION",BN.from("5000000").mul(BN.from("10").pow("18")),"0xf6B310EeC4E5cD5d06f0C76e4504F32c19D5297d", "0xC9b1dCfd782B36c2b1bc0FB2805c64cb64B2f225"],
  //   //Path of your main contract.
  //   contract: "contracts/ION.sol:ION",
  // });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x1FE3066F4A79A903ecfbcD34CDE3048a82187b4C",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: ["0xf6B310EeC4E5cD5d06f0C76e4504F32c19D5297d"],
  //   //Path of your main contract.
  //   contract: "contracts/EBSC.sol:EBSC",
  // });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0xc4DF119744Cc8A93A1E4A0ae36F5ecc439aEc48d",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  // });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x0d99e50dC14623B5325068914C4230D5fd49fDAe",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  // });

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x06b3d8929746246927B0a6E6e32615fe984Df0E7",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  // });

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x1311C1c3D7B014D4186928B4A6a4264f0A11B502",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
  // });

  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x4127D53609A0433cfE7DFbD95125C38116197045",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/Admin.sol:Admin",
  // });



  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0xcFbF6c912c03BB14d266B403c9bBa2dd8B5F8b2a",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/Staking.sol:Staking",
  // });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x72bf1fa974650A809BC482630f41E25e74cd6F80",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/TokenSale.sol:TokenSale",
  // });
  // await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0xdA12996912F8E09aBa1a7bB83Fb8a9Cb0B3Ec34b",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: [],
  //   //Path of your main contract.
  //   contract: "contracts/Rewards.sol:Rewards",
  // });

  //  await hre.run("verify:verify", {
  //   //Deployed contract address
  //   address: "0x6D7454f1d07eE6af3364b8c1176Aecce99Cb084f",
  //   //Pass arguments as string and comma seprated values
  //   constructorArguments: ["0xf03731239d662B1780798b8645629691e3b2d33F","0xEeD204CBb983A1E7ca1b41CeEe28a532e4B13e4c"],
  //   //Path of your main contract.
  //   contract: "contracts/mock_router/UniswapV2Router02.sol:UniswapV2Router02",
  // });

  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0xe3F417c0d3fE988Ad8576d037De2e48bCB2A1B50",
    //Pass arguments as string and comma seprated values
    constructorArguments: ["Lithium",
      "ION",
      BN.from("50000000").mul(BN.from("10").pow("18")),
      owner,
      "0x522A1c691409cb2D8c2A212242FD52eCd29cC0C4",
      "0xAaE51B6Aca8403EdE79f69dE10a4f6C02CccC453",
      "0xBF75d4C5DEF207cF1ef487aDC9752A80a879a27A",
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      owner//owner
    ],
    //Path of your main contract.
    contract: "contracts/ION.sol:ION",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network rinkeby  scripts/verify.ts