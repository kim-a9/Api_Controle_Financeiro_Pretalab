import app from "./index";
import { mongoConnect } from "../src/database/MongooseConnection";


async function startServer() {
  try {
    await mongoConnect();
    console.log("✅ Database connected!");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
