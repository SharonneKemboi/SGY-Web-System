function Fare(destination, passenger) {
    this.destination=destination;
    this.passenger=passenger

}

Fare.prototype.getTotalAmount() {
    let destinationPrice;
    if(this.destination=="buruburu"){
        destinationPrice=70;
        
    }
    else if(this.destination=="Thika"){
        destinationPrice=100;
    }
    else if(this.destination=="Rongai"){
        destinationPrice=100;
    }
    else if(this.destination=="Syokimau"){
        destinationPrice=80;
    }
    else if(this.destination=="Kikuyu"){
        destinationPrice=100;
    }
    else if(this.destination=="Kiambu"){
        destinationPrice=50;
    
    }
    else if(this.destination=="Kawangware"){
        destinationPrice=50;
    }
    else{
        destinationPrice=0;
    }

  let totalAmount=destinationPrice * this.passenger
  console.log(totalAmount)
  return totalAmount;


};


    $("button#btn1").submit(function(){
        let userDeparture=$("#from option:selected" ).val();
        let userDestination=$(".destination option:selected").val()
        let userNumberPlate=$("#size option:selected").val()
        let numberPassenger=$("#passenger option:selected").val()

      const Fare1= new Fare(userDeparture,userDestination,userNumberPlate,numberPassenger)
      console.log(Fare1.getTotalAmount())
      
  
  
  
    });







