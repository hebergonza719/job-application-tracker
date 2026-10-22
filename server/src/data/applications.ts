import { randomUUID } from 'node:crypto';
import type { JobApplication } from '../types/application.js';

const date = new Date();

export const jobApplicationMock: JobApplication[] = [
  {
    id: randomUUID(),
    company: 'TestName1',
    title: 'SWE2',
    status: 'applied',
    appliedAt: date.toISOString(),
    createdAt: date.toISOString(),
  },
  {
    id: randomUUID(),
    company: 'TestName2',
    title: 'SWE2',
    status: 'applied',
    appliedAt: date.toISOString(),
    createdAt: date.toISOString(),
  },
];
