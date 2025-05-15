
import React from 'react';
import { Link } from 'react-router-dom';

const LogoComponent: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/d2655e72-6265-4811-94f0-4ae457a7fbe1.png" 
        alt="Screw Crew Logo" 
        className="h-8"
      />
    </Link>
  );
};

export default LogoComponent;
