const express = require("express");
const router = express.Router();

const {createItem, checkitem}=require("../controller/create.controller");

router.post("/create-name", createItem);

router.post("/check", checkitem);


module.exports = router;
