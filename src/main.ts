import server from "./server";
import config from "./config/config";

const app = server();

const port = parseInt(config?.PORT || '6476');

app.listen({ port }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
