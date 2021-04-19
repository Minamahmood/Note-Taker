const express = require("express");

const router = express.Router();
// Read All
router.get("/", (req, res, next) => {});

// Read One
router.get("/:id", (req, res, next) => {});

// Create One
router.post("/", (req, res, next) => {});
// Update One
router.put("/:id", (req, res, next) => {});

// Delete One
router.delete("/:id", (req, res, next) => {});

module.exports = router;