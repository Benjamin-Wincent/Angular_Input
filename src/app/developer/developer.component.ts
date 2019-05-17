import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model'

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;
  public skillArray: Skill[] =
  [new Skill('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 'https://github.com/')];

  constructor() { }

  ngOnInit() {
    this.developer = new Developer('VINCENT', 'Benjamin', 24, 'masculin', 'Développeur', this.skillArray);
  }

}
