import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  projectsArray = [
    'assets/images/projects/IMG-20201020-WA0010.jpg', 'assets/images/projects/IMG-20201121-WA0007.jpg',
    'assets/images/projects/IMG-20201230-WA0013.jpeg'
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
