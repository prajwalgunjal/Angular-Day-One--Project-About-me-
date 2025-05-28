import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ContactComponent } from './components/contact/contact.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'header', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'twowaybinding', component: TwoWayBindingComponent },
  {path: 'contact', component: ContactComponent},
  { path: 'contact-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent }
];