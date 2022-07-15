import "dotenv/config";
import app from "./api";

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => console.log(`conected ${PORT}`));
