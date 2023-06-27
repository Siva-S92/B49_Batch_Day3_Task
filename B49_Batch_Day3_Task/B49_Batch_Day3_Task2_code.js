fetch('https://restcountries.com/v3.1/all')
.then((res)=> res.json())
.then((message)=> {
    for (let msg in message){
        let flags = message[msg].flags;
        console.log(flags);
        
    }
})
.catch((err) => console.log(err))