

const readline = require ('readline')                            //The readline module is a module used in node js  and allows us to prompt the user
 const rl =readline.createInterface(                            //and as well as get input so we are going to require the module so as to bring in our readline module

    {input : process.stdin,
    output :process.stdout

    }
)

function generator(){
    rl.question("Kindly Enter you marks:", function(marks){                             //function generator contains a question to the user containing two objects the answer and the  function that will do the comparisons
                                                                        
                                                                            
    marks = Number(marks)                                                    // parameter marks has been set as a number and stores the input given and is used in comparing
                                                                                

if(marks>79){
    console.log('A')
}


else if(marks<=79 && marks >=60){
   console.log( 'B')
}

 
else if(marks<=59 && marks>=50){
    console.log('C')
}

else if(marks<=49 && marks>=40){
    console.log('D')
}

else {
    console.log('E')
}

if (marks>=50 && marks<=100){
    console.log("Congratulations!")
}
else{
    console.log("Good.Always room for improvement")
}


rl.close()


    })
}

rl.on('close',()=>{
    console.log("HAPPY READING")                                // the rl.on closes closes the readline module interface with a nice message to the user irregardless of the input
})

generator()                                                               // function generator is called out
