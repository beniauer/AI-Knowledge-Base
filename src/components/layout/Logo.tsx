
import React from 'react';
import { Link } from 'react-router-dom';

const LogoComponent: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="text-xl font-bold">
        <span className="text-primary">Screw Crew</span>
        <span className="text-secondary"> KB</span>
      </div>
    </Link>
  );
};

export default LogoComponent;
