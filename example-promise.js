function promiseExample(input) {
    return new Promise(
        function(success, fail ) {
            if (input == "success") {
              success({message:"you enter success"});
            }else{
              fail("you enter fail");
            }
        }
    );
}

promiseExample("success").then(function(successReturnMessage, anotherMessage){
console.log(successReturnMessage.message);
},function(errorReturnMessage){
  console.log(errorReturnMessage);
});
promiseExample("nnnjj").then(function(successReturnMessage){
console.log(successReturnMessage);
},function(errorReturnMessage){
  console.log(errorReturnMessage);
});
