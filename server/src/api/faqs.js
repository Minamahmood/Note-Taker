const express = require("express");
const monk = router("monk");
const joi = require("@hapi/joi");
const db = monk(process.env.MONGO_URI);
const faqs = db.get("faqs");

const schema = joi.object({
    question: joi.string().trim().required(),
    answer: joi.string().trim().required(),
    video_url: joi.string().uri(),
});

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
router.get("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const item = await faqs.findOne({
            _id: id,
        });
        if (!item) return next();

        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// Create One
router.post("/", async(req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body);
        const inserted = await faqs.insert(value);
        res.json(inserted);
        req.json(value);
    } catch (error) {
        next(error);
    }
});
// Update One
router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const value = await schema.validateAsync(req.body);
        const item = await faqs.findOne({
            _id: id,
        });
        if (!item) return next();
        await faqs.update({
            _id: id,
        }, {
            $set: value,
        });
        res.json(value);
    } catch (error) {
        next(error);
    }
});

// Delete One
router.delete("/:id", (req, res, next) => {
    res.json({
        message: "Hello Delete One",
    });
});

module.exports = router;