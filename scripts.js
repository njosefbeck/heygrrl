'use strict';
var messages = [
    "Why you still asleep!? Get yer lazy ass out that bed! You ain't no queen!",
    "That top with that skirt? What're you thinking?!",
    "I love you.",
    "I'm all about channeling your inner Beyoncé but not in those shoes.",
    "You gotta have some standards and \"basic\" shouldn't be one of them.",
    "I had a boyfriend that was a DJ, but then I got Spotify premium.",
    "I like my men how I like my coffee. Silent.",
    "Take as many selfies as you want, still doesn't make up for personality.",
    "Keep working hard girl, cuz we know that face isn't doing u any favors!!",
    "This is why people talk about you behind your back.",
    "I’m jealous of the people who don’t know you.",
    "I’m not that desperate, and you’re not that lucky.",
    "You’re like the first slice of bread: Everyone touches you but no one wants you.",
    "There are empty Petri dishes more cultured than you.",
    "May you always have slightly damp socks.",
    "You are a perfect example of why there are safety warnings on everything.",
    "Crawl back inside your mother and don’t come back out again until you’ve matured into a proper human being.",
    "If I could buy you for what I think you’re worth and sell you for what you think you’re worth, I’d be rich.",
    "If brains were dynamite, you wouldn’t have enough to pop a pimple.",
    "The only important things that you’ve done in your life were your exes.",
    "If people were spices, you’d be flour.",
    "I’m busy now. Can I ignore you some other time?",
    "You really shouldn’t use your entire vocabulary in one sentence.",
    "If I wanted to die I would jump off your ego onto your IQ.",
    "My teeth are brighter than your future.",
    "Has anyone ever told you how painfully mediocre you are?"
];

$(document).ready(function() {
    $('.message').html(messages[Math.floor(Math.random() * messages.length)]);
});
