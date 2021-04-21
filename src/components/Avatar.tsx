import React from 'react';

const Avatar = ({ src }: { src: string | undefined }): JSX.Element => (
  <img src={src} alt="avatar" style={{ width: 23, height: 23, filter: 'invert(0)' }} />
);

export default Avatar;
