import { Component, OnInit } from '@angular/core'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faHandScissors, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  faHome = faHome
  faCalendar = faCalendar
  faHandScissors = faHandScissors
  faInfoCircle = faInfoCircle
  faPenToSquare = faPenToSquare
  constructor() {}

  ngOnInit() {}
}
