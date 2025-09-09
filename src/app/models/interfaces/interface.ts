import { Observable } from "rxjs";

export interface Ipost {
  id: string;
  title: string;
  body: string;
}

export interface IapiService {
  getData(): Observable<any>;
  getDataById(): Observable<Ipost>
}