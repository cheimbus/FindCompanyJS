const express = require("express");
const router = express.Router();
const posts = require("./post/posts");
const post_modify = require("./post/post-modify");
const post_delete = require("./post/post-delete");
const post_detail = require("./post/post-detail");
const post_search = require("./post/post-search");
const user_support = require("./user/user-apply");

router.get("/posts", posts.getAllCompany);
router.patch("/post-modify/:id", post_modify.modify);
router.delete("/post-delete/:id", post_delete.delete);
router.get("/post-detail/:id", post_detail.companyDetail);
router.get("/search", post_search.search);

router.post("/user-apply/:id/company/:employerid", user_support.apply);

module.exports = router;