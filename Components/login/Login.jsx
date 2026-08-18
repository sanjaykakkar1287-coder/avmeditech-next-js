"use client";

import { useState } from "react";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
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

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setIsPending(true);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Login failed"
        );
      }

      console.log("Login successful:", result);

      // Later:
      // router.push("/dashboard");

    } catch (error) {
      console.error("Login Error:", error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginWrapper}>

        {/* LEFT SIDE */}
        <div className={styles.loginInfo}>

          <div className={styles.logo}>
            AV <span>Meditech</span>
          </div>

          <div className={styles.infoContent}>
            <span className={styles.badge}>
              ADMIN PORTAL
            </span>

            <h1>
              Welcome to
              <span> AV Meditech</span>
            </h1>

            <p>
              Manage inquiries, products, users and
              other business operations from your
              secure admin dashboard.
            </p>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className={styles.loginCard}>

          <div className={styles.cardHeader}>
            <h2>Admin Login</h2>

            <p>
              Sign in to access your dashboard
            </p>
          </div>


          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >

            {/* EMAIL */}
            <div className={styles.formGroup}>

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@avmeditech.com"
                autoComplete="email"
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
                : "Sign In"}
            </button>

          </form>


          <div className={styles.cardFooter}>
            <span>
              AV Meditech Admin Portal
            </span>
          </div>

        </div>

      </div>
    </main>
  );
}