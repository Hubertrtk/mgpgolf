const { CosmosClient } = require("@azure/cosmos");
const config = require("./config");

const options = {
  endpoint: process.env.AZURE_ENDPOINT,
  key: process.env.AZURE_KEY,
  userAgentSuffix: process.env.AZURE_USERAGENTSUFFIX,
};

const client = new CosmosClient(options);

async function containerCreate(database, containerDef, paths) {
  // Create the container
  const containerDefinition = {
    id: containerDef,
    indexingPolicy: { automatic: true }, // turn of indexes
    partitionKey: {
      paths: [paths],
    },
  };
  const { container } = await database.containers.createIfNotExists(
    containerDefinition
  );
  console.log(`created container: ${container.id}`);
}

const run = async () => {
  const { database } = await client.databases.createIfNotExists({
    id: config.databaseDefName,
  });
  containerCreate(database, config.phonesContainer, "/data");
};

run();

module.exports = client;
