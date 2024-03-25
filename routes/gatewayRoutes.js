const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/platformlistpublic", async (req, res) => {
  console.log("request arrived on gateway");
  try {
    console.log("before call");
    url = `${process.env.PUBLICDATA_URL}/platformlistpublic`;
    console.log("voici axios.default : ", axios.default);
    const response = await axios.default.get(url, {});
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(
      "Error detected on gateway whith 'platformlistpublic' route ",
      error
    );
    res.status(500).send({
      errorm:
        "Erreur lors de la récupération de la liste des plateformes publiques",
      error: error,
    });
  }
});

module.exports = router;
