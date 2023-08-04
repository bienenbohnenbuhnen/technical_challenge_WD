const router = require("express").Router();

const mongoose = require("mongoose");

const Phone = require("../models/Phone.model");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((allPhones) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Project document has a `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Phone.findById(phoneId)
    .then((phone) => res.status(200).json(phone))
    .catch((error) => res.json(error));
});

module.exports = router;
