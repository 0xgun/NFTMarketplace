module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io', 'gun.infura-ipfs.io'],
  },
  env: {
    API_URL: process.env.API_URL,
    API: process.env.API,
    INFURA_KEY: process.env.INFURA_KEY,
    INFURA_API: process.env.INFURA_API,
    ALCHEMY_RPC_MUMBAI: process.env.ALCHEMY_RPC_MUMBAI,
  },
};
