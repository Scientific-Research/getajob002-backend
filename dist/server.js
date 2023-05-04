import { createServer } from "http";
import fs from "fs";
const port = 3005;
const jobs = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf8"));
console.log(jobs);
createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text-plain" });
    //   res.write(mainContent);
    res.write(JSON.stringify(jobs));
    res.end();
}).listen(port);
console.log(`listening on http://localhost:${port}`);
//# sourceMappingURL=server.js.map