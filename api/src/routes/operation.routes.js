import { Router } from 'express';

import {
  getLastTenOperations,
  createOperation,
  updateOperation,
  deleteOperation,
  getIncomes,
  getExpenses,
} from '../controllers/operations.controller';

const router = Router();

router.route('/').get(getLastTenOperations).post(createOperation);

router.route('/income').get(getIncomes);
router.route('/expense').get(getExpenses);

router.route('/:id').delete(deleteOperation).put(updateOperation);

export default router;
