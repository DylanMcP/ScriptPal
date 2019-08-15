module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
           blkchain: {
            host: "localhost",
            port: 8543,
            network_id: "58343",
            gas: 4700000
          }
     }
};
