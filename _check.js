const fs = require("fs");
const h = fs.readFileSync("index.html", "utf8");
const m = h.match(/<script>([\s\S]*)<\/script>/);
if (!m) {
  console.error("no script");
  process.exit(1);
}
fs.writeFileSync("_script.js", m[1]);
console.log("script bytes", m[1].length);
console.log("html bytes", h.length);
