
var students0=["uday","kavya","lakshman","usha"]; //array
for(var index=0; index<students0.length; index++){  // created a variable called index and initiated with zero
    alert(students0[index]);}       // you can use alert or console.log

//objects type 1v
var students1={
    firstname:"lomisa",
    secondname:"kavya sree",
    age:18}
    alert(students1.firstname);//one type of printing or calling
    alert(students1.secondname);
    alert(students1["firstname"]);//another type of calling but both gives same result
    alert(students1["secondname"]);
     
//object type 2
var students2=new Object();
students2.firstname="praveen"; //students2. is calling the function and firstname is dummy text (can write whatever)
students2.secondname="brother";
students2.age=17;
alert(students2.firstname);
 alert(students2.secondname);
 
 //object type 3
var students3={}; 
students3.firstname="chandu"; //tudents3. is calling function and firstname is dummy text (can write whatever)
students3.secondname="abjith";
students3.age=7;
alert(students3.firstname);
 alert(students3.secondname); 

 var students=[];
 students.push(students1); // students 1,2,3 are pushed into students 
 students.push(students2);
 students.push(students3);
 //alert(students);  // both alert and for loop prints same
 for(var index=0; index<students.length; index++){  
    alert(students0[index]);} 

// functions in objects 
var students4={
    firstname:"lomisa",
    secondname:"kavya sree",
    age:18,
    greetings: function(){
        return "hi"+this.firstname+this.secondname+"beauty";  // this. is for using firstname in main object, not in inside the function
    }
}
alert(students4);
alert(students4.greetings());

//type2 in fns in obj
function student5(first,last,age){
    this.firstkey=first;
    this.secondkey=last;
    this.agekey=age;
    this.greetings= function(){
        return "hi"+this.firstkey+this.secondkey+"beauty";}
}
 
var s1=new student5("kavya","sree",7);
alert(s1);
alert(s1.greetings());

// another 
function students6(first,last,age){
    this.firstkey=first;
    this.secondkey=last;
    this.agekey=age;
   this.greetings= function(){
        return "hi"+this.firstkey+this.secondkey+"beauty";}; }

 students7=[];
 students7.push(new students6("hyma","age is",15));  //student7[0]
 students7.push(new students6("nurni","age is",25));
 students7.push(new students6("pavan","age is",35));
 for(var index=0; index<students7.length; index++){  // created a variable called index and initiated with zero
     var student8=students7[index];         //creating a variable 8 s.t it is student7[0]and[1],[2]. 
     alert(student8.greetings());  }        // alert execute greeting function of student7[0]and[1],[2]. that is printing "hi hyma age is beauty"and others 

// another type

function students6(first,last,age){
    this.firstkey=first;
    this.secondkey=last;
    this.agekey=age;
    this.greetings= function(){
        return "hi"+this.firstkey+this.secondkey+"beauty";}; }

 students7=[];
 students7.push(new students6("hyma","age is",15)); //student7[0]
 students7.push(new students6("nurni","age is",25));
 students7.push(new students6("pavan","age is",35));

 var student9=students7[0];
  for(var key in student9){  // var key do storing every key in the student 9 that is hyma , age is , 15
    console.log(student9[key]); // printing them
  }





  





 


    
