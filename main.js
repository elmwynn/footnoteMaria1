
//site functions:


const buttonToggle = () => {
    const humans = document.getElementsByClassName("humans")[0];
    const bloom = document.getElementsByClassName("bloom")[0];
    const buttonDisplay = document.getElementsByClassName("button")[0];
    humansToggle();
    dontToggle();
    if(humans.id === "humans8"){
        bloomToggle();
    }
    if(bloom.id === "humans8"){
        buttonDisplay.setAttribute("class","byebye")
    }
    
}


const humansToggle = () => {
    const humans = document.getElementsByClassName("humans")[0];
    console.log(humans.id)
    humansAttribute = humans.id === "humans" 
    ? "humans2"
    : humans.id === "humans2"
    ? "humans3"
    : humans.id === "humans3"
    ? "humans4"
    :  humans.id === "humans4"
    ? "humans5"
    :  humans.id === "humans5"
    ? "humans6"
    : humans.id === "humans6"
    ? "humans7"
    : humans.id === "humans7"
    ? "humans8"
    : "humans8"
    humans.setAttribute("id",humansAttribute);
    
}

const dontToggle = () => {
    const dont = document.getElementsByClassName("dont")[0];
    dontAttribute = dont.id === "dont" 
    ? "dont2"
    : dont.id === "dont2"
    ? "dont3"
    : dont.id === "dont3"
    ? "dont4"
    : dont.id ===  "dont4"
    ? "dont5"
    : dont.id ===  "dont5"
    ? "dont6"
    : dont.id ===  "dont6"
    ? "dont7"
    : dont.id ===  "dont7"
    ? "dont8"
    : dont.id ===  "dont8"
    ? "dont9"
    : "dont9"

    dont.setAttribute("id",dontAttribute);
}

const bloomToggle = () => {
    const bloom = document.getElementsByClassName("bloom")[0];
    bloomAttribute = bloom.id === "bloom" 
    ? "humans2"
    : bloom.id === "humans2"
    ? "humans3"
    : bloom.id === "humans3"
    ? "humans4"
    :  bloom.id === "humans4"
    ? "humans5"
    :  bloom.id === "humans5"
    ? "humans6"
    : bloom.id === "humans6"
    ? "humans7"
    : bloom.id === "humans7"
    ? "humans8"
    : "humans8"
    bloom.setAttribute("id",bloomAttribute);
    
}






const button = document.querySelector("button");
button.addEventListener("click", (event) => buttonToggle());