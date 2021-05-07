# My Microservice App

#Instructions for Creating Error

1. Disconnect the current verification page
user.component.html
- remove routerlink="/verify" from the verify buttion (line 95)
- replace (click)="storeUserVerify(User, Phone.phoneNumber, Phone.phoneType, Phone.status)" with
  (click)="openDialog()" (line 95)
user.component.ts
- add public dialog: MatDialog to the constructor (line 48)
- uncomment this.dialog.open(DialogVerificationComponent); within the openDialog method (line 112)

2. Error message displayed
- when trying to run the program in terminal the following error should be displayed
- ERROR in /Users/crossj/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js 1009:8-32
"export 'ɵɵstaticViewQuery' (imported as 'ɵngcc0') was not found in '@angular/core'
