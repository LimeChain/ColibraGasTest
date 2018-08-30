pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import "./ECTools.sol";

contract Colibra {
    
    event ClaimProcessed(address receiver, bytes32 _claimId, address operator, bool resolution, uint tokens);
    
    constructor(address receiver, bytes32 _claimId, bytes32 _ipfsHash, bytes _operatorSignature, bytes[] _signedStakes, uint16 _votes, bytes[] _votersSign, uint tokens) {
        require(receiver != address(0x0));
        address operator = ECTools.prefixedRecover(_ipfsHash, _operatorSignature);
        require(operator != address(0x0));
        address stakeSigner;
        for(uint i = 0; i < _signedStakes.length; i++) {
            stakeSigner = ECTools.prefixedRecover(_ipfsHash, _signedStakes[i]);
            require(stakeSigner != address(0x0));
        }

        address voter;
        for(uint k = 0; k < _votersSign.length; k++) {
            voter = ECTools.prefixedRecover(_ipfsHash, _votersSign[k]);
            require(voter != address(0x0));
        }
        bool result = ((_votes & 1) == 1);

        emit ClaimProcessed(receiver, _claimId, operator, result, tokens);
    }
}