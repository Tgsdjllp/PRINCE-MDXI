
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW47iRhTdS/2CBj/AD6SWYowxNhjbvCHKR2GXH41fVJUBM0LKHpKPREqPspPsJSvoJUSG7ulRMpl0/FWuujr3nHvPvR9BlscEjVAFuh9BgeMjpKg+0qpAoAt6ZRAgDJrAhxSCLliMBXtPyXSfZf04IoTz7A1qmb4zbmdW0RpP26pqxy6WGesBXJugKHdJ7H0D8JFYK1xUJJQP8FHiZ/LRUvow0PnpoNj0RL/USmjpF+IumAdwrRFhjOMs1IoIpQjDZIQqB8b4ffQV5aK2+6GTjS7LRi/a9lx7OJ1u3MFRZ2Gx2Kv6aS1OPYZm4fvoOy1HdVfMOd0TB9I97B8tyd4EZyshM5ydNHXVZtZuaLYi7U6fxGGGfMNHGY1p9f66G/rCIDNjPFIWO9pyx+Jys16k6/V01RP8SbpztmN/1wi05f59xLXeIWr4ES47DFckCa9NHiU2mod+y9jbLVb33Unb5lwL9twviTv41Sv7/1N3aTg6kawSTLPFBCpsr+aDrFc6iNU7OEb7JLMlo5gtXVP33kf/JIzbEu9lx9KRJnZ7YpCdplntaDvRdqv2cL9V2uacuYzYyHqjD2mJv8UyMbzNjK7XDl/Jvf5OtE5qz3Q9zpyaezQMd5V9OA+RzmjnvmkmiwHjQPa0V5JyoigXoWID1WBbxnyJOqdWGlZMJEwPsftwU7RHleGDLnttAozCmFAMaZxn9R3HCU0A/eMMeRjRW3kBP/fXE7gbSUczDSxmsWu3Ey5RzV0yKbY5MgSl7RWL6ZqXjQfQBAXOPUQI8ocxoTmuLEQIDBEB3e9vnapFY5TmFJmxD7qA4wSmI8gCxzHfkQ+nCFICi+JDhihoggDnqYVAl+ISNcEtXmZYVdKkvij2BUVoCx1N6ImiMuA5VZF5WaoVpvec8zhFhMK0AF1W7PCszLKMdP2hCTJ0pnf71KJ5tgmCGBO6yMoiyaH/6q3XR+h5eZnRWZV5an1AGHSZt2tEaZyFpBZWZhB7UXxEaq0DdAOYEPS5zggj/1XLy+5Qc79uf1/dWMZEnIGaew3099J0uc4/q5PBOhg8P3366fnp029//vj789Mvfzw//fozaILkBsFKMi9KvNwRZJ7r3GDqh+tn9nUyH1EYJwR0gWo5h6pkBtoYJi1i6bqihYoaKuBN7at57+ZAZexLzMoY8cNW6ZytdbXFZOM+ipu5n6zUnaLpOs5HbBJvHr4CUqeUyqmNiovVDzvqyA3iLGUXmT1bsEOT2EQ8LAOzP3AN+cwdA+YS5aa/3zJbfXQ6LA9aldlwGp2HY9P2tb2S8BxOV0n/9FBn89Ex9tCXyeKITS9WZ6sNZEkxWlJn+dhIw8gbsWLamSRiRk05HF3yCy0byio4Wv0AKWMzHx4GBq3iqHGEDZLD0eqkljOdGOzAIKFyH6vbWCcv6zR+MXx8+w1idNtOLw37r77eedfuY67NLyBe1t2/rIzeGudZMBnEKj23xEdpPpBSKOqa0eA0frsM01OvFx0ElW43KbjWY1AkkAY5TkEXkHQHQRPgvKy9bGRB/o1MqhIaWnhXnUBClbf5+NrIcfcoB+fFEJIIdEGW8r1d7fVKKYoZhfR12oBSf6Zsg+tfC/LifA8IAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "+22663292971", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "22605696220", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "warn", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Ouagadougou", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
