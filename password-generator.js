var generator=require("generate-password")

var passwords=generator.generateMultiple(10,{
    length:8,
    numbers:true,
    uppercase:false,
})

console.log(passwords)