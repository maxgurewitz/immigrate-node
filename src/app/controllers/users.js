module.exports.create = function(req, res) { 
  res.sendStatus(200);
};

module.exports.get = function(req, res) {
  res.json({ foo: 'baz' });
};
