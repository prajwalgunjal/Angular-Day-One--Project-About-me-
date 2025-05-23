// components/two-way-binding/two-way-binding.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  @Input() name: string = 'Prajwal Gunjal';
  @Input() title: string = 'Software Engineer';
  @Input() skills: string[] = ['Angular', 'C#', 'Go', 'C++'];
  @Input() passion: string = 'Writing Dynamic and Scalable Code';

  @Output() nameChange = new EventEmitter<string>();
  @Output() titleChange = new EventEmitter<string>();
  @Output() skillsChange = new EventEmitter<string[]>();
  @Output() passionChange = new EventEmitter<string>();

  isEditMode = false;
  
  editableData = {
    name: this.name,
    title: this.title,
    skills: [...this.skills],
    passion: this.passion
  };

  // Sample data for random generation
  private sampleNames = ['Karan Depale', 'Amit Nayak', 'Smita Mujumdar', 'Pratiksha pohakar', 'Rajshree Ghavane'];
  private sampleTitles = ['Frontend Developer', 'Backend Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Mobile Developer'];
  private sampleSkills = [
    ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    ['Vue.js', 'Python', 'Docker', 'AWS'],
    ['Angular', 'Java', 'Spring Boot', 'MongoDB'],
    ['Flutter', 'Dart', 'Firebase', 'Swift'],
    ['Next.js', 'PostgreSQL', 'Redis', 'Kubernetes']
  ];
  private samplePassions = [
    'Building scalable web applications',
    'Creating beautiful user experiences',
    'Solving complex algorithms',
    'Automating development workflows',
    'Contributing to open source projects'
  ];

  ngOnInit() {
    this.syncEditableData();
  }

  ngOnChanges() {
    this.syncEditableData();
  }

  private syncEditableData() {
    this.editableData = {
      name: this.name,
      title: this.title,
      skills: [...this.skills],
      passion: this.passion
    };
  }

  get skillsString(): string {
    return this.editableData.skills.join(', ');
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.saveChanges();
    }
  }

  onDataChange() {
    // Real-time updates while editing
    this.emitChanges();
  }

  updateSkills(event: any) {
    const skillsText = event.target.value;
    this.editableData.skills = skillsText
      .split(',')
      .map((skill: string) => skill.trim())
      .filter((skill: string) => skill.length > 0);
    this.onDataChange();
  }

  removeSkill(skillToRemove: string) {
    this.editableData.skills = this.editableData.skills.filter(skill => skill !== skillToRemove);
    this.onDataChange();
  }

  resetToDefaults() {
    this.editableData = {
      name: 'Prajwal Gunjal',
      title: 'Software Engineer',
      skills: ['Angular', 'C#', 'Go', 'C++'],
      passion: 'Writing Dynamic and Scalable Code'
    };
    this.onDataChange();
  }

  fillRandomData() {
    const randomIndex = Math.floor(Math.random() * this.sampleNames.length);
    this.editableData = {
      name: this.sampleNames[randomIndex],
      title: this.sampleTitles[randomIndex],
      skills: [...this.sampleSkills[randomIndex]],
      passion: this.samplePassions[randomIndex]
    };
    this.onDataChange();
  }

  private saveChanges() {
    this.emitChanges();
  }

  private emitChanges() {
    this.nameChange.emit(this.editableData.name);
    this.titleChange.emit(this.editableData.title);
    this.skillsChange.emit([...this.editableData.skills]);
    this.passionChange.emit(this.editableData.passion);
  }

  trackBySkill(index: number, skill: string): string {
    return skill;
  }
}