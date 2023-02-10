const bcrypt = require("bcrypt");
const { User } = require("../db/models");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  req.session.userId = user.id;
  req.session.save(() => {
    res.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
    });
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const passCheck = await bcrypt.compare(password, user.password);
  if (passCheck) {
    req.session.userId = user.id;
    req.session.save(() => {
      res.json({
        success: true,
        user: { id: user.id, email: user.email, name: user.name },
      });
    });
  } else {
    res.json({ success: false });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("skeleton");
    res.json({ success: true });
  });
};
