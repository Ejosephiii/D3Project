const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.igdb.com/v4", // Make sure this is the correct base URL for IGDB
      changeOrigin: true,
    })
  );
};
