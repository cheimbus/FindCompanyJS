require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./controllers/index");

/**
 * @description @models - 시퀄라이즈 모델 전체 매핑을 위해 sync()메서드 사용
 */
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

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE", "PATCH"],
  })
);
/**
 * @description @indexRouter - 라우터를 한곳에 정리하였습니다.
 */
app.use("/", indexRouter);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`🐥서버가 ${app.get("port")}로 열렸습니다!`);
});

module.exports = app;
