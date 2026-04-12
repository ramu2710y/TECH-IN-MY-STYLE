const fs = require('fs');
const file = 'client/src/modules/js-int-course/pages/JsIntResources.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync(file, content);
console.log("Fixed!");
