// app/not-found.jsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/" 
        style={{ 
          marginTop: '20px', 
          display: 'inline-block', 
          color: '#0070f3', 
          textDecoration: 'underline' 
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}