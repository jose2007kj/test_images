import { cleanEnv, str } from "envalid";
const env = cleanEnv(process.env, { BASE_URL: str() });

export default env
