// const message: string = "typescript works.";
// console.log(message);
import express from "express";
const app = express();
const port = 3944;
app.get("/", (req, res) => {
    res.send(`this is <b>HTML<b>`);
});
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map