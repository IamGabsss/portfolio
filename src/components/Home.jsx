import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Github, Facebook, Mail } from 'lucide-react';
import profileImage from '../assets/images/RevenJoe.jpg'; // Adjust the path to your image

const Home = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/IamGabss', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/your-facebook-profile', '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-secondary/20 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden border-4 border-white/20 shadow-lg">
              <img 
                src={profileImage} 
                alt="Reven Joe Gabasa"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
                      RJG
                    </div>
                  `;
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Reven Joe Gabasa</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Frontend Developer & Web Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate 24-year-old developer from Las Piñas specializing in creating 
              modern, responsive web applications with HTML, CSS, and JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={handleGithubClick}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={handleFacebookClick}
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                onClick={handleContactClick}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Home;