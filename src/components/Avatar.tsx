import React from 'react';

const Avatar = ({ src, size }: { src: string | undefined; size: string }): JSX.Element => (
  <img src={src} alt="avatar" className={size} style={{ filter: 'invert(0)' }} />
);

export default Avatar;
