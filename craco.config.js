module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Any custom middleware setup can go here
        return middlewares;
      },
    },
  };