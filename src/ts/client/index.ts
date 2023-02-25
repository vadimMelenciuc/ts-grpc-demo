import { client } from "./client-config";

const addressResults = await client.GetAllAddresses({});

console.log(addressResults);
