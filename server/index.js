const express = require("express");
const app = express();
const db = require("./config/db.config");
const cors = require("cors");
const { redirect } = require("express/lib/response");
const PORT = 3002;

let multer = require("multer");
const fs = require("fs");
const { changeUser } = require("./config/db.config");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { car_model, car_year } = req.body;
    console.log(req.body);
    const dir = `./public/images/${car_model}_${car_year}`;
    fs.exists(dir, (exist) => {
      if (!exist) {
        return fs.mkdir(dir, (error) => cb(error, dir));
      }
      return cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// Route to get one post
app.post("/api/signin", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  // console.log('signin', name, password);

  db.query(
    `SELECT * FROM user where name = '${name}' AND password = '${password}' `,
    function (err, result, fields) {
      if (err) {
        console.log(err);
        // db.end();
        return res.status(500).send({ result: "Server error" });
      } else {
        console.log("result", result.length);
        if (result.length == 0) {
          console.log("failure");
          res.status(403).send({ result: "Server error" });
        } else {
          console.log("success");
          res.json(result);
        }
        // res.send(result);
        // return "success";
      }
    }
  );
});

app.post("/api/signup", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  console.log(name, password);

  if (password == confirmpassword) {
    db.query(
      "INSERT INTO user (name, email, password, phone) VALUES (?, ?, ?, ?)",
      [name, email, password, phone],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  } else {
    res.send("Invalid User");
  }
});

app.post("/vehicle/add", upload.single('file'), (req, res) => {
  const car_model = req.body.car_model; //check this
  const car_year = req.body.car_year;
  const car_make = req.body.car_make;
  const username = req.body.username;
  const phonenumber = req.body.phonenumber;
  const price = req.body.price;
  const img = req.body.img;
  
  
  try {
      db.query(
        "INSERT INTO addcar (car_model, car_year, car_make, username, phonenumber, price, img) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [
          car_model,
          car_year,
          car_make,
          username,
          phonenumber,
          price,
          "images/" + img,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    }
   catch (err) {
    res.status(500).send(err);
  }
});

app.get("/vehicle", (req, res) => {
  //Select * from addcar
  db.query(`SELECT * FROM addcar`, function (err, tempArray) {
    if (err) {
      console.log(err);
      // db.end();
      return res.status(500).send({ result: "Server error" });
    } else {
      console.log("success");
      res.send({ vehicleList: tempArray });
    }
  });
});

app.get("/vehicle/:id", (req, res) => {
  var id = req.params.id;
  //Select * from addcar
  var sql = "SELECT * FROM cardetails where car_id=?";
  db.query(sql, [id], function (err, tempArray) {
    if (err) {
      console.log(err);
      // db.end();
      return res.status(500).send({ result: "Server error" });
    } else {
      console.log("success");
      res.send({ vehicleList: tempArray });
    }
  });
});

app.patch("/vehicle/:id", (req, res, next) => {
  var id = req.params.id;
  var price = req.body.price;
  //Select * from addcar
  var sql = `UPDATE cardetails SET price=${price} where car_id=${id}`;
  db.query(sql, [id], function (err, tempArray) {
    if (err) {
      console.log(err);
      // db.end();
      return res.status(500).send({ result: "Server error" });
    } else {
      console.log("success");
      res.send({ vehicleList: tempArray });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
