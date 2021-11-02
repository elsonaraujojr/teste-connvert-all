import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilmesAraujoService } from './services/filmes-araujo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Test Connvet';
  filmesAraujo: any;
  filmesFerraz: any;

  headers = [
    'Nome',
    'Ano',
    'Diretor',
    'Gênero',
    'Descrição',
    'Pôster'
  ];

  constructor(
    private filmesAraujoService: FilmesAraujoService,
  ) {}

  ngOnInit() {
    this.pesquisar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pesquisar();
  }

  async pesquisar() {
    this.filmesAraujo = await this.filmesAraujoService.get();
  }
}
