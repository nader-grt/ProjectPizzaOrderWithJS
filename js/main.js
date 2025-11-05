// const small = document.getElementById("small")
// const medium = document.getElementById("medium")
// const large = document.getElementById("large")

let SizeValuePizza = {};
let PottingValuePotting = {};
let crustTypeValuePizza = "" ;
let eatValuePizza = {} ;
const listRadioSize = document.getElementsByName("size");
const listRadioPotting = document.getElementsByName("potting");
const listRadioCrustType = document.getElementsByName("crustThin")
const listRadioEatin  = document.getElementsByName("eatin")


//  working tow 
  let PriceTOtalExample  = 0 ;

const resultPriceTotal1 = document.getElementById("resultPriceTotal");

const resultPotting1 = document.getElementById("resultPotting");
const resultCrustTypePizza1 = document.getElementById("resultCrustTypePizza")

const resultSize1 = document.getElementById("resultSize")   ;

const resultWhereToEat1  = document.getElementById("resultWhereToEat")  ;





function getSizeValue(sizeValue) {
  let priceSize = 0;
  switch (sizeValue) {
    case "Small":
      priceSize = 10;
                     return {valueSize:"Small",priceSize:priceSize}
    

    case "Medium":
      priceSize = 20;
      return {valueSize:"Medium",priceSize:priceSize}
    
    case "Large":
      priceSize = 30;
      return {valueSize:"Large",priceSize:priceSize}
    
    default:
      break;
  }

 // return priceSize;
}

function addOrRemovedResultTotalPricePotting(namePotting, length) {

  let pricePotting = 0;
  let totalPricePotting = 0;

  for (let index = 0; index < length; index++) {
    switch (namePotting[index]) {
      case "cheese":
        pricePotting = 2;
        totalPricePotting += pricePotting;
        break;
      case "Onion":
        pricePotting = 4;
        totalPricePotting += pricePotting;
        break;

      case "Mushrooms":
        pricePotting = 6;
        totalPricePotting += pricePotting;
        break;
      case "Olives":
        pricePotting = 8;
        totalPricePotting +=  pricePotting;
        break;
      case "TOmatoes":
        pricePotting = 10;
        totalPricePotting +=  pricePotting;
        break;
      case "Green":
        pricePotting = 12;
        totalPricePotting +=  pricePotting;
        break;
      default:
        break;
    }
  }

  return {
    totalPottingprice: totalPricePotting,
    listNamesPotting: [...namePotting],
  };
}


function getCrustTypePizza(valueTypePizza)
{
  
      let  TypePizza = "";


      TypePizza = valueTypePizza === "crust Thin" ? "crust Thin" : "crust Thick" ;
  
          
      return TypePizza ;
}



function getEatPlace(eatValue) {
    let priceEaten = 0;
    switch (eatValue) {
      case "Eat in":
        priceEaten = 10;
                       return {valueWhereToEat:"Eat in",priceEaten:priceEaten}
      
  
      case "Take out":
        priceEaten = 20;
        return {valueWhereToEat:"Take out",priceEaten:priceEaten}
      
    
      
      default:
        break;
    }
  
  }



listRadioSize.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
  

        SizeValuePizza = getSizeValue(radio.value);


        resultSize1.textContent = `${SizeValuePizza.valueSize}`
          resultSize1.style.color = "green"
          updateTotal()
        
        // resultPriceTotal1.textContent = SizeValuePizza.priceSize
        // resultPriceTotal1.style.color = "red"
    }
  });
});





for (let i = 0; i < listRadioPotting.length; i++) {
  listRadioPotting[i].addEventListener("change", () => {
    let count = 0;
    let selected = [];
    // Count checked boxes
    for (let j = 0; j < listRadioPotting.length; j++) {
      if (listRadioPotting[j].checked) {
        count++;

        selected.push(listRadioPotting[j].value);
      }
    }

   

    PottingValuePotting = addOrRemovedResultTotalPricePotting(selected, count);


    resultPotting1.textContent = `${PottingValuePotting.listNamesPotting.join(" ,")}` ;
    resultPotting1.style.color = "green" ;

    updateTotal()

    //   resultPriceTotal1.textContent =  PottingValuePotting.totalPottingprice
    //     resultPriceTotal1.style.color = "red"

  });
}





listRadioCrustType.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
       
  
        crustTypeValuePizza = getCrustTypePizza(radio.value)
           
       
        resultCrustTypePizza1.textContent = `${crustTypeValuePizza}`
        resultCrustTypePizza1.style.color = "green" ;
      }
    });



  });



  listRadioEatin.forEach((ele) => {
    ele.addEventListener("change",() => {

             if(ele.checked)
             {

              eatValuePizza   = getEatPlace(ele.value)

              resultWhereToEat1.textContent = ` ${eatValuePizza.valueWhereToEat}`


              resultWhereToEat1.style.color = "green" ;
                       
              updateTotal()
            //   resultPriceTotal1.textContent =  eatValuePizza.priceEaten


            //     resultPriceTotal1.style.color = "red"
             }

    })

  })
















  function updateTotal() {
    const total =
      (SizeValuePizza.priceSize || 0) +
      (PottingValuePotting.totalPottingprice || 0) +
      (eatValuePizza.priceEaten || 0);
  
    resultPriceTotal1.textContent = `$ ${total}`;
    resultPriceTotal1.style.color = "red";
  }





function CalulateOrderPizza() {
  const resultPriceTotal = document.getElementById("resultPriceTotal");

  const resultPotting = document.getElementById("resultPotting");
  const resultCrustTypePizza = document.getElementById("resultCrustTypePizza")

  const resultSize = document.getElementById("resultSize")   ;

const resultWhereToEat  = document.getElementById("resultWhereToEat")  ;


//{valueSize:"small",priceValueSize:priceSize}

  resultPriceTotal.textContent = ` $${
    Number(PottingValuePotting.totalPottingprice) + SizeValuePizza.priceSize  + eatValuePizza.priceEaten
  }`;

  if (
    PottingValuePotting.listNamesPotting &&
    PottingValuePotting.listNamesPotting.length > 0
  ) {
    // Join array elements into a readable string
    resultPotting.textContent = ` ${PottingValuePotting.listNamesPotting.join(
      ", "
    )}`;
    resultPotting.style.color = "green"
  } else {
    resultPotting.textContent = "No toppings selected";
  }


     if(crustTypeValuePizza.length > 0)
     {

        resultCrustTypePizza.textContent = `${crustTypeValuePizza}`
        resultCrustTypePizza.style.color = "green"
     }


     if( Object.keys(SizeValuePizza).length >0)
     {
        resultSize.textContent = `${SizeValuePizza.valueSize}`
        resultSize.style.color = "green"


     }


     if( Object.keys(eatValuePizza).length >0)
        {
           resultWhereToEat.textContent = `${eatValuePizza.valueWhereToEat}`
           resultWhereToEat.style.color = "green"
   
   
        }
  console.log(
    " SizeValuePizza 111",
    SizeValuePizza,
    PottingValuePotting.listNamesPotting
  );
}
