//https://eth-ropsten.alchemyapi.io/v2/f3fleX8-USBVPQ03cDlx-aTKbo6XRFiO

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/f3fleX8-USBVPQ03cDlx-aTKbo6XRFiO',
      accounts: [ '46be7c66514b63eccc4ebd99711e5c4c3a98a9041626a82a3bc64653aa2940c9' ]
    }
  }
}