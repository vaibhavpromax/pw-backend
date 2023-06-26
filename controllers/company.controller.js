const db = require("../db/models");
const { Op } = require("sequelize");

const logger = require("../utils/logger");
const {
  serverErrorResponse,
  successResponse,
  notFoundResponse,
} = require("../utils/response");
const { dummyData } = require("../dummyData");

const Company = db.Company;

const createListing = async (req, res) => {
  const {
    stipend_min,
    stipend_max,
    location,
    name,
    number_of_positions,
    total_applicants,
    duration,
    experience,
    timing,
    expiry_date,
    date_posted,
    skills,
    job_type,
    company_status,
    position,
    company_logo,
    about_us,
    requie,
    respo,
  } = req.body;
  try {
    const listing = await Company.create({
      stipend_min,
      stipend_max,
      location,
      name,
      number_of_positions,
      total_applicants,
      duration,
      experience,
      timing,
      expiry_date,
      date_posted,
      skills,
      job_type,
      company_status,
      position,
      company_logo,
      about_us,
      requie,
      respo,
    });

    return successResponse(res, "Listing added", listing);
  } catch (err) {
    logger.error("Error while creating listing", err);
    return serverErrorResponse(res, "Error while creating listing");
  }
};

const bulkCreateListing = async (req, res) => {
  try {
    const listing = await Company.bulkCreate(dummyData);
    return successResponse(res, "Listing added", listing);
  } catch (err) {
    logger.error("Error while creating listing", err);
    return serverErrorResponse(res, "Error while creating listing");
  }
};

const getListings = async (req, res) => {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  const {
    category,
    skill,
    timing,
    type,
    locations,
    duration_start,
    duration_end,
    stipend_start,
    stipend_end,
    name,
    applicants_start,
    applicants_end,
    sort,
  } = req.body;

  let options = { where: {} };

  if (sort === "new") options.order = [["expiry_date", "DESC"]];
  if (category) options.where.company_status = { [Op.in]: category };
  if (locations) options.where.location = { [Op.in]: locations };
  if (stipend_end && stipend_start) {
    if (stipend_end == 40001) {
      // [Op.or]: {
      //   options.where.stipend_min = { [Op.gte]: stipend_start };
      //   options.where.stipend_max = { [Op.lte]: stipend_end };
      //
      // options.where.stipend_min = {
      //   [Op.gte]: stipend_start,
      // };
      options.where.stipend_max = {
        [Op.or]: {
          [Op.gte]: stipend_end,
        },
      };
    } else {
      options.where.stipend_min = { [Op.gte]: stipend_start };
      options.where.stipend_max = { [Op.lte]: stipend_end };
    }
  }
  if (applicants_start && applicants_end) {
    if (applicants_end == 251)
      options.where.total_applicants = {
        [Op.or]: {
          // [Op.between]: [applicants_start, applicants_end],
          [Op.gte]: applicants_start,
        },
      };
    else
      options.where.total_applicants = {
        [Op.between]: [applicants_start, applicants_end],
      };
  }
  if (duration_start && duration_end) {
    if (duration_end == 7)
      options.where.duration = {
        [Op.gte]: duration_start,
      };
    else
      options.where.duration = {
        $between: [duration_start, duration_end],
      };
  }
  if (timing) options.where.timing = timing;
  if (type) options.where.job_type = type;
  if (name) options.where.name = name;
  // if (skill) {
  //   // options.where.skills = {
  //   //   [Op.eq]: [
  //   //     db.sequelize.literal(
  //   //       `JSON_CONTAINS(skills, '${JSON.stringify(skill)}')`
  //   //     ),
  //   //   ],
  //   // };

  //   // options.where.skills = db.sequelize.literal(
  //   //   `JSON_CONTAINS(skills, '${JSON.stringify(skill)}')`
  //   // );

  //   options.having = db.sequelize.literal(
  //     `JSON_CONTAINS(skills, '${JSON.stringify(skill)}')`
  //   );
  // }

  // pagination
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 10;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 10) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }

  options.limit = size;
  options.offset = page * size;
  console.log(options);
  try {
    let listings = {};
    if (skill) {
      listings.count = 20;
      // if skill are coming in filter than use this query
      listings.rows = await Company.findAll({
        ...options,
        having: db.sequelize.literal(
          `JSON_CONTAINS(skills, '${JSON.stringify(skill)}')`
        ),
      });
    } else listings = await Company.findAndCountAll(options);
    return successResponse(res, "Fetched count successfully", listings);
  } catch (error) {
    logger.error("Error while fetchign", error);
    return serverErrorResponse(res, "Error while fetching");
  }
};

module.exports = { createListing, bulkCreateListing, getListings };
