export default function Logo({ className = "h-10 sm:h-14" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for 360 */}
      <circle
        cx="150"
        cy="30"
        r="18"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        className="drop-shadow-sm"
      />

      {/* 360 text inside circle */}
      <text
        x="150"
        y="35"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#f59e0b"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        360
      </text>

      {/* Takeoffs text */}
      <text
        x="0"
        y="22"
        fontSize="18"
        fontWeight="800"
        fill="#1e293b"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-tight"
      >
        TAKEOFFS
      </text>

      {/* Geometric accent line */}
      <rect
        x="0"
        y="28"
        width="120"
        height="2"
        fill="#f59e0b"
        rx="1"
      />
    </svg>
  )
}