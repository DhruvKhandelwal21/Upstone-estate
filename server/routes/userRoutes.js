const {
  createUser,
  getAllUsers,
  getUserInfoByID,
} = require("../controllers/user.controller.js");
const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserInfoByID);

module.exports = router;
