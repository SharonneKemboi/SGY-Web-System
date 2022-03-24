
$("button#btn1").click(function(e){
    e.preventDefault()
    let userDeparture=$("#from option:selected" ).val();
    let userDestination=$("#destination option:selected").val().toLowerCase();
    let userNumberPlate=$("#size option:selected").val();
    let numberPassenger=parseInt($("#passenger option:selected").val());
    console.log( userDestination)
    console.log( numberPassenger)

  var Fare1= new Fare(userDestination,numberPassenger)
  console.log(Fare1.getTotalAmount())
  



});


function Fare(destination, passenger) {
    this.destination=destination;
    this.passenger=passenger;

};

Fare.prototype.getTotalAmount=function(){
   
    
    let destinationPrice;
    if(this.destination=="buruburu"){
        destinationPrice=70;
        
    }
    else if(this.destination=="thika"){
        destinationPrice=100;
    }
    else if(this.destination=="rongai"){
        destinationPrice=100;
    }
    else if(this.destination=="syokimau"){
        destinationPrice=80;
    }
    else if(this.destination=="kikuyu"){
        destinationPrice=100;
    }
    else if(this.destination=="kiambu"){
        destinationPrice=50;
    
    }
    else if(this.destination=="kawangware"){
        destinationPrice=50;
    }
    else if(this.destination=="0"){
        destinationPrice=0;
    }
    else{
        console.log("error")
    }
    console.log(destinationPrice)

  let totalAmount=(destinationPrice) * this.passenger
  console.log(totalAmount)
  console.log(typeof totalAmount)

  return totalAmount;


};  



