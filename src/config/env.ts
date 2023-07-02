import dotenvSafe from 'dotenv';
import path from 'path';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
});

export const config = {
  APP_URI: process.env.APP_URI || 'http://localhost:3000',

  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID as string,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET as string,
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN as string,
  DISCORD_BOT_CHANNEL_ID: process.env.DISCORD_BOT_CHANNEL_ID as string,
  DISCORD_GENERAL_CHANNEL_ID: process.env.DISCORD_GENERAL_CHANNEL_ID as string,

  GUILD_ID: process.env.GUILD_ID as string,
  WEBHOOK_DISCORD: process.env.WEBHOOK_DISCORD as string,

  MONGO_URI: process.env.MONGO_URI as string,

  PORT: 3000,
} as const;
