
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW46jRhTdS/3aGgM2YJBaCmCbh42BttvYRPPBo8Bl83JR2NAjS9lD8pFI6VF2kr1kBb2ECHf3zHwkkw5fRVXp3HPPObc+gbxAFZzDFoifQInR2SewW5K2hEAEch3HEIM+iHziAxFICy2YHOgxW0wtae2eeFpepZPBjGet6Ci0dZNfhqsxjuab8A5c+6CsgxSF3wHUqvBYbrzdSn6w1bg8b6Wjc6LQyduXF0bY8Y0v0zHRzjvXvAPXDtFHGOXJtNzDDGI/ncPW9hF+J315HiylbaaQLJiOEuO0M5iUXixKo1ZPjqaN9MO9Q823E4Z6H/3spPhs/ijo814c30sLJfO2HurlQ2y7W6ZtDP7CnRqJS7XRC/0KJTmM9AjmBJH23bon9iZQ1Ic4MjdESd2e2VywfrkXVN5FellMM4veXMjUfMjH7yNO842mFOTksZEV7psNB7Mxd1zqnpIOe/EoPcaNpebKlKKO3xK38VtWjv9H98tkY6qVAOOlnM0Emp0RLdtcimjhVpTSmw1qPpYdiT4UavU++vvF1D+Wc0Rr46FaCkNbu9/GhiOvF9lAmOfZuZ7q2OOTqfKN7j6p8fdYugp1aYM4CViGtbfbydjQ6APb09aU1jDlJPA1g5+4NR1k7jlZ2DuhdOxts6FU7DhUVhtIjs+SYR8YazTassxRN7WJnNzdOjrCVo+ASF/7AMMEVQT7BBV5tyeM+sCPzisYYkhu6oLHwUWjdsder5CXC2lO8tYML1KIZHr5YHAh75Rre2afenUh3YE+KHERwqqCkYYqUuDWhFXlJ7AC4o8f+yCHDXnxras2pPsgRrgiD3ldpoUfvZn6duiHYVHnZNXmodItIAYi9XUbEoLypOpkrHMfh3t0hsreJxUQYz+t4JcGIYYREAmu4ZehVYqo091l1nPVW9ugD7KbHygCImAYjmI5gWMYSmSEH6oPlw7VL8sPOSSgD3K/uwyenz7//Pz0+fe/fvrj+enXP5+ffvsF9EF6g6DHwpAfDwWWE4YMe4PpDq5f2HfFIkh8lFZABIq5PrU1NZvafF6NHVWVnERSEgl87fYtNS+2wBpFY8rV50NtUNuNuW09XO2cA79bR6mrBNJUVXExp1O0u/sHECACI6qD+93JbrZ8pSXrwGR2B8oK19zqvhklqxipjz5eGvsJlxzbh4hyZHeCh/iATTsxOY696JlpjR6teLOIy5zZzBJdVZy7rloEzyiE3xZLm57XeoP8SMyHtcda8kl7PA4Da2AZS00ys0EWySRczg32dHIHysDZzCzOXh84t3ncG17DWrHEh8sZOwr3gyRjLb6dTF7zfJun9PUdQ7eodT52vzGCt2fh1bD/8vWFd5c+6tr/BuL1nfmXWZW3uMjj5QwppBnwh/F6Ns58Xp3qPWY69DZJdpHl/YlTiLfLwPX6sQ/K1CdxgTMggioLfNAHuKi7LOt5XHynkiIl+vS169SviPR1PtYogxXxsxKINM+OKI4X+NHLLRsXpeZXeyCCPBvKQZf1VirLFfHJ27QBqfuWggaufwOBgl6fiAcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "63292971", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "🖤,❤️,🤍", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "22605696220", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
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
PRESENCE: process.env.PRESENCE || "recording", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Ouagadougou", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
