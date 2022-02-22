import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menu:any = [
    {
      "menu_id": "1",
      "image": "../../../assets/assignment.png",
      "title": "Assignment"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/holidays.png",
      "title": "Holidays"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/ideas.png",
      "title": "Ideas"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/results.png",
      "title": "Results"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/schedule.png",
      "title": "Schedule"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/date.png",
      "title": "Date"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/conversation.png",
      "title": "Conversation"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/gallery.png",
      "title": "Gallery"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/date2.png",
      "title": "Date Two"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/gallery.png",
      "title": "Gallery"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/calendar3.png",
      "title": "Calendar Three"
    },
    {
      "menu_id": "1",
      "image": "../../../assets/lock.png",
      "title": "Lock"
    }
  ]

  constructor() {}

  goToPage(item){

  }

}
