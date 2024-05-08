import { EmployeeInterface } from "../employee/employee.interface";

export class TicketInterface {
    ticket_id: string;
    created_at: string;
    updated_at?: string;
    related_people: RelatedPeopleInterface;
    priority: string;
    category_name: string;
    stage: string;
    history?: HistoryInterface[];
    comments?: CommentInterface[];
    details?: TicketDetailInterface[];
    resolved_at?: string;
    stages_allowed: string[];
}

export class CommentInterface {
    comment_id: string;
    author: string;
    text: string;
    created_at: string;
    special_message: string;
}

export class HistoryInterface {
    text: string;
    created_at: string;
}

export class RelatedPeopleInterface {
    reporter: EmployeeInterface;
    assignee: EmployeeInterface;
}

export class TicketDetailInterface {
    name: string;
    value: string;
    type: string;
}
