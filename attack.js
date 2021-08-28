/*
require nodejs, ethers, bsc node (quiknode/ankr http)
simple bot for cryptozoon auto attack
support multiple ZOON, target enemy

Donation: 0x6b133b2d63122b141736327F9b5b9F8129117566
Telegram: @MRFCiki
Github: MrFatoni

klo w run pake: while true; do node attack.js; sleep 10m; done
*/

const delay = require('delay');
var ethers = require("ethers");

var add = 'https://apis.ankr.com/x/x/binance/full/main' //GANTI HTTP NODE, REKOM PAKE ANKR
var walletpk = 'PRIVATEKEY'; //ISI PRIVATEKEY

// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB
// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB



var customHttpProvider = new ethers.providers.JsonRpcProvider(add);
let wallet = new ethers.Wallet(walletpk, customHttpProvider);
var to = '0xf70c08a428f300c7f3e3f09217211d21f7a50410'; //wallet battle, jangan diganti
const ABI = [{"inputs":[{"internalType":"address","name":"_manager","type":"address"},{"internalType":"contract IZoonERC20","name":"_zoonerToken","type":"address"},{"internalType":"contract CryptoZooNFT","name":"_zoonerNFT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"enum Battle.MonsterLevel","name":"monster","type":"uint8"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"enum Battle.BattleResult","name":"result","type":"uint8"}],"name":"BattleEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"enum Battle.MonsterLevel","name":"_monster","type":"uint8"}],"name":"battle","outputs":[{"internalType":"enum Battle.BattleResult","name":"result","type":"uint8"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"battleSessions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"battleTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"contract ManagerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_zoonerERC20","type":"address"}],"name":"setERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_config","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_zoonerNFT","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zoonerNFT","outputs":[{"internalType":"contract CryptoZooNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zoonerToken","outputs":[{"internalType":"contract IZoonERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];



// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB
// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB


async function gelud(zoanID,vsMonsterID) {
  try {

let iface = new ethers.utils.Interface(ABI);
const txdata = iface.encodeFunctionData("battle", [zoanID, vsMonsterID]);

  const tx = {
    to,
    value: ethers.utils.parseEther("0".toString()),
    data: txdata,
    gasPrice: ethers.utils.parseUnits('6', 'gwei'),
  };


    const recipt = await wallet.sendTransaction(tx);
    console.log(`${zoanID} SUCCESS ATTACK tx: ${recipt.hash}`);

  } catch (err) {
     // console.log(err);
    console.error(`SKIP, ${zoanID} BELOM SIAP`); //ERROR: cannot estimate gas; brarti gada jatah attack (makanya jangan pake wallet yg banyak balance)

  }
}


//random number 0 to 3, for random target

var arr = [];
for (var i = 0, l = 3; i < l; i++) {
    arr.push(Math.round(Math.random() * l))
}


(async () => {

//gelud(zoanid,vsMonsterID);
//const vsMonsterID = 0; // 0 win 70%, 1 win 60% dst..




gelud(1337,1); // contoh monster 1337 attack enemy 1 (60% wr)
await delay(10000); //delay 10detik biar transaksi ga underprice / gagal
gelud(9090, arr[0]); // contoh monster 9090 attack enemy random



// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB
// JANGAN PAKAI WALLET LEBIH DARI 0.01 BNB
})();
