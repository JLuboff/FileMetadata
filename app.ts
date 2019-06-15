import * as express from "express";
import { errorHandler } from "./middleware/middleware";
import * as routes from "./routes/routes";

const PORT: number | string = process.env.PORT || 8080;
const app: express.Application = express();

app.use(express.static(__dirname + "/public"));
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
