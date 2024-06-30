


const readline = require ('readline')   //The readline module is a module used in node js  and allows us to prompt the user 
 const rl =readline.createInterface(    //and as well as get input so we are going to require the module so as to bring in our readline module

    {input : process.stdin,
    output :process.stdout

    }
)

function speedDetector(){                                                  //function speedDetector contains a question to the user containing two objects the answer and the function that will do the comparisons anf computations
    rl.question("Enter speed:", function(speed){
        speed = Number(speed)                                              // parameter speed has been set as a number and is compared to 70km/s hence giving the respective feedback

  if(speed<=70){
    console.log("OK!!.Your speed limit is fine")
  }
  else{
    const demeritPoints = Math.round((speed-70)/5)
    if(demeritPoints>=12){
        console.log("License suspended")                                //IF ELSE contains a nested IF ELSE to compute the excess speed and assign the respective demerit points
    }
    else{
        console.log(`Demerit Points:'${demeritPoints}`)
    }
  }

rl.close()


    })
}

rl.on('close',()=>{                                    // the rl.on closes closes the readline module interface with a nice message to the user irregardless of the input
    console.log("DRIVE SAFE")
})

speedDetector()                                        // speedDetector is then called out


