


import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  textString: string ;
  Arraytext: Array<string> ;
  resultArray:  Array<number> ;
  disabled: boolean ;
  showBar = false ;
  updatedArray: Array<number> ;
ngOnInit() {
  if ( localStorage.getItem('tags')) {
     const tags = localStorage.getItem('tags') ;
     this.addTags(tags , false) ;
  }
}
addTags(textArea , updateFlags = true ) {
  if (updateFlags) {
  this.textString = textArea.textString ;
  } else {
    this.textString = textArea ;
  }
  this.showBar = true ;
  this.Arraytext = this.textString.split(/[ ,;\n]+/)  ;
  this.resultArray =  this.Arraytext.filter( x => /^-?\d+$/.test(x)).map(x => parseInt(x, 10) ) ;
   this.textString = null ;
   localStorage.setItem('tags' , this.resultArray.toString() );
console.log(this.resultArray);
}
delete(i) {
  if (localStorage.getItem('tags')) {
    const tags = localStorage.getItem('tags') ;
    const ArrayTags =  tags.split(/[ ,;\n]+/)  ;
    this.resultArray =  ArrayTags.filter( x => /^-?\d+$/.test(x)).map(x => parseInt(x,10) ) ; 
    this.resultArray.splice(i, 1) ;
    localStorage.setItem('tags', this.resultArray.toString() );
 }
  this.resultArray.splice(i, 1) ;
}
updateTags(tags) {
  this.addTags(tags, false);
}
}
