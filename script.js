let notificationList=[
    {
        from: '',
        message: '',
        time: '',
        key: ''
    }
];

var main=document.querySelector("#notifications");

function update () {
    var notificationString;
    {notificationList.map( i => {
        return(`<div key="`+ i.key + `" class="notification">
        <span class="from">`+i.from+`</span>
        <span class="message">`+i.message+`</span>
        <span class="red"></span>
        <div class="time">`+i.time+`</div`);
        
    })};
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