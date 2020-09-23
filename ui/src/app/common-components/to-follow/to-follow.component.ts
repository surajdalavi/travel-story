import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-follow',
  templateUrl: './to-follow.component.html',
  styleUrls: ['./to-follow.component.scss'],
})
export class ToFollowComponent implements OnInit {
  @Input() title: String;

  constructor() {}

  ngOnInit() {}
}
