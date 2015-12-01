import { Component, bootstrap, bind, FORM_PROVIDERS } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

@Component({
    selector: 'main-component',
    template: `
    <h1>{{title}}</h1>

    <p>Nitro Team Members:</p>

    <ul>
      <li *ng-for="#teamMember of teamMembers">
        <p><strong>{{ teamMember.name }}</strong></p>
        <p>{{ teamMember.position }}</p>
      </li>
    </ul>
  `
})

export class MainComponent {
    public title: string;
    public teamMembers: Array;

    constructor() {
        this.teamMembers =
            [{
                name: "Alberto",
                position: "Godlike Full Stack Developer"
            },
            {
                name: "Rafaello"
                position: "Godlike Full Stack Developer"
            }, {
                name: "Bulgario"
                position: "Godlike Front End Stack Developer"
            }, {
                name: "Fuknie"
                position: "Masta QA / Project Manager"
            }];
        this.title = "Title Test";
    }
}
