const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Add CORS headers to the response
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Make a request to the iframe source
  const response = await fetch('https://heartandball.vercel.app/');

  // Pass along the response from the iframe source
  res.send(await response.text());
};
