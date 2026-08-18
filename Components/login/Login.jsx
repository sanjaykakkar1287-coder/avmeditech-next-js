"use client";

import { useState } from "react";
import styles from "./Login.module.css";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!formData.username || !formData.password) {
            setError("Username and password are required.");
            return;
        }

        setIsPending(true);

        try {
            const response = await fetch("/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(
                    result.message ||
                    "Invalid username or password."
                );
                return;
            }

            // Login successful
            window.location.href = "/admin/dashboard";

        } catch (error) {
            console.error("Login Error:", error);

            setError(
                "Unable to connect to server."
            );
        } finally {
            setIsPending(false);
        }
    };

    return (
        <main className={styles.loginPage}>

            <div className={styles.loginContainer}>

                <div className={styles.loginCard}>

                    {/* HEADER */}

                    <div className={styles.loginHeader}>

                        <h1>
                            Welcome Back
                        </h1>

                        <p>
                            Sign in to access the admin dashboard.
                        </p>

                    </div>


                    {/* LOGIN FORM */}

                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        className={styles.form}
                    >

                        {/* USERNAME */}

                        <div className={styles.formGroup}>

                            <label htmlFor="username">
                                Username
                            </label>

                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                                autoComplete="username"
                                disabled={isPending}
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className={styles.formGroup}>

                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                disabled={isPending}
                            />

                        </div>


                        {/* ERROR */}

                        {error && (
                            <p className={styles.error}>
                                {error}
                            </p>
                        )}


                        {/* BUTTON */}

                        <button
                            type="submit"
                            disabled={isPending}
                            className={styles.loginButton}
                        >
                            {isPending
                                ? "Signing in..."
                                : "Sign In"
                            }
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}