const fs = require("fs");

// Write to the file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File written successfully.");

  // Read the file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);
  });
});
