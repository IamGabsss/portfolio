import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import coffeeShopImage from '../assets/images/coffee-shop.png';
import lyricsVideoImage from '../assets/images/lyrics-video.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "Simple Coffee Shop Website made with HTML and CSS.",
      technologies: ["HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/IamGabss/2QM5GABASA",
      demo: "https://iamgabss.github.io/2QM5GABASA/",
      image: coffeeShopImage,
    },
    {
      id: 2,
      title: "Lyrics Video",
      description: "Simple Lyrics Video made with HTML and CSS.",
      technologies: ["HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/IamGabss/2QM3GABASA",
      demo: "https://iamgabss.github.io/2QM3GABASA/",
      image: lyricsVideoImage,
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-secondary/10 to-primary/10 dark:bg-gradient-to-br dark:from-accent/5 dark:to-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience 
          in web development.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border p-1">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'ghost'}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;