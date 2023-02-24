var main=document.querySelector("#notifications");

var count=0;


function update () {
    var notificationString="";
    notificationList.map( i => {
        notificationString+=`<div key="`+ i.key + `" class="notification">
        <span class="from">`+i.from+`</span>
        <span class="message">`+i.message+`</span>
        <span class="red"></span>
        <div class="time">`+i.time+`</div></div>`;
    });
    var notificationElement= document.createElement('section');
    notificationElement.innerHTML=notificationString;
    console.log(notificationString);
    console.log(notificationElement);
    main.prepend(notificationElement);
    unread();
    var notCount=document.querySelector("#not-count");
    notCount.innerHTML=count;
    console.log("count: " + count);
}
function unread(){
    var allNots=document.querySelectorAll(".notification");
    [...allNots].forEach( n => {
        if(!n.classList.contains("read")){
            n.classList.add("unread");
        }
    });
    count=document.querySelectorAll(".unread").length;
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
document.querySelector("body").onload=update;

let notificationList=[
    {
        from: 'Mark Webber',
        message: 'reacted to your recent post My first tournament today!',
        time: '1m ago',
        key: '1'
    },
    {
        from: 'Angela Gray',
        message: 'followed you',
        time: '5m ago',
        key: '2'
    },
    {
        from: 'Jacob Thompson',
        message: 'has joined your group Chess Club',
        time: '1 day ago',
        key: '3'
    },
    {
        from: 'Rizky Hasanuddin',
        message: 'sent you a private message',
        time: '5 days ago',
        key: '4'
    },
    {
        from: 'Kimberly Smith',
        message: 'commented on your picture',
        time: '1 week ago',
        key: '5'
    },
    {
        from: 'Nathan Peterson',
        message: 'reacted to your recent post 5 end-game strategies to increase your win rate',
        time: '2 weeks ago',
        key: '6'
    },
    {
        from: 'Anna Kim',
        message: 'left the group Chess Club',
        time: '2 weeks ago',
        key: '7'
    }
];
