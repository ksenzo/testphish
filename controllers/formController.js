const { runSelenium } = require('../public/js/browser');

exports.handleForm = async (req, res) => {
  const data = req.body;

  try {
    await runSelenium(data);
    res.send("OK: данные обработаны");
  } catch (e) {
    console.error(e);
    res.status(500).send("Ошибка");
  }
};
