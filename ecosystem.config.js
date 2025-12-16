module.exports = {
  apps: [
    {
      name: 'base2brand',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001 -H 0.0.0.0',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
