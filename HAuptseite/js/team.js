
const boxOwners = document.getElementById("owners_list");

const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        "id": "749592637455073300",
        "post": "Ownerin",
        "DCURL":  "https://discord.gg/3KbEsy7E2A"
    }
]
const dev = [
    {
        "id": "405427472436559884",
        "post": "Co-Owner",
        "DCURL":  "https://discord.gg/k4NYGsn8Rw"
    }
]
const web = [
    {
        "id": "167994527255101440",
        "post": "Web Development",
        "DCURL":  "https://twitch.tv/lukiworker"
    }
]

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll("").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px; color: #FF00FF;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #FF00FF;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.DCURL + "' target='_blank'><button style='color: #FF00FF;'>Zum Discord</button></a></div><div class='follow-btn'><a href='"
            boxOwners.innerHTML += ownerList;
        });
}

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = dev[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll("").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px; color: #FF00FF;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #FF00FF;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.DCURL + "' target='_blank'><button style='color: #FF00FF;'>Zum Discord</button></a></div><div class='follow-btn'><a href='"
            boxOwners.innerHTML += ownerList;
        });
}


for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = web[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll("").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px; color: #FF00FF;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #FF00FF;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.DCURL + "' target='_blank'><button style='color: #FF00FF;'>Twitch</button></a></div><div class='follow-btn'><a href='"
            boxOwners.innerHTML += ownerList;
        });
}