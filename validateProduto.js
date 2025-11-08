module.exports = (req, res, next) => {
  const { nome, preco } = req.body;
  if (!nome || preco === undefined) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, preco' });
  }
  next();
};


