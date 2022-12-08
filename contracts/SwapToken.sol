//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.7;

import "./interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract swapToken {
    address router;
    address weth;
    mapping(address => uint256) internal userAmounts;

    constructor(address _router, address _weth) {
        router = _router;
        weth = _weth;
    }

    function swapTokens(address token, uint256 _amount) external {
        require(token != address(0), "Zero Address");
        address[] memory path = new address[](2);
        path[0]=token;
        path[1] = weth;
        console.log("test1");
        uint256[] memory amount = IUniswapV2Router02(router).getAmountsOut(
            _amount,
            path
        );
        userAmounts[msg.sender] = amount[1];
        console.log("test",amount[1]);
        IERC20(token).approve(router,_amount);
        IUniswapV2Router02(router).swapTokensForExactETH(
            amount[1],
            _amount,
            path,
            address(this),
            block.timestamp+3600
        );
    }

    function withdrawETH() external {
        require(userAmounts[msg.sender] > 0, "User Not Found");
        uint256 ETHAmount = userAmounts[msg.sender];
        userAmounts[msg.sender] = 0;
        (bool sent, bytes memory data) = address(this).call{value: ETHAmount}(
            ""
        );
        require(sent, "Ether Transfer failed!");
    }

    function ETHBalance() external view returns (uint256) {
        return userAmounts[msg.sender];
    }

    fallback() payable external {}
}
