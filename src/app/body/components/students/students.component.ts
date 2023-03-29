import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { Message, MessageService } from 'primeng/api';

interface Skill {
  skill: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [MessageService],
})
export class StudentsComponent implements OnInit {
  skills: Skill[];
  selectedSkill: string[] = [];
  // show only day month and year
  date: string = (new Date()).toISOString().substring(0,10);
  formattedSkills: string[] = [];

  msgs1: Message[] = [];

  mainForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.compose([Validators.required])),
    lastName: new UntypedFormControl('', Validators.compose([Validators.required])),
    telephone: new UntypedFormControl('', Validators.compose([Validators.required])),
    email: new UntypedFormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    position: new UntypedFormControl('', Validators.compose([Validators.required])),
    additionSkills: new UntypedFormControl(''),
    employeeNo: new UntypedFormControl('', Validators.compose([Validators.required])),
    experience: new UntypedFormControl(''),
    date: new UntypedFormControl((new Date()).toISOString().substring(0,10)),
  });

  constructor(
    private firestoreService: FirestoreService,
    private messageService: MessageService
  ) {
    this.skills = [
      { skill: 'Java' },
      { skill: 'PHP' },
      { skill: '.NET' },
      { skill: 'JavaScript' },
      { skill: 'Angular' },
      { skill: 'React' },
      { skill: 'Vue.js' },
      { skill: 'Flutter' },
      { skill: 'Other' }
    ];

    console.log(this.date)
  }

  ngOnInit(): void {}

  get name() {
    return this.mainForm.get('name');
  }

  get lastName() {
    return this.mainForm.get('lastName');
  }

  get telephone() {
    return this.mainForm.get('telephone');
  }

  get email() {
    return this.mainForm.get('email');
  }

  get skill() {
    return this.mainForm.get('skills');
  }

  get position() {
    return this.mainForm.get('position');
  }

  get additionSkills() {
    return this.mainForm.get('additionSkills');
  }

  get employeeNo() {
    return this.mainForm.get('employeeNo');
  }

  get experience() {
    return this.mainForm.get('experience');
  }

  message() {
    this.msgs1 = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Student Added Successfully',
      },
    ];
  }

  onSubmit() {
    for (let i = 0; i < this.selectedSkill.length; i++) {
      // Destructuring the skills. Initially was {selectedSkill: skill}
      this.formattedSkills.push(this.selectedSkill[i]['skill']);
    }
    let record = {
      firstName: this.mainForm.get('name').value,
      lastName: this.mainForm.get('lastName').value,
      telephone: this.mainForm.get('telephone').value,
      email: this.mainForm.get('email').value,
      skills: this.formattedSkills,
      position: this.mainForm.get('position').value,
      experience: this.mainForm.get('experience').value,
      additionSkills: this.mainForm.get('additionSkills').value,
      employeeNo: this.mainForm.get('employeeNo').value,
      date: this.mainForm.get('date').value,
    };
    this.firestoreService.addNewStudentRecord(record).then((res) => {
      this.mainForm.reset();
      this.selectedSkill = [];
      this.message();
    });
  }
}
