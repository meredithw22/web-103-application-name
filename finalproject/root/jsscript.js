function CheckHoro(){
    let check = document.getElementById("check").value
    let statements = [ //reusable horoscope statements
        "Today both the Sun and the moon are opposite wild, wacky Uranus, which will create hiccups related to finances, shared property, inheritances, taxes and debt. Check out these areas to make sure something hasn’t gone awry. (Especially check banking.) Stay on top of things!", 
        
        
        "Your relations with partners and close friends will be disrupted by something unexpected. Someone might make unusual demands? They might do something that surprises you, or they might introduce you to someone who is “different”? One thing is certain: It’s not a boring day.", 
    
    
        "Something might interrupt your work routine. Staff shortages, power outages, canceled appointments, late deliveries — could be anything. It could be an announcement that surprises everyone. To be safe, give yourself extra time for whatever you have to do so that you have wiggle room to cope with the unexpected.", 
    
    
        "Parents: Please know this is an accident-prone day for your kids, which means you need to be extra vigilant. Be aware of potential hazardous situations. Know where your kids are at all times. Meanwhile, social occasions might be canceled or suddenly changed. Be on guard to avoid sports accidents.",
    
        "Your home routine will be interrupted. Small appliances might break down or minor breakages could occur. Perhaps someone unexpected will appear at the door? Brace yourself. Get dressed and prepare to deal with something you didn’t think would happen. “Nobody expects the Spanish Inquisition!'",
    
        "Please be aware this is an accident-prone day for you. We’re talking physical accidents or verbal accidents. Obviously, an accident doesn’t have to happen and will probably not happen — but the odds do exist. Therefore, pay attention to everything you say and do. Be smart.",
    
        "Keep an eye on your finances and your possessions today because something unexpected could affect these areas. You might find money; you might lose money. Make an effort to protect what you own against loss, theft or damage. Be on guard!",
    
        "Something surprising might occur in your closest one-to-one relationships today. Someone might suddenly speak up about something that they are unhappy about. They might make a radical suggestion. Something surprising could occur. Personal freedom will likely be an issue with someone. Patience.",
    
        "You feel restless today. You have that feeling you’re waiting for the other shoe to drop. Indeed, something surprising in your personal life or something going on behind the scenes might catch you off guard. Be wise and pace your day so that you can handle the unexpected.",
    
        "This is an interesting day because a friend or a member of a group might do something that amazes you or blows you out of the water. Admittedly, it could be minor; however, it could be major! You might be ejected from a group. You might be involved in a protest.",
    
        "Parents, bosses, VIPs and the police might do something that surprises you or catches you off guard today. Be prepared for this. If you think something unusual might happen, it will. If you are challenged by authority, be polite. Never underestimate the power of courtesy.",
    
        "Travel plans might suddenly change today. They could be canceled, or, alternatively, you might suddenly have to travel. Likewise, school schedules might change. People will be excited about politics, religion and racial issues. This is a tricky, stimulating day with lots of unexpected detours."
    
    ] 
    let selection = statements[Math.floor(Math.random() * statements.length)]
    console.log(selection);
    
    
    //checking month for corresponding zodiac sign
    
    if(check == "january") {
        
        let zodiacS = document.getElementById("statements")
        let horo = document.getElementById("horo")
        zodiacS.innerText = "capricorn"
        horo.innerText = selection
        var myObject = { 
        zodiacSign:"capricorn", 
        horoscope:selection}
            //saving to local storage
        localStorage.setItem("result", JSON.stringify(myObject))
    }
    
    
    if(check == "february") {
        let zodiacS = document.getElementById("statements")
        let horo = document.getElementById("horo")
        zodiacS.innerText = "aquarius"
        horo.innerText = selection
        var myObject = {
        zodiacSign:"aquarius", 
        horoscope:selection}
    
        localStorage.setItem("result", JSON.stringify(myObject))
     }
    
    
     if(check == "march") {
        let zodiacS = document.getElementById("statements")
        let horo = document.getElementById("horo")
        zodiacS.innerText = "pisces"
        horo.innerText = selection
     }
    
     if(check == "april") {
        let zodiacS = document.getElementById("statements")
        let horo = document.getElementById("horo")
        zodiacS.innerText = "Aries"
        horo.innerText = selection
     }
     if(check == "may") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Taurus"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
     }
     if(check == "june") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Gemini"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
     }
     if(check == "july") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Cancer"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
     }
     if(check == "august") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Leo"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
     }
    if(check == "september"){
        var newElement = document.createElement("h2")
        newElement.innerText = "Virgo"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
    }
    if(check == "october") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Libra"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
    }
    if(check == "november") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Scorpio"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
    }
    if(check == "december") {
        var newElement = document.createElement("h2")
        newElement.innerText = "Sagittarius"
        document.body.appendChild(newElement)
        var newHoro = document.createElement("p")
        newHoro.innerText = selection
        document.body.appendChild(newHoro)
    }
    
    }
    
    function retrieve() { //retrieving from local storage
        let zodiacS = document.getElementById("statements")
        let horo = document.getElementById("horo")
        let storageResult = JSON.parse(localStorage.getItem("result"))
        zodiacS.innerText = storageResult.zodiacSign
        horo.innerText = storageResult.horoscope
    }
    
    retrieve()