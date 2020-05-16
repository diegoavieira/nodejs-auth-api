const homeController = {};

homeController.render = (req, res) => {
  res.render('home', {
    isAuth: req.isAuthenticated(),
    username: req.isAuthenticated() && req.openid.user.nickname,
    accessToken: req.isAuthenticated() && req.appSession.openidTokens.access_token,
    idToken: req.isAuthenticated() && req.appSession.openidTokens.id_token
  });
};

export { homeController };
