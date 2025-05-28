import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  openContactForm() {
    // Navigate to the template form component
    this.router.navigate(['/contact-form']);
  }
  openReactiveForm(): void {
    this.router.navigate(['/reactive-form']);
    console.log('Opening Reactive Form');
  }

}
