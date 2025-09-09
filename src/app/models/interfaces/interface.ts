import { Observable } from "rxjs";

export interface Ipost {
  id: string;
  title: string;
  body: string;
}

export interface IapiRepo {
  getData(): Observable<any>
  getDataById(): Observable<any>
}