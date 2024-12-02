const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

const convertExcelToJson = (fPath, oPath) => {
  const file = xlsx.readFile(fPath);
  const name = file.SheetNames[0];
  const data = xlsx.utils.sheet_to_json(file.Sheets[name]);
  fs.writeFileSync(oPath, JSON.stringify(data, null, 2));
};

convertExcelToJson("./data/data1.xlsx", "./data/data1.json");
convertExcelToJson("./data/data2.xlsx", "./data/data2.json");
