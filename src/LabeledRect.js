
import React from 'react';
import { minWidthToDisplayText, textHeight } from './constants';

import styles from './LabeledRect.css';


const LabeledRect = ({
  backgroundColor,
  color,
  disableDefaultTooltips,
  height,
  isDimmed = false,
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  tooltip,
  width,
  x,
  y,
}) => (
  <g
    className={styles.g}
    transform={`translate(${x},${y})`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
  >
    {disableDefaultTooltips ? null : (
      <title>{tooltip != null ? tooltip : label}</title>
    )}
    <rect width={width} height={height} fill="white" className={styles.rect} />
    <rect
      width={width}
      height={height}
      fill={backgroundColor}
      onClick={onClick}
      className={styles.rect}
      style={{
        opacity: isDimmed ? 0.5 : 1,
      }}
    />
    {width >= minWidthToDisplayText && (
      <foreignObject
        width={width}
        height={height}
        className={styles.foreignObject}
        style={{
          opacity: isDimmed ? 0.75 : 1,
          paddingLeft: x < 0 ? -x : 0,
        }}
        y={height < textHeight ? -textHeight : 0}
      >
        <div className={styles.div} style={{ color }}>
          {label}
        </div>
      </foreignObject>
    )}
  </g>
);

export default LabeledRect;
