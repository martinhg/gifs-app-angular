import { Injectable } from '@angular/core';

/* providedIn: 'root' --> Hace que este servicio este disponible en todos lados donde se inyecte sin export/importar */
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return { ...this._tagsHistory };
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }
}
