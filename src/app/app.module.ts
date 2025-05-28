import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <-- Add this
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { TemplateFormComponent } from './components/template-form/template-form.component'; // Add this import
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'; // Import the ReactiveFormComponent
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    TemplateFormComponent,
    ReactiveFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule // Add this for reactive forms 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }