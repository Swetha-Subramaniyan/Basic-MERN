const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createItem = async (req, res) => {
  console.log("Post Function");
  try {
    console.log("Request body from crud Controller", req.body);

    const data = await prisma.Crud.create({
      data: {
        name: req.body.name,
      },
    });
    res.json({  message: "Posted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const checkitem = async (req, res) => {
  try {
    console.log("Request body from checkkkkkk Controller", req.body);
    res.json({ data:req.body.name, message: "Posted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};


module.exports ={
    createItem,checkitem
}