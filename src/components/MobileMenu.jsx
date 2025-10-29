import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const MobileMenu = ({ activeSection, setActiveSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleItemClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-background border-b border-border p-4 space-y-2 z-50">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => handleItemClick(item.id)}
              className="w-full justify-start"
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;