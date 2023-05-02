import server from "./server";
import config from "./config/config";

const app = server();

const host = config.HOST;
const port = parseInt(config?.PORT || '6476');
const swaggerUrl = config.SWAGGER_URL;

app.listen({ port, host }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`);
    console.log(`Server Swagger Ui :: ${swaggerUrl}`);
})
