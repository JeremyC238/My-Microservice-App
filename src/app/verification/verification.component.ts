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
  }

  sendCode(): void{
    this.number = Math.floor(100000 + Math.random() * 900000);
    this.numberString = this.number.toString();
  }

  goBack(): void {
    this.location.back();
  }
}
