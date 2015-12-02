var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var MainComponent = (function () {
    function MainComponent() {
        this.teamMembers =
            [{
                    name: "Alberto",
                    position: "Godlike Full Stack Developer"
                },
                {
                    name: "Rafaello",
                    position: "Godlike Full Stack Developer"
                },
                {
                    name: "Bulgario",
                    position: "Godlike Front End Stack Developer"
                },
                {
                    name: "Fuknie",
                    position: "Masta QA / Project Manager"
                }];
        this.title = "Title Test";
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'main-component',
            template: "\n    <h1>{{title}}</h1>\n\n\n\n    <p>Nitro Team Members:</p>\n\n    <ul>\n      <li *ng-for=\"#teamMember of teamMembers\">\n        <p><strong>{{ teamMember.name }}</strong></p>\n        <p>{{ teamMember.position }}</p>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
exports.MainComponent = MainComponent;
