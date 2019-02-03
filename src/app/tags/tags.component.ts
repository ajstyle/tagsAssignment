import { Component , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  constructor() { }
  @Input() textString: string ;
  @Output() deleteTag = new EventEmitter() ;


  delete(i) {
    this.deleteTag.emit(i) ;
  }
}
