import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "../Schema/Users.js";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_USERNAME = process.env.USERNAME;
const ADMIN_PASSWORD = process.env.PASSWORD;

async function createAdmin() {
    try {
        // Check environment variables
        if (
            !MONGODB_URI ||
            !ADMIN_USERNAME ||
            !ADMIN_PASSWORD
        ) {
            throw new Error(
                "Required environment variables are missing"
            );
        }

        // Connect MongoDB
        await mongoose.connect(MONGODB_URI);

        console.log("MongoDB connected");

        // Check if admin already exists
        const existingUser = await User.findOne({
            username: ADMIN_USERNAME.toLowerCase(),
        });

        if (existingUser) {
            console.log("Admin user already exists");
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(
            ADMIN_PASSWORD,
            10
        );

        // Create admin
        await User.create({
            username: ADMIN_USERNAME.toLowerCase(),
            password: hashedPassword,
            role: "admin",
            isActive: true,
        });

        console.log("Admin user created successfully");

    } catch (error) {
        console.error("Create Admin Error:", error.message);

    } finally {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.disconnect();
            console.log("MongoDB disconnected");
        }
    }
}

createAdmin();