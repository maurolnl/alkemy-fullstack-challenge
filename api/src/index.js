import app from './app';
import './db';

const port = app.get('port');

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
