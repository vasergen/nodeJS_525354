const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "tmp"));
  },
  filename: function (req, file, cb) {
    cb(null, Math.random() + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1,
  },
});

app.post("/upload", upload.single("image"), async (req, res, next) => {
  console.log("file", req.file);
  const { filename } = req.file;

  try {
    const tmpPath = path.resolve(__dirname, "tmp", filename);
    const newPath = path.resolve(__dirname, "public", filename);
    await fs.rename(tmpPath, newPath);
    return res.json({
      ok: true,
    });
  } catch (error) {
    console.error("error while moving file to public", error);
    return res.status(500).json({
      message: "Internal ser ver error",
    });
  }
});

app.post("/upload2", upload.array("image"), async (req, res, next) => {
  try {
    console.log("files", req.files);

    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("app is listening on port 3001");
});
