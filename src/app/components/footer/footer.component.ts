import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
   imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
  
})
export class FooterComponent {
  email = 'Prajwalgunjal8@gmail.com';
  linkedinHandle = 'prajwal-gunjal';
  linkedinUrl = 'https://www.linkedin.com/in/prajwal-gunjal';
  currentYear = new Date().getFullYear();
}