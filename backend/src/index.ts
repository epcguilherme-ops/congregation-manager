import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import membersRouter from './routes/members';
import { Member } from './models/member';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/congregation';

const sequelize = new Sequelize(databaseUrl, {
  models: [Member],
  logging: false,
});

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/members', membersRouter);

const port = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Backend running on port ${port}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
