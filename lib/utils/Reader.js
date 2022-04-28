const fs = require("fs");

class Reader {
  static readJsonFile(partners) {
    const datapartners = fs.readFileSync(partners);
    return JSON.parse(datapartners);
  }
}

module.exports = Reader;
