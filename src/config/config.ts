import * as dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

const config = {
    DATABASE_URL,
}

export default config;

