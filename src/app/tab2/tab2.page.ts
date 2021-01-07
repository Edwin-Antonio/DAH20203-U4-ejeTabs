import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  constructor(private service: EstudianteService) {
    this.service.getStudents().subscribe(data => {
    this.students = data.map(e => {
      return {
        id: e.payload.doc.id, ...e.payload.doc.data()
      }as Estudiante;
    });
  });
}

}
