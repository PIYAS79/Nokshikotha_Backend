import { Server } from 'http';
import app from './App';
import mongoose from 'mongoose';
import config from './config';



let server: Server;


async function main() {
    try {
        // Connect to MongoDB and wait for confirmation
        await mongoose.connect(config.db_url as string);
        console.log('MongoDB connected successfully 💥');

        // Start the server
        server = app.listen(config.port, () => {
            console.log(`Server is running on http://localhost:${config.port}`);
        });

    } catch (error) {
        console.error('MongoDB connection failed ❌', error);
        process.exit(1); // Exit if MongoDB connection fails
    }
}
main();

// handle unhandle rejection of server 
process.on('unhandledRejection', () => {
    console.log(`Unhanlde Rejection found 😈`);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})

// handle uncaughtExceptions of server
process.on('uncaughtException', () => {
    console.log(`UncaughtException found 😈`);
    process.exit(1);
})