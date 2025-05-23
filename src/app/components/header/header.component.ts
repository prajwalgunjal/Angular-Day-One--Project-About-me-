// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import from your main components folder
import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TwoWayBindingComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name = 'Prajwal Gunjal';
  title = 'Software Engineer';
  description = 'Dynamic full-stack developer with a love for clean UI and scalable backend systems.';
  skills = ['Angular', 'C#', 'Go', 'C++'];
  passion = 'Writing Dynamic and Scalable Code';

  // Two-way binding event handlers
  updateName(newName: string) {
    this.name = newName;
    console.log('Name updated:', newName);
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
    console.log('Title updated:', newTitle);
  }

  updateSkills(newSkills: string[]) {
    this.skills = newSkills;
    console.log('Skills updated:', newSkills);
  }

  updatePassion(newPassion: string) {
    this.passion = newPassion;
    console.log('Passion updated:', newPassion);
  }
}