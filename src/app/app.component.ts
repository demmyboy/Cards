import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: 'Neat Trees',
    imageUrl:'assets/Bims.jpg', 
    userName:'@demmy', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculi'
  }, 
  {
    title: 'Demmy Trees',
    imageUrl:'assets/Demmy.jpg', 
    userName:'@bims', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis'
  }, 
  {
    title: 'Mahid Trees',
    imageUrl:'assets/oil.jpg', 
    userName:'@Mahid', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec '
  }, 
  {
    title: 'Mahid Trees',
    imageUrl:'assets/oil.jpg', 
    userName:'@Mahid', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec '
  }, 
  {
    title: 'Mahid Trees',
    imageUrl:'assets/oil.jpg', 
    userName:'@Mahid', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec '
  }, 
];
}
