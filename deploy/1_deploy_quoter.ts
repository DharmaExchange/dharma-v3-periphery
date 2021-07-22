import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const addresses = {
  factory: '0xD4CE7e27B3c7b8F4883e1b4De174a91D90099331',
  wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy('Quoter', {
    from: deployer,
    args: [addresses.factory, addresses.wbnb],
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ['Quoter']
