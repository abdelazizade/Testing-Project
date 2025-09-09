import { Signal } from "@angular/core";
import { Observable } from "rxjs";

export interface Ipost {
  id: string;
  title: string;
  body: string;
}

export interface IapiService {
  isLoading: any;
  getData(): Observable<any>;
  getDataById(): Observable<Ipost>
}