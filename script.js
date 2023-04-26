//for the given JSON iterate overall for the all loops (for,for in,for of,for in,for Each)
//JSON object

const myObj = {
    "name": "Abdul Rahman",
    "age": "28",
    "email":"abdul28@gmail.com",
    "contact": "9876543210",
    "hobbies": ["singing, gardening,crafting, travelling"],
    "address":{
       "street" :"456 ABC Residency, Main Road",
        "city"  : "Toronto",
        "Province": "Ontario",
        "Postal code": "L4K-M9W",
        "Country" : "Canada"
        
    }
};

//for in loop
     for(let prop in myObj){
        console.log(prop+ ": " + myObj[prop])
     }

    /*output =  name: Abdul Rahman
      age: 28
     email: abdul28@gmail.com
      contact: 9876543210
      address: [object Object] */ 

//for of
 for(let contact of myObj.contact){
    console.log(contact);
 }
 //output: 9876543210

 //for each
 myObj.hobbies.forEach(function(hobby) {
    console.log(hobby);
  });

  //output = singing,gardening,crafting,travelling

  //for
    for(let i=0; i<Object,keys(myObj).length;i++){
        let prop = Object.keys(myObj)[i];
        console.log(prop +":" + myObj[prop]);
    }