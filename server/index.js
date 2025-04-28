import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import renderer from './renderer';
import apiRouter from "./api";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// Serve assets from '/assets/' prefix
app.use('/assets', express.static(path.join(__dirname, '')));

// API for contact
app.use("/api", apiRouter)

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
