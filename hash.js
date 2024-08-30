const bcrypt = require('bcrypt');

async function checkPassword() {
    const pass = "$2b$10$6lj7UmCk9VGXm1RZvDEQI.4TaAiZXtEAuYNfzsrmcHQfO0nyOKk5e";
    const ismatch = await bcrypt.compare('v219988765', pass);
    console.log(ismatch);
}

checkPassword();

