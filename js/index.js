const btn_ref = document.getElementById("button");

const update = () => {
    const request = new XMLHttpRequest();
    const cityname = document.getElementById("display").value;
    const key = "1eddcfe2569752dc4d76ff563612d55c";
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${cityname}&appid=${key}&units=metric`;
    request.open("GET", base + query);
    request.send()

    request.addEventListener("load", function () {
        const cityref = document.querySelector(".cityval");
        const contryref = document.querySelector(".contryval");
        const tempmaxref = document.querySelector(".tempmax");
        const tempminref = document.querySelector(".tempmin");
        const wethericon = document.querySelector(".iconval");
        let data = this.responseText;
        data = JSON.parse(data);
        console.log(data);
        const wethermood = data.weather[0].main;

        if(wethermood=="Clear"){
            wethericon.innerHTML =`<i class="fa-solid fa-sun"></i>`;
        }


        cityref.innerHTML = data.name;
        contryref.innerHTML = data.sys.country;
        tempmaxref.innerHTML =data.main.temp_max;
        tempminref.innerHTML =data.main.temp_min;
        wethericon.innerHTML = wethermood;


    })

};

btn_ref.addEventListener("click", update);






// "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=1eddcfe2569752dc4d76ff563612d55c&units=metric")
// const btn_ref = document.getElementById("button");
// const update =async()=>{
//     let setheader ={
//         Headers:{
//             Accept:"Application/json"
//         }
//     }

//         const cityname = document.getElementById("display").value;
//         const key = "1eddcfe2569752dc4d76ff563612d55c";
//         const base = "https://api.openweathermap.org/data/2.5/weather";
//         const query = `?q=${cityname}&appid=${key}&units=metric`;
//         const request = await fetch(base+query,setheader) 
//         .then((res)=>(res.json()))
//         .then((data)=>{
//             console.log(data);
//         }).catch((err)=>{
//             console.log("404 error");
//         })


// }
// btn_ref.addEventListener("click",update);