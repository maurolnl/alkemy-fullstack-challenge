import { Pool } from 'pg';

export const db = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});
