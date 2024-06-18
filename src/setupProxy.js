const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.yawaapp.com.ng',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api prefix if your backend doesn't use it
      },
    })
  );
};
