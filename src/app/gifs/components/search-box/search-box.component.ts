import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gif..."
      (keyup.enter)="searchTag()"
      #searchInput
    />
  `,
})
/*
  !Important:
  * keyup = Cuando la tecla se levanto
  * Keydown = Cuando el usuario empieza a hundir la tecla
  * Keypress = Cuando ya presiono la tecla
*/
export class SearchBoxComponent {
  @ViewChild('searchInput')
  private tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService,
  ) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
