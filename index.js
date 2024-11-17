import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';
const token = process.env.BOT_API_KEY
const bot = new TelegramBot(token, { polling: true });
const commands = [
  {
    command: "/govnovoz",
    description: "На зиле"
  },
  {
    command: "/kall",
    description: "Заполнен чан"
  },
];


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

bot.on('text', async msg => {

  try {
    const chatId = msg.chat.id;
    switch (msg.text) {
      case '/govnovoz':
        bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=FQtPSH2ibYQ')
        break;
      case '/kall':
        bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=dJhKEAWn2Zo')
        break;
    }
  }
  catch (error) {
    console.log(error);

  }
})

bot.setMyCommands(commands)