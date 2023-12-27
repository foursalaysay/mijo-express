import mongoose from 'mongoose';

const connect = async () => {
  try {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error('Database URL is not provided');
    }

    await mongoose.connect(databaseUrl);
  } catch (error) {
    throw new Error('Error in Connecting to MongoDB');
  }
};

export default connect;
