
import React from 'react';
import { Link } from 'react-router-dom';

const LogoComponent: React.FC = () => {
  return (
    <Link to="/" className="flex items-center p-2">
      <img 
        src="/lovable-uploads/ffbf8b42-4ab1-4ab2-9fc5-6e5f2aaf6b4b.png" 
        alt="Screw Crew Logo" 
        className="h-16"
      />
    </Link>
  );
};

export default LogoComponent;
