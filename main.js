
//site functions:

//pre-condition: olive.textContent contains 1 to start chain
//post-condition: the content of the olive element is toggled through
const oliveToggle = () =>{
    const olive = document.getElementById("olive");
    //select olive element by id
    removeImages();
    if(olive.textContent.search("1") !== -1)
        //if 1 is in the textContent, set new textContent
        olive.textContent = "Happiness is supposed to be constant in Ndoto." ;
    else if(olive.textContent === "Happiness is supposed to be constant in Ndoto.")
        olive.textContent = "But you know—scientifically speaking—";
    else if(olive.textContent === "But you know—scientifically speaking—")
        olive.textContent = "in order to say something is a constant you have to measure it by observation or by comparing it to something else.";
    else if(olive.textContent ==="in order to say something is a constant you have to measure it by observation or by comparing it to something else.")
        olive.textContent = "So how can people know what being happy is when they're happy all the time?";
    else if(olive.textContent === "So how can people know what being happy is when they're happy all the time?")
        olive.textContent = "There's nothing to compare it to." ;
    else if(olive.textContent === "There's nothing to compare it to.")
        olive.textContent = "You could say you could observe it but people are different so you can get an average or anything.";
    else if(olive.textContent === "You could say you could observe it but people are different so you can get an average or anything.")
        olive.textContent = "Well, I guess we can help them by bullying them a bit so they know what happiness really is, right?";
    else if(olive.textContent === "Well, I guess we can help them by bullying them a bit so they know what happiness really is, right?")
        olive.textContent = "[page ???]";
    else if(olive.textContent === "[page ???]"){
        olive.textContent = "It depends on the direction you walk.";
        olive.style.background = "#87CEEB";
    }
    else{
        olive.textContent = "—Never odd or eveN—";
        olive.style.color = "beige";
        olive.style.background = "#242527";
    }
    //if-else statement chains through different textContent with the eventlistener--each click changes text content down the line
}


//pre-condition: cadence.textContent contains 2 to start chain
//post-condition: the content of the cadence element is toggled through
const cadenceToggle = () =>{
    const cadence = document.getElementById("cadence");
    removeImages();
    cadence.textContent =  (cadence.textContent.search("2") !== -1) 
        //if 2 is in text content, set new text content
        ? "\"'Them'?\""
        :(cadence.textContent ===  "\"'Them'?\"")
        ? "\"Let's try not to distinguish between you and me or us and them.\"" 
        :(cadence.textContent ===  "\"Let's try not to distinguish between you and me or us and them.\"")
        ? "\"Here there's only 'we'.\""
        :(cadence.textContent ===  "\"Here there's only 'we'.\"")
        ? "[page ???]"
        :(cadence.textContent ===  "[page ???]")
        ? "If you're honest about how you feel in Ndoto,"
        :(cadence.textContent === "If you're honest about how you feel in Ndoto,")
        ? "if you feel satisfied and happy with everything,"
        :(cadence.textContent === "if you feel satisfied and happy with everything,")
        ? "you might return to the tree."
        : (cadence.textContent === "you might return to the tree.")
        ? "That's a goal for some here, you know?"
        : (cadence.textContent === "That's a goal for some here, you know?")
        ? "My brothers and I personally are minor skeptics of that eagerness."
        : (cadence.textContent ===  "My brothers and I personally are minor skeptics of that eagerness.")
        ? "Which is why we entertain people."
        : (cadence.textContent ===  "Which is why we entertain people.")
        ? "There are so many lovely fine arts and entertaining activities to enjoy in Ndoto-"
        : (cadence.textContent ===  "There are so many lovely fine arts and entertaining activities to enjoy in Ndoto-")
        ? "So why not stay a little while longer?"
        : "¿Won't lovers revolt noW?"
         //if-else statement chains through different textContent with the eventlistener--each click changes text content down the line
        if(cadence.textContent ===  "¿Won't lovers revolt noW?"){
            cadence.style.color = "beige";
            cadence.style.background = "#242527"};

}
//pre-condition: werner.textContent contains 4 to start chain
//post-condition: the content of the werner element is toggled through
const wernerToggle = () => {
    const werner = document.getElementById("werner");
    removeImages();
    werner.textContent = (werner.textContent.search("4") !== -1) 
     //if 4 is in text content, set new
        ? "\"It would be nice if I was able to receive a sign of some kind.\""
        :(werner.textContent ===  "\"It would be nice if I was able to receive a sign of some kind.\"")
        ? "Huh? A sign?" 
        :(werner.textContent ===  "Huh? A sign?")
        ? "Like this? " + String.fromCodePoint(9996)
        //to use emoji
        :(werner.textContent ===  "Like this? " + String.fromCodePoint(9996))
        ? "You know what my guidance officer says you should do when you're nervous or not sure about something?"
        :(werner.textContent === "You know what my guidance officer says you should do when you're nervous or not sure about something?")
        ? "Find a distraction!"
        :(werner.textContent === "Find a distraction!")
        ? "Because the distraction of the distraction of the distraction is a distraction to you being happy."
        :(werner.textContent ===  "Because the distraction of the distraction of the distraction is a distraction to you being happy.")
        ? "... I don't really get it either!"
        :(werner.textContent === "... I don't really get it either!")
        ? "[page ???]"
        :(werner.textContent === "[page ???]")
        ? "\"This place-be it real or not-\""
        :(werner.textContent ===   "\"This place-be it real or not-\"")
        ? "\"-brought my parents here.\""
        :(werner.textContent ===  "\"-brought my parents here.\"")
        ? "\"Which already makes it more trusthworthy than you.\""
        :(werner.textContent ===  "\"Which already makes it more trusthworthy than you.\"")
        ? "\"The 'fake' you that I know, that is.\""
        : "¿Was it a cat I saW?"
         //if-else statement chains through different textContent with the eventlistener--each click changes text content down the line
        if(werner.textContent ===  "¿Was it a cat I saW?"){
            werner.style.color = "beige";
            werner.style.background = "#242527"};
}

//pre-condition: maria.textContent contains 3 to start chain
//post-condition: the content of the maria element is toggled through
const mariaToggle = () => {
    removeImages();
    const maria = document.getElementById("maria");
    maria.textContent = (maria.textContent.search("3") !== -1) 
     //if 3 is in text content, set new
    ? "「She did not know what she had been expecting.」"
    :(maria.textContent ===  "「She did not know what she had been expecting.」")
    ? "「Howling winds?」" 
    :(maria.textContent ===  "「Howling winds?」")
    ? "「Gray earth gouged out, ripped apart, raked thoroughly through by mortar?」"
    :(maria.textContent ===  "「Gray earth gouged out, ripped apart, raked thoroughly through by mortar?」")
    ? "「Smoke pillars reaching up for a break in the clouds?」"
    :(maria.textContent === "「Smoke pillars reaching up for a break in the clouds?」")
    ? "「Instead...」"
    :(maria.textContent === "「Instead...」")
    ? "「... there was only silence.」"
    :(maria.textContent === "「... there was only silence.」")
    ? "[page ???]"
    :(maria.textContent === "[page ???]")
    ? "You see now, yes?"
    :(maria.textContent === "You see now, yes?")
    ? "Why we must understand our fellow people?"
    :(maria.textContent ===   "Why we must understand our fellow people?")
    ? "Why we must make sure they are happy?"
    :(maria.textContent ===  "Why we must make sure they are happy?")
    ? "In this craddle of the universe, Ndoto is their sanctuary."
    :(maria.textContent ===  "In this craddle of the universe, Ndoto is their sanctuary.")
    ? "And you are-"
    : "DeifieD"
     //if-else statement chains through different textContent with the eventlistener--each click changes text content down the line
    if(maria.textContent ===  "DeifieD"){
        maria.style.color = "beige";
        maria.style.background = "#242527"};
}

//pre-condition: olive.textContent contains 5 to start chain
//post-condition: the content of the jericho element is toggled through
const jerichoToggle = () => {
    removeImages();
    const jericho = document.getElementById("jericho");
    jericho.textContent = (jericho.textContent.search("5") !== -1) 
     //if 5 is in text content, set new text content
    ? "\"'Befriend' a policy maker?! That's like shaking hands with the devil!\""
    :(jericho.textContent ===  "\"'Befriend' a policy maker?! That's like shaking hands with the devil!\"")
    ? "\"Has anyone ever told you policy makers that your suits look dusty and out-dated?\""
    :(jericho.textContent === "\"Has anyone ever told you policy makers that your suits look dusty and out-dated?\"")
    ?  "\"Well, you haven't changed according to the people you know. But that doesn't mean you can infer that everyone else has changed instead. Though I suppose the actual conclusion doesn't matter.\""
    :(jericho.textContent === "\"Well, you haven't changed according to the people you know. But that doesn't mean you can infer that everyone else has changed instead. Though I suppose the actual conclusion doesn't matter.\"")
    ? "Reasons aren't too far away from excuses."
    :(jericho.textContent === "Reasons aren't too far away from excuses.")
    ? "In fact, you could argue that reasons are excuses."
    :(jericho.textContent === "In fact, you could argue that reasons are excuses.")
    ? "Have you ever noticed that it's only the person who's giving the reason that tries distinguish between reason and excuse?"
    :(jericho.textContent === "Have you ever noticed that it's only the person who's giving the reason that tries distinguish between reason and excuse?")
    ? "Just because there's understanding doesn't mean we should be nodding along."
    :(jericho.textContent === "Just because there's understanding doesn't mean we should be nodding along.")
    ? "If that was the case, there would be no such thing as justice."
    :(jericho.textContent === "If that was the case, there would be no such thing as justice.")
    ? "And we know that the universe always bends towards justice."
    :(jericho.textContent === "And we know that the universe always bends towards justice.")
    ? "[page ???]"
    :(jericho.textContent === "[page ???]")
    ? "\"Atienna?! Is that reall you-\""
    : "Don't noD"
     //if-else statement chains through different textContent with the eventlistener--each click changes text content down the line
    if(jericho.textContent ===  "Don't noD"){
        jericho.style.color = "beige";
        jericho.style.background = "#242527"};
}

//pre-condition: the olive, cadence, werner, maria, and jericho element ids exist
//post-condition: the content of the those element are toggled through by clicking the atienna elemena
const atiennaToggle = () => {
    removeImages();
    const olive = document.getElementById("olive");
    const cadence = document.getElementById("cadence");
    const werner = document.getElementById("werner");
    const maria = document.getElementById("maria");
    const jericho = document.getElementById("jericho");
    olive.textContent = (olive.textContent !== "Boring paradise.") 
        ? "Boring paradise."
        : "ARE"
    cadence.textContent = (cadence.textContent !== "No more songs left to sing, no more people to sing to.")
        ? "No more songs left to sing, no more people to sing to."
        : "YOU"
    maria.textContent = (maria.textContent !== "Someone is being troublesome.")
        ? "Someone is being troublesome."
        : "STILL"
    werner.textContent = (werner.textContent !==  "Starting to feel uneasy again...")
        ? "Starting to feel uneasy again..."
        : "NOT"
    jericho.textContent = (jericho.textContent !==  "Open your eyes.")
        ? "Open your eyes."
        : "SATISFIED"

}

//pre-condition: the olive, cadence, werner, maria, and jericho element ids exist. the elements must have specific text content to trigger the content.
//post-condition: the content of the those element are toggled through by clicking the image at the bottom.
const treeToggle = () =>{
    removeImages();
    const tree = document.querySelector("img");
    const olive = document.getElementById("olive");
    const cadence = document.getElementById("cadence");
    const werner = document.getElementById("werner");
    const maria = document.getElementById("maria");
    const jericho = document.getElementById("jericho");
    if(olive.textContent === "ARE" || olive.textContent === "WHO" || olive.textContent === "ALL" || olive.textContent === "SHE"){
            if(cadence.textContent === "YOU" && maria.textContent === "STILL" && werner.textContent === "NOT" && jericho.textContent === "SATISFIED"){
                tree.src = "/images/tree2.png";
                olive.textContent = "WHO"
                cadence.textContent = "IS"
                maria.textContent = "SHION"
                werner.textContent = "MYO"
                jericho.textContent = "SOTIS"
            }
            else if(cadence.textContent === "IS"){
                olive.textContent = "ALL"
                cadence.textContent = "WHO"
                maria.textContent = "WANDER"
                werner.textContent = "GIVEN"
                jericho.textContent = "HAVEN"
            }
            else if(maria.textContent === "WANDER"){
                olive.textContent = "ALL"
                cadence.textContent = "WHO"
                maria.textContent = "ARE LOST"
                werner.textContent = "GIVEN"
                jericho.textContent = "HAVEN"
            }
            else if(maria.textContent === "ARE LOST"){
                olive.textContent = "SHE"
                cadence.textContent = "SHOULD"
                maria.textContent = "NOT"
                werner.textContent = "BE"
                jericho.textContent = "HERE"
            }
            else{
                olive.textContent = "WE"
                cadence.textContent = "MUST"
                maria.textContent = "RETURN"
                werner.textContent = "TO THE"
                jericho.textContent = "TREE"
            }
        }
    else if(olive.textContent === "—Never odd or eveN—" || olive.textContent ===  "\"How about we all put down our weapons and not go against what we were trying to do here in the first place?\"" || olive.textContent === "「The rumbling was inhuman and beast-like.」" || olive.textContent === "「PEACEKEEPER」"){
        if(cadence.textContent === "¿Won't lovers revolt noW?" && maria.textContent === "DeifieD" && werner.textContent === "¿Was it a cat I saW?" && jericho.textContent === "Don't noD"){
            tree.src = "/images/sixchanceslogo.png";
            olive.textContent = "\"How about we all put down our weapons and not go against what we were trying to do here in the first place?\"";
            cadence.textContent = "\"There's ELPIS paraphernalia everywhere-\"";
            maria.textContent = "\"-no, something is off.\"";
            werner.textContent = "\"I'm concerned about my men, Miss-\"";
            jericho.textContent = "\"Where did you run off to?\"";
        }
        else if(cadence.textContent === "\"There's ELPIS paraphernalia everywhere-\""){
            olive.textContent = "「The rumbling was inhuman and beast-like.」";
            cadence.textContent = "\"Without a conductor-\"";
            maria.textContent = "\"-a saint candidate!\"";
            werner.textContent = "\"My conductor isn't working!\"";
            jericho.textContent = "\"Let me see your face, fiend.\"";
        }
        else if(cadence.textContent ===  "\"Without a conductor-\""){
            olive.textContent = "「PEACEKEEPER」";
            cadence.textContent = "「CRIMINAL」";
            maria.textContent = "「CIVILIAN」";
            werner.textContent = "「SOLDIER」";
            jericho.textContent = "「GUARD」";
        }
        else{
            olive.textContent = "¡Now"
            cadence.textContent = "sir";
            maria.textContent = "a";
            werner.textContent = "war";
            jericho.textContent = "is won!";
        }
    }
    
    else{
        tree.src = "/images/TREETRUE.png";
        olive.style.color = "beige";
        olive.style.background = "crimson"
        cadence.style.color = "beige";
        cadence.style.background = "rgb(255, 115, 0)";
        werner.style.color = "beige";
        werner.style.background = "rgb(65, 45, 181)";
        maria.style.color = "beige";
        maria.style.background = "goldenrod";
        jericho.style.color = "black";
        jericho.style.background = "rgb(193, 191, 191)";
        atienna.style.background = "green";
        atienna.style.color = "beige";
        olive.textContent = "30.1";
        cadence.textContent = "30.2";
        maria.textContent = "30.3";
        werner.textContent = "30.4";
        jericho.textContent = "30.5";
        atienna.textContent = "30.6";
    }
}

const buttonToggle = () => {
    button.style.display = "none";
    olive.classList.add("oliveimage");
    olive.textContent = "30.1";
    cadence.classList.add("cadenceimage");
    cadence.textContent = "30.2";
    maria.classList.add("mariaimage");
    maria.textContent = "30.3";
    werner.classList.add("wernerimage");
    werner.textContent = "30.4";
    jericho.classList.add("jerichoimage");
    jericho.textContent = "30.5";
    atienna.classList.add("atiennaimage");
    atienna.textContent = "30.6";

}

//post-condition: removes the class
const removeImages = () =>{
    olive.classList.remove("oliveimage");
    cadence.classList.remove("cadenceimage");
    werner.classList.remove("wernerimage");
    maria.classList.remove("mariaimage");
    atienna.classList.remove("atiennaimage");
    jericho.classList.remove("jerichoimage");

}
//eventlisteners:

//toggles olive textContent
const olive = document.getElementById("olive");
olive.addEventListener("click", (event) => oliveToggle());

//toggles cadence textContent
const cadence = document.getElementById("cadence");
cadence.addEventListener("click", (event) => cadenceToggle());

//toggles maria textContent
const maria = document.getElementById("maria");
maria.addEventListener("click", (event) => mariaToggle());

//toggles werner textContent
const werner = document.getElementById("werner");
werner.addEventListener("click", (event) => wernerToggle());

//toggles jericho textContent
const jericho = document.getElementById("jericho");
jericho.addEventListener("click", (event) => jerichoToggle());

//toggles olive, cadence, jericho, maria, werner content
const atienna = document.getElementById("atienna");
atienna.addEventListener("click", (event) => atiennaToggle())

//toggles olive, cadence, jericho, maria, werner content + image at bottom
const tree = document.querySelector("img");
tree.addEventListener("click", (event) => treeToggle());

const button = document.querySelector("button");
button.addEventListener("click", (event) => buttonToggle());