fetch('https://restcountries.com/v3.1/all')
.then((res)=> res.json())
.then((message)=> {
    for (let msg in message){
        let countriesNames = message[msg].name.common;
        let regions = message[msg].region;
        let subRegions = message[msg].subregion;
        let population = message[msg].population;
        console.log("County: " + countriesNames);
        console.log("Region: " + regions);
        console.log("Subregion: " + subRegions);
        console.log("Population: " + population);
    }
})
.catch((err) => console.log(err))