import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  student: Estudiante;
  constructor(private service: EstudianteService, private actroute: ActivatedRoute, private route: Router, private toast: ToastController){
    this.actroute.queryParams.subscribe( params => {
      if (params && params.special){
        this.student = JSON.parse(params.special) as Estudiante;
        console.log(this.student);
      }
    });
  }

  ngOnInit() {
  }

}
