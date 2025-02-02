import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   //Income
   lastMonthIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
   currentMonthIncome = '$2000';

   //Expense
   lastMonthExpense = ['January: $800', 'February: $1000', 'March: $1200'];
   currentMonthExpense = '$1500';

   totalCurrentMonthIncome = 2000;
   totalCurrentMonthExpense = 1500;

   //To Do Transaction
   toDoTransactions = [
    { description : 'Pay Electricity bill'},
    { description : 'Submit monthly report'},
    { description : 'Buy groceries'},
    { description : 'Call Insurance company' } 
   ]; 

   constructor(private router : Router){}

   onIncome(){
    this.router.navigate(['/expense-tracker/income']);
   }

   onExpense(){
    this.router.navigate(['/expense-tracker/expense']);
   }

   onTodo(){
    this.router.navigate(['/expense-tracker/todo']);
   }

   get currentMonthSavings() : number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
   }
}
