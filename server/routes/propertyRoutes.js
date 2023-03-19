const {createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,} = require('../controllers/property.controller.js')

const router = require('express').Router();

router.get("/",getAllProperties);
router.get("/:id",getPropertyDetail);
router.post("/",createProperty);
router.patch("/:id",updateProperty);
router.delete("/:id",deleteProperty);
module.exports = router