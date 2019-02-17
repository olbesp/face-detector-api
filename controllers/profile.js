module.exports = {
  handleProfileGet: async (req, res, db) => {
    const { id } = req.params;
    try {
      const user = await db.select('*').from('users').where({ id });
      if (user.length > 0) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    } catch (error) {
      res.status(400).json('error getting user');
    }
  }
};
