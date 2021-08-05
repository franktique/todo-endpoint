const getEnv = (varName: string): string | undefined => process.env[varName];

export default getEnv;
