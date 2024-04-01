const express = require("express");
const router = express.Router();
const axios = require("axios");

// public data service
router.get("/platformlistpublic", async (req, res) => {
  console.log("platformlistpublic request arrived on gateway");
  try {
    console.log("before call");
    url = `${process.env.PUBLICDATA_URL}/platformlistpublic`;
    const response = await axios.default.get(url, {});
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(
      "Error detected on gateway whith 'platformlistpublic' route ",
      error
    );
    res.status(500).send({
      errorm: "Error detected on gateway whith 'platformlistpublic' route",
      error: error,
    });
  }
});

// auth service

router.post("/register", async (req, res) => {
  console.log("register request arrived on gateway");
  try {
    console.log("before call", url);
    url = `${process.env.AUTHSERVICE_URL}/register`;
    const response = await axios.default.post(url, req.body);
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error detected on gateway whith 'register' route ", error);
    res.status(500).send({
      errorm: "Error detected on gateway whith 'register' route",
      error: error,
    });
  }
});

router.post("/login", async (req, res) => {
  console.log("login request arrived on gateway ");
  try {
    console.log("before call", url);
    url = `${process.env.AUTHSERVICE_URL}/login`;
    const response = await axios.default.post(url, req.body);
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error detected on gateway whith 'login' route ", error);
    res.status(500).send({
      errorm: "Error detected on gateway whith 'login' route",
      error: error,
    });
  }
});

router.get("/isloggedin", async (req, res) => {
  console.log("isloggedin request arrived on gateway");
  try {
    console.log("before call", url);
    url = `${process.env.AUTHSERVICE_URL}/isloggedin`;
    const response = await axios.default.get(url);
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error detected on gateway whith 'isloggedin' route ", error);
    res.status(500).send({
      errorm: "Error detected on gateway whith 'isloggedin' route",
      error: error,
    });
  }
});

router.get("/logout", async (req, res) => {
  console.log("logout request arrived on gateway");
  try {
    console.log("before call", url);
    url = `${process.env.AUTHSERVICE_URL}/logout`;
    const response = await axios.default.get(url);
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error("Error detected on gateway whith 'logout' route ", error);
    res.status(500).send({
      errorm: "Error detected on gateway whith 'logout' route",
      error: error,
    });
  }
});

// Bitpanda :
router.get("/bitpandagetdata", async (req, res) => {
  console.log("bitpanda getdata request arrived on gateway");
  try {
    console.log("before call", url);
    url = `${process.env.BITPANDA_URL}/getdata`;
    const response = await axios.default.get(url);
    console.log("after call");
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(
      "Error detected on gateway whith 'bitpanda getdata' route ",
      error
    );
    res.status(500).send({
      errorm: "Error detected on gateway whith 'bitpanda getdata' route",
      error: error,
    });
  }
});

module.exports = router;
