import { Injectable } from '@angular/core';

/* providedIn: 'root' --> Hace que este servicio este disponible en todos lados donde se inyecte sin export/importar */
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }
}
