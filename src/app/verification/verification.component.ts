import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../models/User';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  users: User[];
  user: User;
  number: number;
  numberString: string;
  username: string;
  phoneNumber: string;
  phoneType: string;
  status: string;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userToEdit'));
    this.username = this.user.username;
    this.phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));
    this.phoneType = JSON.parse(localStorage.getItem('phoneType'));
    this.status = JSON.parse(localStorage.getItem('status'));
  }

  verifyCode(code: string): void{
    if (code === this.numberString){
      this.user = JSON.parse(localStorage.getItem('userToEdit'));
      this.status = 'Verified';
    }

    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(this.users);

    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].username === this.user.username){
        console.log('passed');
        for (let j = 0; j < this.users[i].phone.length; j++){
          if (this.users[i].phone[j].phoneNumber === this.phoneNumber){
            this.users[i].phone[j].status = this.status;
          }
        }
      }
    }

    localStorage.setItem('users', JSON.stringify(this.users));
  }

  sendCode(): void{
    this.number = Math.floor(100000 + Math.random() * 900000);
    this.numberString = this.number.toString();
  }

  goBack(): void {
    this.location.back();
  }
}
