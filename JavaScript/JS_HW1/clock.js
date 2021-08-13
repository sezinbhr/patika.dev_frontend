function getName() {
    let userName = prompt("Please, enter your name");
    document.getElementById("userName").innerHTML = userName;
}

function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
    let datestr = "";

    switch (day) {
        case 0:
            datestr = "Sunday";
            break;
        case 1:
            datestr = "Monday";
            break;
        case 2:
            datestr = "Tuesday";
            break;
        case 3:
            datestr = "Wednesday";
            break;
        case 4:
            datestr = "Thursday";
            break;
        case 5:
            datestr = "Friday";
            break;
        case 6:
            datestr = "Saturday";
            break;
        default:
            datestr = "Error!";
            break;
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let clock = (`${hour}: ${minute}: ${second} ${datestr}`);

    document.getElementById("time").innerText = clock;
    document.getElementById("time").textContent = clock;

    setTimeout(getTime, 1000);
}

getName();
getTime();
