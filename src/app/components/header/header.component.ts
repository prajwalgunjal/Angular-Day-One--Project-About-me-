import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name = 'Prajwal Gunjal';
  title = 'Software Engineer';
  description = 'Dynamic full-stack developer with a love for clean UI and scalable backend systems.';
}