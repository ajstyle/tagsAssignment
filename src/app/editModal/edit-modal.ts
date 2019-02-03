import {Component, Input, Output,EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.html'
})
export class EditModalComponent {
  closeResult: string;
  @Input() updateString ;
  @Output() newString  = new EventEmitter();
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  update(text) {
    console.log('updates' , text.updateString) ;
    this.newString.emit(text.updateString.toString()) ;
    this.modalService.dismissAll() ;
  }

}
