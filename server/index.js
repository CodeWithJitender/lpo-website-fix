import express from 'express';
import renderer from './renderer';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('build/public'));

// Handle all routes
app.get('*', (req, res) => {
  renderer(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
