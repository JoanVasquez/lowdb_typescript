import app from "./app";
import { createConnection } from "./config/database";

app.set("PORT", process.env.PORT || 5000);

createConnection().then(() => {
  console.log("DATABASE Connection established");

  app.listen(app.get("PORT"), () =>
    console.log(`Listening on port ${app.get("PORT")}`)
  );
});
