import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() childtitle: string='';

  @Input() d1:string='';

  @Input() d2:any='';

  title='hello this is template reference varaible'

  constructor() {
  }
}
