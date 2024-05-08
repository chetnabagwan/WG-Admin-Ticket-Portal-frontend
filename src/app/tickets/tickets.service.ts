import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TicketInterface } from "./tickets.interface";

@Injectable({
    providedIn: 'root'
})
export class TicketsService {

    ticket: TicketInterface = {
        ticket_id: "TKT1234",
        created_at: "2024-07-21T17:32:28Z",
        updated_at: "2024-07-22T17:32:28Z",
        category_name: "foodandbeverages",
        priority: "critical",
        related_people: {
          assignee: {
            email: "user@gmail.com",
            full_name: "Dharmendra Singh",
            phone_number: "+918009908791",
            role: "employee"
          },
          reporter: {
            email: "user@gmail.com",
            full_name: "Milind Bhatnagar",
            phone_number: "+918009908791",
            role: "employee"
          }
        },
        comments: [
          {
            text: "Ok I will do that",
            created_at: "2024-07-21T17:32:28Z",
            author: "Bishal",
            comment_id: "c1234bg",
            special_message: "Auto-generated"
          }
        ],
        history: [
          {
            text: "Ticket Edited",
            created_at: "2024-07-21T17:32:28Z"
          }
        ],
        stage: "raised",
        details: [
            {
                name: "Subject",
                value: "Subject goes here....",
                type: "text"
            },
            {
                name: "Description",
                value: "Description goes here...",
                type: "text"
            },
            {
                name: "Image Reference",
                value: "https://imgs.search.brave.com/ABQeHYzsotXRtzgy7kk9MEyCcFdKXElY65B9O2pBIcU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mb29kLWRyaW5r/cy1kZWxpY2lvdXMt/bHVuY2gtYWktZ2Vu/ZXJhdGVkXzQwNjkz/OS05MzEyLmpwZz9z/aXplPTYyNiZleHQ9/anBn",
                type: "image"
            }
        ],
        stages_allowed: ["in-progress", "review"]
    }
    myObs: Observable<TicketInterface>;

    getTicketDetail() {
        this.myObs = new Observable((observer) => {
            observer.next(this.ticket);
        })
        return this.myObs;
    }
    
}