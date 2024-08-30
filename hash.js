const bcrypt = require('bcrypt');
const pass = "$2b$10$uNsrNDUvzxa.cnVTP4vM6e4MyZ9ijWiRsNbWwRweN4WFpf64r25p6"
const ismatch = await bcrypt.compare('v209988765',pass)
console.log(ismatch);
