const express = require("express");
const monk = router("monk");

const db = monk(process.env.MONGO_URI);
const faqs = db.get("faqs");
const router = express.Router();
// READ All
router.get("/", async(req, res, next) => {
    try {
        const items = await faqs.find({});
    } catch (error) {
        next(error);
    }
    res.json({
        message: "Hello READ ALL",
    });
});

// Read One
router.get("/:id", (req, res, next) => {
    res.json({
        message: "Hello READ One",
    });
});

// Create One
router.post("/", (req, res, next) => {
    res.json({
        message: "Hello Create One",
    });
});
// Update One
router.put("/:id", (req, res, next) => {
    res.json({
        message: "Hello Update One",
    });
});

// Delete One
router.delete("/:id", (req, res, next) => {
    res.json({
        message: "Hello Delete One",
    });
});

module.exports = router;