import { v4 as uuidv4 } from 'uuid';

import { db } from '../db';

export const getLastTenOperations = async (_, res) => {
  try {
    const operations = await db.query('SELECT * FROM operations ORDER BY date DESC LIMIT 10');

    return res.status(200).json({ operations: operations.rows });
  } catch (error) {
    return res.status(500).json({ message: 'Error getting operations', error: error.stack });
  }
};

export const getIncomes = async (_, res) => {
  const query = {
    text: 'SELECT * FROM operations WHERE type = $1',
    values: ['income'],
  };

  try {
    const operations = await db.query(query);

    return res.status(200).json({ operations: operations.rows });
  } catch (error) {
    return res.status(500).json({ message: 'Error getting incomes operations', error: error.stack });
  }
};

export const getExpenses = async (_, res) => {
  const query = {
    text: 'SELECT * FROM operations WHERE type = $1',
    values: ['expense'],
  };

  try {
    const operations = await db.query(query);

    return res.status(200).json({ operations: operations.rows });
  } catch (error) {
    return res.status(500).json({ message: 'Error getting expenses operations', error: error.stack });
  }
};

export const createOperation = async (req, res) => {
  const { concept, amount, type, category } = req.body.operation;
  const date = new Date().toISOString();
  const id = uuidv4();

  if (amount && type && category) {
    const query = {
      text: 'INSERT INTO operations (id, concept, amount, type, category, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, concept, amount, type, category, date],
    };

    try {
      const response = await db.query(query);

      return res.status(201).json({ message: `Operation created successfully with id ${response.rows[0].id}` });
    } catch (error) {
      return res.status(500).json({ message: 'Error creating operation', error: error.stack });
    }
  }

  res.status(400).json({ message: 'Operation must contain amount, type and category in the body' });
};
export const updateOperation = async (req, res) => {
  const { id } = req.params;
  const { concept, amount, type, category } = req.body.operation;

  if (amount && type && category && id) {
    const query = {
      text: 'UPDATE operations SET concept = $1, amount = $2, type = $3, category = $4 WHERE id = $5',
      values: [concept, amount, type, category, id],
    };

    try {
      await db.query(query);

      return res.status(200).json({ message: `Operation updated successfully with id ${id}` });
    } catch (error) {
      return res.status(500).json({ message: 'Error creating operation', error: error.stack });
    }
  }
  res.status(400).json({ message: 'Operation must contain id, amount, type and category.' });
};
export const deleteOperation = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const query = {
      text: 'DELETE FROM operations WHERE id = $1',
      values: [id],
    };

    try {
      const response = await db.query(query);

      if (response.rowCount === 0) {
        return res.status(404).json({ message: `Operation with id ${id} not found` });
      }

      return res.status(200).json({ message: `Operation deleted successfully with id ${id}` });
    } catch (error) {
      return res.status(500).json({ message: `Error deleting operation with id ${id}`, error: error.stack });
    }
  }

  res.status(400).json({ message: 'Operation must contain id.' });
};
