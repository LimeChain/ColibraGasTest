const etherlime = require('etherlime');
const ethers = require('ethers');

[0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c, 0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c]
[0000000, 0000001, 0000001, 0000000, 0000000, 0000000, 0000000]

['0xf3881e6b4939b6347d6dc68ff89dff1e1e0536facef7d33427dfe437fc05ad3627c6510365960e7856d9ec1dc3d3abc32e31db4e1535da9254e3b12757eb2b431c']
0x12312313131313131

const claimReceiver = '0x760bf27cd45036a6c486802d30b5d90cffbe31fe'
const claimId = '0xB63dF2068d209F8Ff3925C4c9DbBAbfD31301825'
const ipfsHash = '0xf73e1a205be00ca3d9ebe2b9db9e376e9afd765f7571f912d1f99766b15f0908';
const operatorSignature = '0x1cb03e3e3dee9259bbbd2c8f1c4c5ae8c47e7fbfa3cec37956aee308bb8d53d6572816b4bb1223a8fcde2c8f30ea1e62c98aa30362da15168d9834167b5c75fc1c';
const stakes = [operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature]
const votes = 9
const voters = [operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature, operatorSignature]
const tokens = 61000000000

const ColibraContrat = require("../build/Colibra.json");
const ECTools = require("../build/ECTools.json");
const defaultConfigs = {
	gasPrice: 61000000000,
	gasLimit: 4700000
}

const deploy = async (network, secret) => {

	const deployer = new etherlime.EtherlimeGanacheDeployer('0x7ab741b57e8d94dd7e1a29055646bafde7010f38a900f55bbd7647880faa6ee8', 8545, defaultConfigs);

	const ECToolsWrapper = await deployer.deploy(ECTools);
	const result = await deployer.deploy(ColibraContrat, { ECTools: ECToolsWrapper.contractAddress }, claimReceiver, claimId, ipfsHash, operatorSignature, stakes, votes, voters, tokens);

}

module.exports = {
	deploy
}