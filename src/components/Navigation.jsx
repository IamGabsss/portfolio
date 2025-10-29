import React from 'react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navigation = ({ activeSection, setActiveSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text">Reven Joe's Portfolio</div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => handleNavClick(item.id)}
                className="transition-all duration-300"
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation - Visible only on mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <MobileMenu 
              activeSection={activeSection} 
              setActiveSection={setActiveSection}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;