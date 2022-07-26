require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stomach deny soap protect just problem equal gift'; 
let testAccounts = [
"0x7c0f6fad2311409fe7502a46a94c73a406556dc9cb8a6b3d618031bcfbf1c152",
"0xb3c2651841a271e3385c3157661c5f74eb60e66169b0fc65efad9e31e0b2ea9e",
"0xbaa54504303b7fa0702310a66fc16f90a72ee6bccec584c3671da52f626fee4b",
"0x64eaf3595e333abdd0e869b36022dec3e3e3791b9f15746cdb89cfe06b168603",
"0x0ef58749405531a22a4a45eb0d452955e6c9ed104ec8494c335153b768824296",
"0xff6c6daa09d87db32457c184b841cf49ca3e340c771732370b988ba897a98e16",
"0x2682bce984c1f3d6d894c72f6eba1dc857080a82787ece913e3fa55c3f2a2d4b",
"0x5c135beeb3e68c1a50de96bbee1d6b874e8cf6b9c598b242b29b3d0b65ebffb4",
"0x1d4dae2a0c27c29b008d1f82b1213453820a5384fc6a608e28fd9f440caa6fa7",
"0xbcb14e1bf63e22a7dffdd6ec2b916ef8dfb65b2b6cd426c3f42e0b61de8dbfb2"
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
            version: '^0.8.0'
        }
    }
};

