import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  years: number[];
  quarters: string[];
  priority: string;

  stages: string[];
  selectedStage: string;

  categories: string[];
  selectedCategory: string;

  data: any;
  ngOnInit() {
    this.data = {
      labels: ['Raised', 'In Progress', 'In Review', 'Closed'],
      datasets: [
        {
          data: [this.stats[0].raised,this.stats[0].in_prog, this.stats[0].review, this.stats[0].closed],
          backgroundColor: [
            '#C73659',
            '#FF6500',
            '#FF8A08',
            '#FFC100',
          ],
          hoverBackgroundColor: [
            '#C73659',
            '#FF6500',
            '#FF8A08',
            '#FFC100',
          ],
        },
      ],
    };

    this.years = [2024, 2023, 2022];
    this.quarters = ['Q1', 'Q2', 'Q3'];

    this.stages = ['raised', 'in_progress', 'review', 'closed'];
    this.categories = ['A', 'B', 'C', 'D'];
  }

  // replace with actual stats from api
  year: number = 2024;
  quarter: string = 'Q1';

  stats = [{ raised: 20, in_prog: 30, review: 30, closed: 30, resolved: 40}];

  options: any = {
    cutout: '60%',
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  // replace with actual tickets from api

  tickets = [
    {
      ticket_id: 'asdfasd',
      reporter: 'bishal',
      created_at: '6/5/24',
      category: 'Food and Beverages',
      priority: 'Critical',
      stage: 'raised',
      assignee: 'admin',
    },
    {
      ticket_id: 'vadjladw',
      reporter: 'milind',
      created_at: '5/5/24',
      category: 'Maintenance',
      priority: 'Important',
      stage: 'raised',
      assignee: 'admin',
    },

    {
      ticket_id: 'llkjasdk',
      reporter: 'aayushi',
      created_at: '3/5/24',
      category: 'seat management',
      priority: 'Routine',
      stage: 'raised',
      assignee: 'admin',
    },
    {
      ticket_id: 'qajlas1',
      reporter: 'chetna',
      created_at: '1/5/24',
      category: 'id card',
      priority: 'Critical',
      stage: 'raised',
      assignee: 'admin',
    },
  ];
}
