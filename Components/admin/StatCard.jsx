export default function StatCard({
  title,
  value,
  description,
  icon,
  variant = "blue",
}) {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="stat-card-top">
        <div className="stat-icon">{icon}</div>

        <span className="stat-badge">Overview</span>
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}