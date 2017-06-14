import {AfterViewChecked, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'tile',
  template: '<p>tile works!</p>'
})
export class TileComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    console.log('checked');
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: any): void {
  }

}
