import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = 'Prajwalgunjal8@gmail.com';
  linkedinHandle = 'prajwal-gunjal';
  linkedinUrl = 'https://www.linkedin.com/in/prajwal-gunjal';
  currentYear = new Date().getFullYear();
}
