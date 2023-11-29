
function bankAccount(accountNumber,name,type,balance){

    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.deposit=function(amount){
        this.balance+=amount;
    }
    this.withdraw=function(amount){
        if(this.balance>=amount){
            this.balance-=amount;
        }else{
            console.log("Account Balance is Low");
        }
    }
    this.checkBalance=function(){
        console.log("Your Savings Ac Balance is "+this.balance+" $");
    }
    this.isActive=function(){
        if(this.name==""){
            console.log("Account is not active");
        }else{
            console.log("Account is Active")
        }
    }
};

let accounts=[];

let rahulAc= new bankAccount(113234,"Rahul","Savings",1500);
let arpitAc= new bankAccount(114362,"Arpit","Savings",6000);
let himanshuAc= new bankAccount(146234,"Himanshu","Savings",1000);

rahulAc.deposit(100);
arpitAc.deposit(100);
himanshuAc.deposit(100);


rahulAc.withdraw(500);
arpitAc.withdraw(500);
himanshuAc.withdraw(500);

rahulAc.checkBalance();
arpitAc.checkBalance();
himanshuAc.checkBalance();

rahulAc.isActive();
arpitAc.isActive();
himanshuAc.isActive();

let accounts1 = [rahulAc,arpitAc,himanshuAc];
let totalBalance = rahulAc.balance+arpitAc.balance+himanshuAc.balance;
console.log(accounts1);
console.log(totalBalance);




