module.exports = function (req, res, next) {
  const now = new Date();
  const day = now.getDay(); // 0 (Sun) to 6 (Sat)
  const hour = now.getHours(); // 0 to 23

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Working hours
  } else {
    res.send(
      "<h1>Sorry, the website is only available during working hours (Mon-Fri, 9am-5pm).</h1>"
    );
  }
};
