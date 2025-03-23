import express from 'express';
import renderer from './renderer';
import path from 'path';

const app = express();
// Serve assets from '/assets/' prefix
app.use('/assets', express.static(path.join(__dirname, '')));

// Handle all other requests with SSR
app.use(renderer);

// Don't start the server manually if running in Vercel
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
export default app;
