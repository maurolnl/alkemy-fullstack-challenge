import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    operation: {
      id: '1',
      concept: 'varios',
      amount: 400,
      type: 'income',
      category: 'alimentos',
    },
  });
});

router.post('/', (req, res) => {
  const { operation } = req.body;
  console.log(operation);

  res.send(operation);
});

router.put('/', (req, res) => {
  const { operation } = req.body;
  console.log(operation);

  res.send(operation);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  res.send('deleted operation with id: ', id);
});

export default router;
