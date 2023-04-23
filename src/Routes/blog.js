const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../Controllers/blog");

// Post
router.post(
  "/post",
  [
    body("title", "Inputan title tidak sesuai").isLength({ min: 5 }),
    body("body", "Inputan body tidak sesuai").isLength({ min: 5 }),
  ],
  blogController.createBlogPost
);

// Get
router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);

// Put
router.put(
  "/post/:postId",
  [
    body("title", "Inputan title tidak sesuai").isLength({ min: 5 }),
    body("body", "Inputan body tidak sesuai").isLength({ min: 5 }),
  ],
  blogController.updateBlogPost
);

// Delete
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
