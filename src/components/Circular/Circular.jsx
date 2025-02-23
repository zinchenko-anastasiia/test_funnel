import React from "react";
import PropTypes from "prop-types";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ dye, pct, size }) => {
  const r = size / 2 - size * 0.1;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={size / 2}
      cy={size / 2}
      fill="transparent"
      stroke={strokePct !== circ ? dye : ""}
      strokeWidth={size * 0.1}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};
Circle.propTypes = {
  dye: PropTypes.string.isRequired,
  pct: PropTypes.number,
  size: PropTypes.number.isRequired
};

const Text = ({ percentage, size }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={size * 0.25} // Пропорційний розмір тексту
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

Text.propTypes = {
  percentage: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

const Circular = ({ percentage, dye, size }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="circular-progress">
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <Circle dye="#F1F1F1" size={size} />
        <Circle dye={dye} pct={pct} size={size} />
      </g>
      <Text percentage={pct} size={size} />
    </svg>
  );
};

Circular.propTypes = {
  percentage: PropTypes.number.isRequired,
  dye: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Circular;
