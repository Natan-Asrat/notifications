var main=document.querySelector("#notifications");

var count=0;

function initiate(){
    var notificationString="";
    notificationList.map( i => {
        notificationString+=`<div key="`+ i.key + `" class="notification">
        <img src="` + i.image + `" >
        <div>
        <span class="from">`+i.from+`</span>
        <span class="message">`+i.message+`</span>
        <span class="red"></span>
        <div class="time">`+i.time+`</div>
        </div></div>`;

    });
    var notificationElement= document.createElement('section');
    notificationElement.innerHTML=notificationString;
    console.log(notificationString);
    console.log(notificationElement);
    main.prepend(notificationElement);
    update();
}

function update () {
    var allNots=document.querySelectorAll(".notification");
    document.querySelector("#mark-all").addEventListener("click", markAllAsRead);
    unread(allNots);
    read(allNots);
    var notCount=document.querySelector("#not-count");
    notCount.innerHTML=count;
    if(notCount==0){
        document.querySelector('#mark-all').style.display='none';
    }else if(notCount>0){
        document.querySelector('#mark-all').style.display='inline-block';
    }
    console.log("count: " + count);
}

function unread(allNots){
    [...allNots].forEach( n => {
        if(!n.classList.contains("read")){
            n.classList.add("unread");
        }
    });
    count=document.querySelectorAll(".unread").length;
    
}

function read(allNots){
    [...allNots].forEach( n => {
            n.addEventListener('click', () => {
                if(!n.classList.contains("read")){
                    n.classList.add("read");
                }
                if(!(n.querySelector(".red").classList.contains(".hide"))){
                    n.querySelector(".red").classList.add("hide");
                }
                n.classList.remove(".read");
                n.classList.remove("unread");
                console.log("success");
                update();     
        })
        
    });
    
}

function markAllAsRead(){
    let allNots=document.querySelectorAll(".notification");
    [...allNots].forEach(n => {
        if(!n.classList.contains("read")){
            n.classList.add("read");
        }
        if(!(n.querySelector(".red").classList.contains(".hide"))){
            n.querySelector(".red").classList.add("hide");
        }
        n.classList.remove(".read");
        n.classList.remove("unread");
        console.log("success");
        document.querySelector("#mark-all").style.display='none';

        update();
    });
}

/*
<div key="key" class="notification">
    <span> from </span>
    <span> message </span>
    <span class="red"></span>
    <div>
        time
    </div>
</div>
*/
document.querySelector("body").onload=initiate;

let notificationList=[
    {
        from: 'Mark Webber',
        message: 'reacted to your recent post My first tournament today!',
        time: '1m ago',
        key: '1',
        image: './assets/images/avatar-mark-webber.webp'
    },
    {
        from: 'Angela Gray',
        message: 'followed you',
        time: '5m ago',
        key: '2',
        image: './assets/images/avatar-angela-gray.webp'
    },
    {
        from: 'Jacob Thompson',
        message: 'has joined your group Chess Club',
        time: '1 day ago',
        key: '3',
        image: './assets/images/avatar-jacob-thompson.webp'
    },
    {
        from: 'Rizky Hasanuddin',
        message: 'sent you a private message',
        time: '5 days ago',
        key: '4',
        image: './assets/images/avatar-rizky-hasanuddin.webp'
    },
    {
        from: 'Kimberly Smith',
        message: 'commented on your picture',
        time: '1 week ago',
        key: '5',
        image: './assets/images/avatar-kimberly-smith.webp'
    },
    {
        from: 'Nathan Peterson',
        message: 'reacted to your recent post 5 end-game strategies to increase your win rate',
        time: '2 weeks ago',
        key: '6',
        image: './assets/images/avatar-nathan-peterson.webp'
    },
    {
        from: 'Anna Kim',
        message: 'left the group Chess Club',
        time: '2 weeks ago',
        key: '7',
        image: './assets/images/avatar-anna-kim.webp'
    }
];

