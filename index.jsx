import React from 'react'
import PropTypes from 'prop-types';

const isCollinear = (p1, p2, p3) => {
    return (p1.y - p2.y) * (p1.x - p3.x) == (p1.y - p3.y) * (p1.x - p2.x);
}

const moveTo = (b, a, r) => {
    const vector = {x: b.x - a.x, y: b.y - a.y};
    const length = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    const unitVector =  {x: vector.x / length, y: vector.y / length};
    return {x: a.x + unitVector.x * r, y: a.y + unitVector.y * r};
}

export const PathLine = ({ points, r, ...other }) => {
    const path = points
                    .slice(1)
                    .reduce((acc, p, i, points) => {
                                let next = points[i + 1];
                                let prev = acc[acc.length - 1];

                                if (next && !isCollinear(prev.point, p, next)) {
                                    let before = moveTo(prev.point, p, r);
                                    let after = moveTo(next, p, r);
                                    return acc.concat({
                                        point:p,
                                        s:`L ${before.x} ${before.y} S ${p.x} ${p.y} ${after.x} ${after.y} `
                                    })
                                } else {
                                    return acc.concat({
                                        point:p,
                                        s:`L ${p.x} ${p.y} `
                                    })
                                };
                            }
                            , [{
                                point: points[0],
                                s: `M ${points[0].x} ${points[0].y} `
                            }])
                    .map(p => p.s)
                    .join('');
    return (
        <path d={path} {...other} />
    )
};

PathLine.propTypes = {
  points: PropTypes.array.isRequired,
  r: PropTypes.number.isRequired
}
