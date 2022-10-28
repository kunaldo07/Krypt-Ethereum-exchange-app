//https://eth-goerli.g.alchemy.com/v2/SeEw-z6CpqtLqIF9rRzj_lplWcy5Hepe

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SeEw-z6CpqtLqIF9rRzj_lplWcy5Hepe",
      accounts: [
        "afcd03c0ce67f7a9dc7f3eceae8074322381bcddaca68a6cf437df8549e118a8",
      ],
    },
  },
};
