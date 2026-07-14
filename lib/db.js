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
      const client = new MongoClient(uri, {
        maxPoolSize: 5,
        // Fail fast if the cluster is unreachable (e.g. Atlas network access
        // not open to the host) instead of hanging ~30s on every request.
        serverSelectionTimeoutMS: 6000,
        connectTimeoutMS: 6000,
      });
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
