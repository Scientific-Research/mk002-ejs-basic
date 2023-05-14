// const message: string = "typescript works.";
// console.log(message);

import express from "express";
import path from "path";
import fetch from "node-fetch";

const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3944;

// console.log(__dirname);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));

// const appTitle = "The Tech Book Site";
const url = "https://edwardtanguay.vercel.app/share/techBooks.json";
// const books = await (await fetch(url)).json;
// ODER
const response = await fetch(url);
const books: any = await response.json();
console.log(books);

const siteData = {
  appTitle: "Tech Book Club",
  pages: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Info",
      path: "/info",
    },
  ],
  books,
};

app.get("/", (req: express.Request, res: express.Response) => {
  // res.send(`
  // <h1>Home</h1>
  // <p>go to <a href="info">info page</a></p>
  // `);
  res.render("index", { siteData, currentPath: "/" });
});

// app.get("/info", (req: express.Request, res: express.Response) => {
//   // res.send(`
//   //   <h1>Info</h1>
//   //   <p>go back <a href="/">home</a></p>
//   //   `);
//   res.render("info", { siteData, currentPath: "/info" });
// });

app.get("/info", (req: express.Request, res: express.Response) => {
  res.render("info", { siteData, currentPath: "/info", idCode: null });
});

app.get("/info/:idCode", (req: express.Request, res: express.Response) => {
  const idCode = req.params.idCode;
  res.render("info", {
    siteData,
    currentPath: "/info",
    idCode,
    book: books.find((m: any) => m.idCode === idCode),
  });
});

app.listen(port, () => {
  console.log(`now listening on http://localhost:${port}`);
});
