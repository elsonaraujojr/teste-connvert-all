import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmesAraujoService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiFilmes}/movies`;
  }

  get(): Promise<any> {
    return this.http.get(`${this.url}`).toPromise();
  }

  getById(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }
}
