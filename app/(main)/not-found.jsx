// app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    padding: "20px",
  }}
>
  <div
    style={{
      maxWidth: "500px",
      width: "100%",
      background: "#fff",
      padding: "40px 30px",
      borderRadius: "16px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb",
    }}
  >
    <h1
      style={{
        fontSize: "48px",
        color: "#dc2626",
        marginBottom: "10px",
        fontWeight: "700",
      }}
    >
      404
    </h1>

    <h2
      style={{
        fontSize: "24px",
        color: "#1f2937",
        marginBottom: "15px",
      }}
    >
      Page Not Found
    </h2>

    <p
      style={{
        color: "#6b7280",
        fontSize: "16px",
        lineHeight: "1.6",
        marginBottom: "30px",
      }}
    >
      Sorry, the page you are looking for does not exist or has been moved.
    </p>

    <Link
      href="/"
      style={{
        display: "inline-block",
        background: "#2563eb",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
        transition: "0.3s",
      }}
    >
      ← Return to Home
    </Link>
  </div>
</div>
  );
}