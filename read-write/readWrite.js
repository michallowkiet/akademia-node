const fs = require("fs");

const saveData = (filePath, directoryName, overwrite) => {
  if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const dataJson = JSON.parse(data);
      let content = "";
      dataJson.forEach((element) => {
        content += `
          Name: ${element.name.split(" ")[0]}
          Surname: ${element.name.split(" ")[1]}
          Street: ${element.address.street}
          Zip Code: ${element.address.zipcode}
          City: ${element.address.city}
          Phone: ${element.phone}
        `;

        const fileName = `${__dirname}/${directoryName}/${element.username}.txt`;

        if (overwrite) {
          fs.writeFile(fileName, content, (err) => {
            if (err) console.log(err);
          });
        } else {
          fs.writeFile(fileName, content, { flag: "a" }, (err) => {
            if (err) console.log(err);
          });
        }

        content = "";
      });
    }
  });
};

module.exports = { saveData };
