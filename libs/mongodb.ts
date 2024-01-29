import mongoose from 'mongoose';

function DBconnect(): void {
  try {
    mongoose.connect('mongodb://localhost:27017/express-mongo', {});
  } catch (error) {
    console.log(error);
  }
}
