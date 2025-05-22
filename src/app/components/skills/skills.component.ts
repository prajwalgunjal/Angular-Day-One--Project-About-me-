import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      skills: [
        {
          name: 'Angular',
          level: 60,
          description: 'Advanced knowledge in Angular framework, TypeScript, and RxJS'
        },
        {
          name: 'HTML/CSS/SCSS',
          level: 95,
          description: 'Semantic HTML, modern CSS features, and responsive design'
        },
        {
          name: 'JavaScript/TypeScript',
          level: 88,
          description: 'Modern ES6+ features and strong TypeScript implementation'
        }
      ]
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      skills: [
        {
          name: 'C# / .NET Core',
          level: 90,
          description: 'Building scalable APIs and microservices architecture'
        },
        {
          name: 'SQL Server',
          level: 80,
          description: 'Database design, optimization, and complex query writing'
        },
        {
          name: 'Kafka',
          level: 75,
          description: 'Event streaming and message queue implementation'
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        {
          name: 'Microsoft Azure',
          level: 82,
          description: 'App Services, Functions, Storage, and DevOps pipelines'
        },
        {
          name: 'AWS',
          level: 78,
          description: 'EC2, S3, Lambda, and serverless architecture'
        }
      ]
    }
  ];

  summaryItems = [
    {
      icon: '🎯',
      title: 'Complex Problem Solver',
      description: 'Analytical thinking and creative solutions to complex challenges'
    },
    {
      icon: '🚀',
      title: 'Better Performance Focus',
      description: 'Optimizing applications for speed, scalability, and user experience'
    },
    {
      icon: '🤝',
      title: 'Team Collaborator',
      description: 'Collaborative approach with strong communication skills'
    },
    {
      icon: '📚',
      title: 'Continuous Learner',
      description: 'Always staying updated with latest technologies and best practices'
    }
  ];

  tools = [
    'Visual Studio Code',
    'Visual Studio 2022',
    'Redis',
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'Postman',
    'Azure DevOps',
    'SQL Server Management Studio',
    'Slack'
  ];
}