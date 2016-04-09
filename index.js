module.exports = function (app) {
  app.get('/health', function (req, res) {
    return res.send(200);
  })
}