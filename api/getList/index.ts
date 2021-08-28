import { AzureFunction, Context, HttpRequest } from "@azure/functions";
const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://ck19928198-serverless-db.documents.azure.com:443/"; //"https://your-account.documents.azure.com";
const key =
  "ggDZdO4JjIkpmJbNB3VswGcZOONHxg9yzhsmaUmBeC00vprFUmziuxn9DjI8u0yvzTDuFkUfQtvRinNNt2EARQ=="; //"<database account masterkey>";
const client = new CosmosClient({ endpoint, key });

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { database } = await client.databases.createIfNotExists({
    id: "test",
  });
  console.log("database", database.id);

  const { container } = await database.containers.createIfNotExists({
    id: "heroes",
  });
  console.log("container", container.id);

  const { resources } = await container.items
    .query("SELECT * from c ")
    .fetchAll();

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: resources,
  };
};

export default httpTrigger;
