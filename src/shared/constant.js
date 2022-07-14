module.exports = {
    FAQ_SUBTITLE_DATA: [
        'Rewards and Payouts',
        'How to Set Up ASIC devices',
        'How does Mining4pros mining pool work?',
        'Wallets and Wallet Software',
    ],
    FAQ_Title_DATA: [
        'How does PPLNS pool reward system work?',
        'How to withdraw coins?',
        'Pending balance - what does that mean?',
        'How to Setup A10, A11 or Linzhi Phoenix Miner?',
        'How to Setup Z9, Z11 or Z15?',
        'How does the mining pool work?',
        'What is a block?',
        'What is a share?',
        'What does share difficulty mean?',
        'How can I calculate the expected profit?',
        'What is Luck?',
        'How to create a wallet for crypto coins?',
        'Can i mine to an exchange wallet?'
    ],
    FAQ_Body_Content: [
        "The payout system used in Mining4Pros pool uses the reward system 'Pay Per Last N Shares' - PPLNS. This system checks how many shares you've sent from the last N shares of the pool and makes payouts based on the value. Your share in each round is shown on your personal statistic site.",
        "Payouts are processed automatically every hour. To get the payout you need to reach the minimum amount in each pool. The minimum payout value is shown on the main page of each pool. It is not possible to manually change this value. Any rewards accumulated by a given address may only be paid to that particular address.",
        "Every block found by the pool needs to be confirmed before the pool is rewarded. For that process we wait a defined number of follow up blocks (120 for ETH for example). After the block is confirmed we move the balance to unpaid balance.",
        "Mining pools get solutions from all the connected miners, and if one of those numerous solutions appears to be a proper one, the pool gets a reward for the created block. This reward is shared proportionally to the efforts applied by the miners and forwarded to their wallets.",
        "A block is a record of all transactions in a given time frame. New transactions are being processed by miners into new blocks which are added to the end of the blockchain.",
        "A share is a possible solution for an upcoming block.",
        "Share difficulty is the value at which we accept the incoming shares. Compared to the Network difficulty, which is the value at which the Ethereum network accepts your share as a valid solution for the next block.",
        "Mining is probabilistic in nature, if you find a block earlier than you statistically should on average you are lucky if it takes longer, you are unlucky.", 
        "In a perfect World you would find a block on 100% luck value. Less then 100% means you were lucky. More then 100% means you were unlucky.",
        "Every coin has an official wallet with complete blockchain. It could take a lot of disc space on your computer. You could also use a wallet address generated on a crypto exchange. Every coin has also a help page 'How to start' -> usually it has a link to an official wallet and/or crypto exchange that supports this coin.",
        "Yes. You could mine to an exchange wallet. Mining4Pros work fine with exchange wallet addresses.",
    ], 
    PoolInfoLabel : [
        'Minimum Payout', 
        'Block Reward', 
        'Pool Fee'
    ],
    PoolCoinInfoLabel : [
        'Pool Hashrate', 
        'Miners Online', 
        'Block Height', 
        'Network Hashrate', 
        'Network Difficulty', 
        'Total Paid'],
    ServerLabel : [
        'Mining Servers Europe', 
        'Mining Servers USA'
    ],
    BlockReward : [
        '2ETH + Tx Fee + MEV', 
        '',
    ],
    DifferLabel : [
        'Difficulty Variable',
        'Server in progress...',
    ],
    eth : [
        'https://geth.ethereum.org/docs/install-and-build/installing-geth',
        'https://www.myetherwallet.com',
        'binance.com',
        'https://binance.com/',
        'Phoenixminer here',
        'https://mining4pros.com/app/Setup.zip',
        'Miningrigrentals.com',
        'https://www.miningrigrentals.com/?ref=41992',
        'Nicehash.com',
        'https://www.nicehash.com/',

    ],
    zec : [
        'https://github.com/ZcashFoundation/zecwallet',
        'https://github.com/ZcashFoundation/zecwallet',
        'https://z.cash/wallets/',
        'https://z.cash/wallets/',
        'binance.com',
        'https://binance.com/',
        'Nicehash.com:',
        'https://nicehash.com/',
        'mining4pros.com',
        'http://mining4pros.com/'
    ],
    zen : [
        'https://github.com/HorizenOfficial/zen',
        'https://www.horizen.io/wallets/',
        'binance.com',
        'https://binance.com/',
        'Nicehash.com:',
        'https://nicehash.com/',
        'mining4pros.com',
        'http://mining4pros.com/'
    ],
}