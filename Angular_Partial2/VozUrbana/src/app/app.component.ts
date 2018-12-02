import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  //   trigger('myAnimation', [
  //     transition('* => *', [
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 })],
  //         { optional: true }
  //       ),
  //       query(
  //         ':leave',
  //          [style({ opacity: 1 }), animate('0.4s', style({ opacity: 0 }))],
  //         { optional: true }
  //       ),
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
  //         { optional: true }
  //       )
  //     ])
  //   ]);
  ] // register the animations
})

export class AppComponent {
  title = 'VozUrbana';
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }
}