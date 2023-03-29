import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

interface Skill {
  skill: string;
}

@Component({
  selector: 'app-busniess',
  templateUrl: './busniess.component.html',
  styleUrls: ['./busniess.component.scss'],
  providers: [MessageService],
})
export class BusniessComponent implements OnInit {
  skills: Skill[];
  selectedSkill: string[] = [];
  msgs1!: Message[];
  date: string = (new Date()).toISOString().substring(0,10);
  formattedSkills: string[] = [];

  mainForm = new UntypedFormGroup({
    fullName: new UntypedFormControl('', Validators.compose([Validators.required])),
    email: new UntypedFormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    telephone: new UntypedFormControl('', Validators.compose([Validators.required])),
    companyName: new UntypedFormControl('', Validators.compose([Validators.required])),
    NUIS: new UntypedFormControl('', Validators.compose([Validators.required])),
    location: new UntypedFormControl('', Validators.compose([Validators.required])),
    positionReq: new UntypedFormControl('', Validators.compose([Validators.required])),
    additionalSkill: new UntypedFormControl(''),
    noOfEmployees: new UntypedFormControl(
      '',
      Validators.compose([Validators.required])
    ),
    describe: new UntypedFormControl(''),
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
  }

  message() {
    this.msgs1 = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Bussniess Added Successfully',
      },
    ];
  }
  ngOnInit(): void {}

  get fullName() {
    return this.mainForm.get('fullName');
  }

  get email() {
    return this.mainForm.get('email');
  }

  get telephone() {
    return this.mainForm.get('telephone');
  }

  get companyName() {
    return this.mainForm.get('companyName');
  }

  get NUIS() {
    return this.mainForm.get('NUIS');
  }

  get location() {
    return this.mainForm.get('location');
  }

  get positionReq() {
    return this.mainForm.get('positionReq');
  }

  get noOfEmployees() {
    return this.mainForm.get('noOfEmployees');
  }

  get describe() {
    return this.mainForm.get('describe');
  }

  onSubmit() {
    for (let i = 0; i < this.selectedSkill.length; i++) {
      // Destructuring the skills. Initially was {selectedSkill: skill}
      this.formattedSkills.push(this.selectedSkill[i]['skill']);
    }
    let record = {
      fullName: this.mainForm.get('fullName').value,
      email: this.mainForm.get('email').value,
      telephone: this.mainForm.get('telephone').value,
      companyName: this.mainForm.get('companyName').value,
      NUIS: this.mainForm.get('NUIS').value,
      location: this.mainForm.get('location').value,
      skill: this.formattedSkills,
      positionReq: this.mainForm.get('positionReq').value,
      additionalSkill: this.mainForm.get('additionalSkill').value,
      noOfEmployees: this.mainForm.get('noOfEmployees').value,
      describe: this.mainForm.get('describe').value,
      date: this.mainForm.get('date').value,
    };
    this.firestoreService.addNewBusinessRecord(record).then((res) => {
      this.mainForm.reset();
      this.selectedSkill = [];
      this.message();
    });
  }
}
