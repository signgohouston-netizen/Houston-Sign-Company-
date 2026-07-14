import { MongoClient } from 'mongodb';

// MongoDB connection, cached across serverless invocations. If MONGODB_URI is
// not set, everything degrades gracefully (no crash) so the site still works.
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'signgo';

export function hasDb() {
  return Boolean(uri);
}

export async function getDb() {
  if (!uri) return null;
  try {
    if (!global._sgMongoPromise) {
      const client = new MongoClient(uri, { maxPoolSize: 5 });
      global._sgMongoPromise = client.connect();
    }
    const client = await global._sgMongoPromise;
    return client.db(dbName);
  } catch (err) {
    // Reset so a later request can retry after a transient failure.
    global._sgMongoPromise = null;
    console.error('MongoDB connection error:', err.message);
    return null;
  }
}
