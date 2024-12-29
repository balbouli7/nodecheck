var fs= require('fs')

// var newFile = fs.writeFile("welcome.txt","hello node", function(err) {
//     if(err){console.log(err)};
//     console.log("file created")
// })

fs.readFile('welcome.txt','utf-8',function(err,data){
    if(err){console.error(err.message)};
    console.log(data)
})