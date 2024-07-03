import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type in your url", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFileSync("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The url has been saved!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
