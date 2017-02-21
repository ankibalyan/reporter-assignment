import React, { Component, PropTypes } from 'react';

const Graph = ({value = 0}) => {
  const radius = 90;
  const circumference =  2 * radius * Math.PI;
  const offset = circumference - circumference * value / 100;

  return (
    <svg
        className="graph"
        width="200"
        height="200"
        viewBox="0 0 200 200">
        <circle
            className="circle-bg"
            cx="100"
            cy="100"
            r={radius}
            strokeWidth="20px" />
        <circle
            className="circle-fg"
            cx="100"
            cy="100"
            r={radius}
            strokeWidth="20px"
            style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset
            }} />
        <text
            className="graph-text"
            x="100"
            y="100"
            dy=".4em"
            textAnchor="middle">
            {value}%
        </text>
    </svg>
  );
}

Graph.propTypes = {
  value: PropTypes.number
}

export {Graph};
