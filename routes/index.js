
const router = require("express").Router();
const listing_routes = require('./listing.routes')

router.use("/listing", listing_routes);

module.exports = router;
