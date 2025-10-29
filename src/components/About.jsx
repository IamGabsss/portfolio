import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Book, Award, Palette, Database, Code } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      category: "College",
      icon: <GraduationCap className="w-6 h-6" />,
      items: ["Cavite State University - Bacoor Campus", "Bachelor of Science in Computer Science", "2020 - 2024"]
    },
    {
      category: "Senior High School",
      icon: <Book className="w-6 h-6" />,
      items: ["Las Piñas City National Senior High School", "ICT - Programming", "2018 - 2020"]
    },
    {
      category: "High School",
      icon: <Award className="w-6 h-6" />,
      items: ["Las Piñas East National High School", "2014 - 2018"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      items: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: ["Python","Java","MongoDB"]
    },
    {
      category: "Tools",
      icon: <Code className="w-6 h-6" />,
      items: ["Git", "VS Code", "Figma", "Vercel"]
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border p-1">
            <Button
              variant={activeTab === 'education' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('education')}
            >
              Education
            </Button>
            <Button
              variant={activeTab === 'skills' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </Button>
          </div>
        </div>

        {activeTab === 'education' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {education.map((eduGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {eduGroup.icon}
                    {eduGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {eduGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skillGroup.icon}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;