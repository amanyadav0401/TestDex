//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "./interfaces/IUniswapV2Router02.sol";
import "hardhat/console.sol";

contract Cheddar is Initializable {

IUniswapV2Router02 router;
address wrappedMatic;

function initialize(IUniswapV2Router02 _router, address _wrappedMatic) public {
    router = _router;
    wrappedMatic = _wrappedMatic;
}

function swapAndPay(address[] memory _tokens, uint[] memory bp, uint totalBP) public payable {

    uint totalTokens = _tokens.length;
    require(msg.value>0,"Invalid Matic!");
    for(uint i=0; i<totalTokens; i++){
         address[] memory path = new address[](2);
            path[0] = address(wrappedMatic);
            path[1] = address(_tokens[i]);
            uint ethToSend = msg.value*(bp[i])/totalBP;
            router.swapExactETHForTokens{value: ethToSend}(0, path, msg.sender, block.timestamp+3600);
 }

}

}