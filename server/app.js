require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./controllers/index");

const models = require("./models/index");
models.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("DB연결");
  })
  .catch((err) => {
    console.log("DB연결 실패");
    console.log(err);
  });

// 미들웨어
app.use(express.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE", "PATCH"]
}));

// 라우터
app.use("/", indexRouter);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`🐥서버가 ${app.get("port")}로 열렸습니다!`)
})

module.exports = app;