// const message: string = "typescript works.";
// console.log(message);

import express from "express";

const app = express();
const port = 3944;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`
  <h1>Home</h1>
  <p>go to <a href="info">info page</a></p>
  `);
});

app.get("/info", (req: express.Request, res: express.Response) => {
  res.send(`
    <h1>Info</h1>
    <p>go back <a href="/">home</a></p>
    `);
});

app.listen(port, () => {
  console.log(`now listening on http://localhost:${port}`);
});
