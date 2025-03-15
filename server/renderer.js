import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

export default (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    return res.redirect(301, context.url);
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Boilerplate</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
};
