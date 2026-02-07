export default function EduPilotLogo({ width = 420, height = 120 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 420 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="EduPilot Logo"
    >
      <defs>
        <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>

      {/* Icon */}
      <g transform="translate(20,20)">
        {/* Orbit */}
        <ellipse
          cx="45"
          cy="40"
          rx="42"
          ry="14"
          fill="none"
          stroke="url(#flightGradient)"
          strokeWidth="4"
        />

        {/* Graduation Cap */}
        <polygon
          points="25,25 45,15 65,25 45,35"
          fill="#111827"
        />
        <rect x="38" y="35" width="14" height="6" fill="#111827" />
        <line
          x1="52"
          y1="35"
          x2="58"
          y2="48"
          stroke="#F59E0B"
          strokeWidth="2"
        />

        {/* Plane */}
        <path
          d="M10 40 L80 32 L70 40 L80 48 Z"
          fill="url(#flightGradient)"
        />
      </g>

      {/* Text */}
      <text
        x="120"
        y="70"
        fontFamily="Segoe UI, Inter, Arial, sans-serif"
        fontSize="42"
        fontWeight="700"
      >
        <tspan fill="#2563EB">Edu</tspan>
        <tspan fill="#0F172A">Pilot</tspan>
      </text>
    </svg>
  );
}
