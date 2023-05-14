// const message: string = "typescript works.";
// console.log(message);
import express from "express";
import path from "path";
const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3944;
// console.log(__dirname);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));
const appTitle = "The Tech Book Site";
app.get("/", (req, res) => {
    // res.send(`
    // <h1>Home</h1>
    // <p>go to <a href="info">info page</a></p>
    // `);
    res.render("index", { appTitle });
});
app.get("/info", (req, res) => {
    // res.send(`
    //   <h1>Info</h1>
    //   <p>go back <a href="/">home</a></p>
    //   `);
    res.render("info", { appTitle });
});
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map