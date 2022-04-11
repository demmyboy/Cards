import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // tyingh the data to a component 
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() userName = '';
  @Input() content = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
