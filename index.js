import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';
const token = process.env.BOT_API_KEY
const bot = new TelegramBot(token, { polling: true });
const commands = [
  {
    command: "/menu",
    description: "меню команд "
  },
  {
    command: "/help",
    description: "помощь"
  }
];


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

bot.on('text', async msg => {
  try {
    const chatId = msg.chat.id;
    if (msg.text == '/menu') {
      await bot.sendMessage(chatId, 'меню бота', {
        reply_markup: {
          keyboard: [
            ['🚘Петрович', '🏁Врубай🏁'],
            ['🐺Насос🐺', '🚗Говновоз!🚗'],
            ['🐺🏁Закончить смену🏁🐺']
          ],
          resize_keyboard: true
        }
      })
    } else if (msg.text == '/help') {
      await bot.sendMessage(chatId, 'поможет только это \n https://www.youtube.com/watch?v=dJhKEAWn2Zo')
    }

  }
  catch (error) {
    console.log(error);
  }
})

bot.on('text', async msg => {

  try {
    const chatId = msg.chat.id;
    switch (msg.text) {
      case '🚘Петрович':
        await bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=FQtPSH2ibYQ')
        break;
      case '🏁Врубай🏁':
        await bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=cuS7EvgwaTI')
        break;
      case '🐺Насос🐺':
        await bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=t_6RmX-9EZo')
        break;
      case '🚗Говновоз!🚗':
        await bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=zjOq73DH3uU')
        break;
        case '🐺🏁Закончить смену🏁🐺':
        await bot.sendMessage(chatId, 'До скорой встречи, работяга!!!', {
          reply_markup:  {
            remove_keyboard: true
          }
        })
        break;


    }
  }
  catch (error) {
    console.log(error);

  }
})

bot.setMyCommands(commands)