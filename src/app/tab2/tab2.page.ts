import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public obj: object;
  public students: Estudiante[];
  constructor(private service: EstudianteService, private router: Router) {
    this.service.getStudents().subscribe(data => {
    this.students = data.map(e => {
      return {
        id: e.payload.doc.id, ...e.payload.doc.data() as Estudiante
        };
        });
     });
  }

  update(student: Estudiante, active: boolean){
    student.active = active;
    this.service.updateStudent(student, student.controlnumber);
  }

  detail(student: Estudiante){
    const navext: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)
      }
    };
    this.router.navigate(['/detail'], navext);
  }
}

