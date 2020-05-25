export const getRsaVaultConfig = () => ({
  srvIPAddress: process.env.SRV_IP_ADDRESS as string,
  mongodbPort: parseInt(process.env.MONGODB_PORT as string),
  rsaVaultDb: process.env.RSAVAULT_DB as string,
  rsaVaultDbUsername: process.env.RSAVAULT_DB_USERNAME as string,
  rsaVaultDbPassword: process.env.RSAVAULT_DB_PASSWORD as string,
  mongoAuthDb: process.env.MONGODB_AUTHDB as string,
});
