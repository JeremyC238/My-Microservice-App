# My Microservice App

This is a UI for creating and listing users. Each user has a username, first name, last name, phone number, phone type and status. Each new user created is displayed in a list with each row contatining the information for that user. The information for each user is held locally in an array.

# Functionality

1. Can add new users
2. Can add phones to users
3. Can edit existing users
4. Can delete existing users
5. Can verify users phone numbers
6. Reset + refresh, resets to original state

# Instructions for Creating Errors

1. Disconnect the current verification page

user.component.html
- remove routerlink="/verify" from the verify buttion (line 95)
- replace (click)="storeUserVerify(User, Phone.phoneNumber, Phone.phoneType, Phone.status)" with
  (click)="openDialog()" (line 95)
  
user.component.ts
- add public dialog: MatDialog to the constructor (line 48)
- uncomment this.dialog.open(DialogVerificationComponent); within the openDialog method (line 112)

2. The first error message displayed
- when trying to run the program in terminal the following error should be displayed
- ERROR in /Users/crossj/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js 1009:8-32
"export 'ɵɵstaticViewQuery' (imported as 'ɵngcc0') was not found in '@angular/core'

3. The second error message displayed
- remove the nodes_modules
- use npm install --legacy-peer-deps to reinstall node_modules
- when trying to run the program in terminal the following error should be displayed
- ERROR in The target entry-point "@angular/cdk/overlay" has missing dependencies:
 - @angular/common
 - @angular/core
 - rxjs
 - rxjs/operators
