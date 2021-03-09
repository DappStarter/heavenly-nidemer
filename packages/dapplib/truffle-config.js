require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember snake good clock flock tomorrow'; 
let testAccounts = [
"0x250ff2efd5b6444ee8f1cad3effe0677e61496a0ddbbdacc3d9a1616204690ff",
"0xda661caa287ea01ee669b8801a5795f07bd36c460ed2498925465c087d29f00f",
"0x27cfabcd253e952fcac5c31374bf8093d5042fc6491a91e179bd1f1639233dd6",
"0x012e3591ab8b3b09c1c318670d80db3a35d22e5901144c8bced496d85fba8fdf",
"0xe547689df5bbb56486645903822ef89cd2845cf74a7db6cb1bfead3baf3d657b",
"0xcd0f80b391cb81dabc133315652a176c4fef879c07d5f0f83f47a059d0ceec42",
"0x2aa308a05adfac487dde9e36b54ec32b3f96daa773173d23272ed52cce0bccfd",
"0xdd7a6eeb1cb7d1e8ea561aa57b47947a5d07c26afae6aca2e3a1625bc1e49217",
"0x52c053f8ea0b7db4d8d83d42f92dd1a0477ee3b6fd8fefdf345f062cd4d4e2f4",
"0x275a2436e4865726b46183a2469054d4c483c9a0115557cbd4e0e5eeadfc1b3a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
