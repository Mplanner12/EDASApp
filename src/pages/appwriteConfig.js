import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65fe59b5408c35449512");

// Export Account
export const account = new Account(client);

// Export the Appwrite client
export default client;
