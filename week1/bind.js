this.car="hello mowwa";
 var mark={
    car:" hi man",
    getcar:function(){
        return this.car;
    }
 }
  console.log(mark.getcar()); //1

   var change=mark.getcar;
   console.log(change()); // mark.getcar()=change(); //2 may give wrong results

   var change1=mark.getcar.bind(mark);
   console.log(change1()); //change1()=mark.getcar() in and only in mark //3  and 1=3

    