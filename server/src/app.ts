import express from 'express';
import { jobApplicationMock } from './data/applications.js';

export const app = express();

app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});

app.get('/applications', (_, res) => {
  res.json(jobApplicationMock);
  res.status(200);
  return res;
});
