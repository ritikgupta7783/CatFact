// let url = "https://catfact.ninja/fact";


// async function getFacts2() {
//     try{
//      let res = await axios.get(url);
//     // console.log(res.data.fact); 
//     return res.data.fact;
//  } catch (e) {
//      console.log("error : ", e);
//      return "No fact found";
//  }
//  }

 
 
// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
    
//     let data = await getFacts2();
//    // console.log(data);
//     let p = document.querySelector("#p");
//     p.innerText = data;

// });
const btn = document.querySelector("button");
const para = document.getElementById("p");

btn.addEventListener("click", async () => {
    para.textContent = ""; // Clear previous text
    try {
        const res = await axios.get("https://catfact.ninja/fact");
        const fact = res.data.fact;
        typeEffect(fact);
    } catch (error) {
        typeEffect("Oops! Couldn't fetch a new fact 😿");
    }
});

function typeEffect(text) {
    let index = 0;
    para.textContent = "";
    const speed = 30; // Lower = faster typing

    function typeChar() {
        if (index < text.length) {
            para.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}
