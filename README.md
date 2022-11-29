![box-img-readme](https://raw.githubusercontent.com/Montoya/tx-simulation-with-ganache-snap/master/box-img-readme.jpg)

# @Montoya/tx-simulation-with-ganache-snap

This is an example project using [@metamask/snap-box](https://github.com/MetaMask/snap-box). It uses the [tx simulation snap](https://github.com/FrederikBolding/tx-simulation-snap) to showcase how a transaction insights snap can be tested in the MetaMask Snaps Truffle Box.

# How to Use

You can use this repository as-is or modify it to make your own snap. Make sure to follow the steps in the [@MetaMask/snap-box README](https://github.com/MetaMask/snap-box#readme) (Pre-requisites and Setup): 

- [ ] Have the right versions of Node and Yarn installed
- [ ] Install MetaMask Flask 
- [ ] Install Truffle and Ganache globally 
- [ ] Copy the `.env.dist` file in the Truffle folder to a new file `.env` and input your Flask SRP and Infura API Key 

If you do all of this correctly, when you setup and run the project from the main directory with `yarn install && yarn start` you should see the 3 workspaces run without errors (site, snap, truffle). Then you can install and test this snap from [localhost:8000](http://localhost:8000): 

1. Install the snap in MetaMask Flask
2. Set the network in Flask to Localhost 8545 (this is the default Ganache port)
3. Try the contract interaction buttons and you should see the transaction insights tab from the installed snap 

# Please Note

This project includes some patches in `/tree/main/.yarn/patches` to make Ganache work under Secure EcmaScript (required by Snaps). 