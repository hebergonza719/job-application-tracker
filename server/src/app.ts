import express from 'express';
import { jobApplicationMock } from './data/applications.js';

export const app = express();

app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});

app.get('/applications', (_, res) => {
  return res.status(200).json(jobApplicationMock);
});

app.get('/applications/:id', (req, res) => {
  const { id } = req.params;
  const application = jobApplicationMock.find((application) => {
    return application.id === id;
  });

  if (application) {
    return res.status(200).json(application);
  }

  return res.status(404).json({
    error: 'Application not found',
  });
});
