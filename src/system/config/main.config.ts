import * as dotenv from 'dotenv';
import DbConfig from './db.config';

dotenv.config();

export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  mode: process.env.MODE || 'PROD',
  database: {
    ...DbConfig(),
  },
});
