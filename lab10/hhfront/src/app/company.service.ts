import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company,Vacancy} from "./models"
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private client: HttpClient) { }
  getCompanies():Observable<Company[]>{
  return this.client.get<Company[]>('http://127.0.0.1:8000/api/companies');
  }
}