const homeController = {};

homeController.render = (req, res) => {
  res.render('home', {
    isAuth: req.isAuthenticated(),
    username: req.isAuthenticated() && req.openid.user.nickname
  });
};

export { homeController };
