import app from "./index";
import { mongoConnect } from "../src/database/MongooseConnection";

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoConnect();
    console.log("✅ Database connected!");
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
