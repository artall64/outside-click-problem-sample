import {AfterViewChecked, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
})
export class TileComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    console.log('checked');
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: any): void {
  }

}
