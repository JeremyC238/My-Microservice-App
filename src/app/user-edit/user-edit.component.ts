import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {User} from '../models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  users: User[];
  user: User;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  edit(username: string, firstName: string, lastName: string, phoneNumber: string, phoneType: string): void {
    let newUser = new User();
    newUser = {
      username,
      firstName,
      lastName,
      phone: [{phoneNumber, phoneType, status: 'Not Verified'}] 
    };

    this.users = JSON.parse(localStorage.getItem('users'));
    this.user =  JSON.parse(localStorage.getItem('userToEdit'));

    for (let i = 0; i < this.users.length; i++){
      if (this.user.username === this.users[i].username){
        this.users[i].username = newUser.username;
        this.users[i].firstName = newUser.firstName;
        this.users[i].lastName = newUser.lastName;
        this.users[i].phone = newUser.phone;
      }
    }

    localStorage.setItem('users', JSON.stringify(this.users));
    this.goBack();
  }

}
