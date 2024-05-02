import { Component, OnInit } from '@angular/core';
import { GetMedicionService } from '../services/get-medicion.service';
import { ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {
  
  id: number = 0;
  listado: any[] = [];
  private unsubscribe$ = new Subject<void>();
  value = 0;
  elemento: any
  medicion: any;

  constructor(
    private _actRouter: ActivatedRoute,
    private router: Router,
    private medicionService: GetMedicionService) { }

  ngOnInit() {
    this.id = Number(this._actRouter.snapshot.paramMap.get('id'));
    this.medicionService.getUltimaMedicion(this.id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data: any[]) => {
      this.listado = data;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  irAInicio() {
    this.router.navigate(['/home']);
  }

  Mediciones(elemento: any){
    console.log("vamos a mediciones");
    console.log(elemento)
    this.router.navigate(['mediciones'],{
      state:{elemento}//elemento
    });
  }

  Logs(elemento:any){
    console.log("a logs");
    this.router.navigate(['logs'],{
      state:{elemento}//elemento
    });
  }

  Electrovalvula(elemento:any){
    console.log("abrir EV");
    this.router.navigate(['EV'],{
      state:{elemento}//elemento
    });
  }



}
