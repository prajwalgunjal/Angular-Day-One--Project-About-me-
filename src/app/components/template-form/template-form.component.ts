import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add these
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  // Form data model for two-way data binding
  formData = {
    name: '',
    email: '',
    phoneNumber: '',
    location: ''
  };

  // Current date for datetime pipe demonstration
  currentDate = new Date();

  // Sample data for JSON pipe demonstration
  sampleUser = {
    id: 1,
    username: 'john_doe',
    isActive: true,
    lastLogin: new Date(),
    preferences: {
      theme: 'dark',
      notifications: true
    }
  };

  // Form submission handler
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted Successfully!');
      console.log('Form Data:', this.formData);
      alert('Form submitted successfully! Check console for details.');
    } else {
      console.log('Form is invalid');
      alert('Please fill all required fields correctly.');
    }
  }

  // Reset form
  onReset(form: any) {
    form.resetForm();
    this.formData = {
      name: '',
      email: '',
      phoneNumber: '',
      location: ''
    };
  }
}