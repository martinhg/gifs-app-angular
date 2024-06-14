import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar gif..." (keyup.enter)="searchTag()" #searchInput>
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

  constructor() {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    console.log({ newTag});
  }

}
