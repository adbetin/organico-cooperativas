import {Component, OnInit, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import {ListadoCooperativaService} from './listadoCooperativa.service';
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: 'app-listadocooperativa',
  templateUrl: './listadoCooperativa.component.html',
  styleUrls: ['./listadoCooperativa.component.css'],
  providers: [
    ListadoCooperativaService
  ]
})

export class ListadoCooperativaComponent implements OnInit {
  title = 'Listado cooperativas';

  cooperativas: any[] = new Array();
  sizeDescripcion: number = 120;
  displayedColumns = ['nombre', 'nit', 'responsable', 'id'];
  dataSource: CooperativaDataSource = null;

  private emailModel: {
    subject: string,
    message: string,
    cooperativaId: number,
    cooperativaName: string
  } = {
    subject: "",
    message: "",
    cooperativaId: 0,
    cooperativaName: ""
  };


  constructor(private listadoCooperativaServices: ListadoCooperativaService,
              public dialog: MatDialog) {
  }

  openDialog(cooperativa: any): void {
    this.emailModel.cooperativaId = cooperativa.id;
    this.emailModel.cooperativaName = cooperativa.nombre;

    let dialogRef = this.dialog.open(AnnouncementDialog, {
      width: '400px',
      data: this.emailModel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.emailModel = {
        subject: "",
        message: "",
        cooperativaId: 0,
        cooperativaName: ""
      };
    });
  }

  ngOnInit() {
    this.listadoCooperativaServices.getCooperativas()
      .subscribe(cooperativas => {
        let grupoCooperativa: any[] = new Array();
        let contador: number = 0;
        let index: number = 0;
        for (let cooperativa of cooperativas) {
          contador++;
          grupoCooperativa.push(cooperativa);

          if (contador == 3 || index == cooperativas.length - 1) {
            this.cooperativas.push(grupoCooperativa);
            grupoCooperativa = new Array();
            contador = 0;
          }
          index++;
        }
        /* this.cooperativas = cooperativas; */
        /*console.log(this.cooperativas );*/
        this.dataSource = new CooperativaDataSource(this.cooperativas);
      });
  }
}

export class CooperativaDataSource extends DataSource<any> {
  constructor(private data: any) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }

  disconnect() {
  }
}

@Component({
  selector: 'announcement-dialog',
  template: `
    <div class="loading-indicator" *ngIf="loading">
      <mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>
    </div>
    <h1 mat-dialog-title>Enviar anuncio a {{data.cooperativaName}}</h1>
    <div mat-dialog-content>
      <div role="form">
        <div class="form-group">
          <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" [(ngModel)]="data.subject" required>
        </div>
        <div class="form-group">
          <textarea class="form-control" type="textarea" id="message" placeholder="Message"
                    rows="7" [(ngModel)]="data.message"></textarea>
        </div>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onSendMessage()" tabindex="2">Enviar Mensaje</button>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <button mat-button (click)="onNoClick()" tabindex="-1">Cancelar</button>
    </div>
  `,
})
export class AnnouncementDialog {
  options: RequestOptions;
  private loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<AnnouncementDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private http: Http) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json; charset=utf-8");
        headers.append("Cache-Control", "no-cache");
        headers.append("Cache-Control", "no-store");
        headers.append("X-CsrfToken", document.cookie.split("csrftoken=")[1]);
        this.options = new RequestOptions({ headers: headers, withCredentials: true });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSendMessage(): void {
    this.loading = true;
    this.http.post("/cooperativa/correoAnuncio", this.data, this.options).toPromise()
      .then(res => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
