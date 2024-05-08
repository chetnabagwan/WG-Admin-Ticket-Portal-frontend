import { Injectable } from "@angular/core";
import { EmployeeInterface } from "./employee.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    
    resolvers: EmployeeInterface[] = [
        {
            email: 'virendra.sharma@watchguard.com',
            full_name: 'Virendra Sharma',
            phone_number: '9856437689',
            role: 'IT-Dev'
        },
        {
            email: 'arsh.arafat@watchguard.com',
            full_name: 'Arsh Arafat',
            phone_number: '9856437689',
            role: 'IT-Dev'
        },
        {
            email: 'anand.dev@watchguard.com',
            full_name: 'Anand Dev',
            phone_number: '9856437689',
            role: 'IT-Dev'
        },
        {
            email: 'dharmendra.singh@watchguard.com',
            full_name: 'Dharmendra Singh',
            phone_number: '9856437689',
            role: 'IT-Dev'
        }
    ]
    myObs: Observable<EmployeeInterface[]>;

    getAllResolvers() {
        this.myObs = new Observable((observer) => {
            observer.next(this.resolvers);
        })
        return this.myObs;
    }

}