import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ld-jumbotron-section',
  templateUrl: './jumbotron-section.component.html',
  styleUrls: ['./jumbotron-section.component.scss']
})
export class JumbotronSectionComponent implements OnInit {

  @Input() title:string;
  @Input() transparent:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
