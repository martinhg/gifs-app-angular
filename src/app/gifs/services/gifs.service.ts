import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* providedIn: 'root' --> Hace que este servicio este disponible en todos lados donde se inyecte sin export/importar */
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'nccFHOLVMiNIDaJbVAiyCVeIVgocwyh2';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private readonly http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http
      .get(
        `${this.serviceUrl}/search`, { params }
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }
}
