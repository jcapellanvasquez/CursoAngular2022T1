import { Component } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personas: Persona[] = [];
  public condicionSW = 3;
  title = 'componentes';

  constructor() {
    this.personas = [
      {
        "id": 1,
        "nombre": "Jamesy Uman",
        "titulo": "Nurse",
        "bio": "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque"
      }, {
        "id": 2,
        "nombre": "Evonne Dumbare",
        "titulo": "Business Systems Development Analyst",
        "bio": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate"
      }, {
        "id": 3,
        "nombre": "Faydra Colliver",
        "titulo": "Senior Editor",
        "bio": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit"
      }, {
        "id": 4,
        "nombre": "Ingamar Kinnoch",
        "titulo": "Programmer Analyst II",
        "bio": "eu sapien cursus vestibulum proin eu mi nulla ac enim in"
      }, {
        "id": 5,
        "nombre": "Robin Jeannin",
        "titulo": "Pharmacist",
        "bio": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non"
      }, {
        "id": 6,
        "nombre": "Lilith Jarlmann",
        "titulo": "Financial Advisor",
        "bio": "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante"
      }, {
        "id": 7,
        "nombre": "Paola Drohan",
        "titulo": "Software Engineer IV",
        "bio": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate"
      }, {
        "id": 8,
        "nombre": "Gussi Chafer",
        "titulo": "Actuary",
        "bio": "nunc purus phasellus in felis donec semper sapien a libero nam"
      }, {
        "id": 9,
        "nombre": "Matias Thal",
        "titulo": "Software Engineer IV",
        "bio": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut"
      }, {
        "id": 10,
        "nombre": "Tripp Schimann",
        "titulo": "Software Engineer IV",
        "bio": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus"
      }, {
        "id": 11,
        "nombre": "Mateo Simms",
        "titulo": "Web Designer",
        "bio": "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus"
      }, {
        "id": 12,
        "nombre": "Todd Enderlein",
        "titulo": "Pharmacist",
        "bio": "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat"
      }, {
        "id": 13,
        "nombre": "Ellis Gleadle",
        "titulo": "Software Engineer IV",
        "bio": "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a"
      }, {
        "id": 14,
        "nombre": "Wiley Kennifeck",
        "titulo": "Pharmacist",
        "bio": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non"
      }, {
        "id": 15,
        "nombre": "Frasier Demange",
        "titulo": "Data Coordiator",
        "bio": "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et"
      }, {
        "id": 16,
        "nombre": "Lynna Worters",
        "titulo": "Teacher",
        "bio": "ante ipsum primis in faucibus orci luctus et ultrices posuere"
      }, {
        "id": 17,
        "nombre": "Ruthy Fawthrop",
        "titulo": "Clinical Specialist",
        "bio": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue"
      }, {
        "id": 18,
        "nombre": "Tyrus Seller",
        "titulo": "Clinical Specialist",
        "bio": "orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis"
      }, {
        "id": 19,
        "nombre": "Sosanna Mulvey",
        "titulo": "Software Test Engineer IV",
        "bio": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede"
      }, {
        "id": 20,
        "nombre": "Karena Chiddy",
        "titulo": "Web Designer",
        "bio": "in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc"
      }
    ];
  }
}
