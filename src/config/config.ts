import * as dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL, HOST, PORT, SWAGGER_URL } = process.env;

const config = {
    DATABASE_URL,
    HOST,
    PORT,
    SWAGGER_URL,
}

export default config;

