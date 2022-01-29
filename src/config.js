import config from "../server-config.json";

if (process.env.NODE_NAME) {
  config.nodeName = process.env.NODE_NAME;
}

if (process.env.ACCOUNT) {
  config.account = process.env.ACCOUNT;
}

if (process.env.CLIENT_URL) {
  config.clientUrl = process.env.CLIENT_URL;
}

if (process.env.DATA_DIR) {
  config.raiblocksDir = process.env.DATA_DIR;
}

if (process.env.NODE_HOST) {
  config.nodeHost = process.env.NODE_HOST;
}

if (process.env.REDIS_HOST || process.env.REDIS_PORT || process.env.REDIS_PASSWORD) {
  const host = process.env.REDIS_HOST || "localhost";
  const port = process.env.REDIS_PORT || "6379";
  const password = process.env.REDIS_PASSWORD || "";
  const authString = password ? `redis:${password}@` : ""
  config.redis = `redis://${authString}${host}:${port}`;
}

if (process.env.REDIS_NAMESPACE) {
  config.redisNamespace = process.env.REDIS_NAMESPACE;
}

if (process.env.SERVER_PORT) {
  config.serverPort = parseInt(process.env.SERVER_PORT);
}

if (process.env.COIN_MARKETCAP_API_KEY) {
  config.coinMarketCapApiKey = process.env.COIN_MARKETCAP_API_KEY;
}

if (process.env.MONITOR_CURRENCY_NAME) {
  config.monitorCurrencyName = process.env.MONITOR_CURRENCY_NAME;
}

if (process.env.KNOWN_MONITORS) {
  config.knownMonitors = process.env.KNOWN_MONITORS.split(",");
}

if (process.env.BLACKLISTED_PEERS) {
  config.blacklistedPeers = process.env.BLACKLISTED_PEERS.split(",");
}

if (process.env.OFFICIAL_REPRESENTATIVES) {
  config.officialRepresentatives = process.env.OFFICIAL_REPRESENTATIVES.split(",");
}

export default config
