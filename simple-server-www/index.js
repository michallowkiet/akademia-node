module.exports = start = () => {
  const http = require("http");
  const fs = require("fs");

  const server = http.createServer((req, res) => {
    fs.readFile(`${__dirname}/www/index.html`, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        return res.end(data);
      }
    });
  });

  server.listen(3108, () => {
    console.log("Server started on port 3108");
  });
};
