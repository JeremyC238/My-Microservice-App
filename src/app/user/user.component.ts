import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogVerificationComponent} from '../dialog-verification/dialog-verification.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  status: string;

  usersTest: User[] = [
    {
      username: 'crossj',
      firstName: 'Jeremy',
      lastName: 'Cross',
      phone: [
        {
          phoneNumber: '306-535-7629',
          phoneType: 'Cell',
          status: 'Not Verified'
        },
        {
          phoneNumber: '306-586-8341',
          phoneType: 'Home',
          status: 'Not Verified'
        }
      ]
    },
    {
      username: 'smithj',
      firstName: 'John',
      lastName: 'Smith',
      phone: [
        {
          phoneNumber: '306-564-5973',
          phoneType: 'Home',
          status: 'Not Verified'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  add(username: string, firstName: string, lastName: string, phoneNumber: string, phoneType: string): void{
    let newUser = new User();
    this.status = 'Not Verified';
    newUser = {
      username,
      firstName,
      lastName,
      phone: [{phoneNumber, phoneType, status: this.status}]
    };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addPhone(username: string, phoneNumber: string, phoneType: string): void{
    this.status = 'Not Verified';
    this.users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].username === username){
        this.users[i].phone.push({phoneNumber, phoneType, status: this.status});
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  delete(user: User): void{
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i] === user){
        this.users.splice(i, 1);
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  reset(): void{
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify(this.usersTest));
  }

  storeUser(user: User): void{
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i] === user){
        localStorage.setItem('userToEdit', JSON.stringify(this.users[i]));
      }
    }
  }

  storeUserVerify(user: User, phoneNumber: string, phoneType: string, status: string): void{
    localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
    localStorage.setItem('phoneType', JSON.stringify(phoneType));
    localStorage.setItem('status', JSON.stringify(status));
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i] === user){
        localStorage.setItem('userToEdit', JSON.stringify(this.users[i]));
      }
    }
  }

  openDialog(): void{
    // this.dialog.open(DialogVerificationComponent);
  }

}


