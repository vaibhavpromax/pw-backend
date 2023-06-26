const express = require("express");
const {
  createListing,
  bulkCreateListing,
  getListings,
} = require("../controllers/company.controller");

const router = express.Router();

router.post("/create", createListing);
router.get("/bulk-create", bulkCreateListing);
router.post("/fetch", getListings);

module.exports = router;
