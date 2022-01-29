import fs from "fs";
import { promisify } from "util";
import config from "../../config.js";

const fsStat = promisify(fs.stat);

const dbSize = async () => {
  if (!config.raiblocksDir) return null;

  try {
    const stats = await fsStat(`${config.raiblocksDir}/data.ldb`);
    return stats.size;
  } catch (e) {
    return null;
  }
};

export default dbSize;
