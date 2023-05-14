import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  @Input() customerName: string;

  constructor(public activeModal: NgbActiveModal) {}

  submitForm(): void {
    if (this.customerName) {
      this.activeModal.close(this.customerName);
    }
  }

  closeModal(): void {
    this.activeModal.dismiss('Dismissed');
  }
}
