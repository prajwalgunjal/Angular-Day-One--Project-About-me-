import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Passionate Software Engineer';
  bio = 'Passionate full-stack developer with a love for clean UI and scalable backend systems. I enjoy crafting efficient solutions and learning new technologies to solve complex problems. With a strong foundation in modern web development and cloud technologies, I strive to create applications that make a difference.';

  highlights = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'End-to-end application development with modern technologies'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      description: 'Scalable solutions using Azure and AWS cloud platforms'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Building Dynamic, fast, efficient, and user-friendly applications'
    }
  ];

  stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '99.99%', label: 'Self Satisfaction' }
  ];
}