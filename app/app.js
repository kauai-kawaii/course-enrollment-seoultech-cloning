var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const { sequelize } = require("./model/database");

const {
  StudentIdentities,
  ProfessorInformation,
  Basket,
  SubjectInformation,
  MajorInformation,
} = require("./model/database/relations");

sequelize
  .sync({ force: false })
  .then(async () => {
    try {
      console.log("데이터베이스 연결됨.");
      const basketsWithSubjectInfo = await StudentIdentities.findAll({
        attributes: ["student_number"],
        include: [
          {
            model: MajorInformation,
            attributes: ["major_name"],
            //through: { attributes: [] }, // 중간 테이블의 추가 속성을 포함하지 않도록 설정
          },
        ],
      });

      basketsWithSubjectInfo.forEach((basket) => {
        console.log(basket.toJSON());
      });

      await sequelize.close();
      console.log("데이터베이스 연결 종료");
    } catch (error) {
      console.error("데이터 조회 실패:", error);
    }
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패:", err);
  });

sequelize
  .sync()
  .then(async () => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
