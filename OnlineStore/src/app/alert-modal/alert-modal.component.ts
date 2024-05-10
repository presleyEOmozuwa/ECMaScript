import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() res: any;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick(){
    this.close.emit();
  }

}
