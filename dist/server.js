import express from "express";
import fs from "fs";
const app = express();
const port = 3005;
const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
console.log(jobs);
app.get("/", (req, res) => {
    res.send("job site api");
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map