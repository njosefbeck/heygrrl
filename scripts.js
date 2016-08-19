'use strict';
var messages = [
    "That outfit is hideous. Who do you think you are?",
    "Why you still asleep!? Get yer lazy ass out that bed! You ain't no queen!",
    "You need to go for a run... do some cardio... something. Jesus!",
    "That top with that skirt? What're you thinking?!",
    "Go to the store and get a paper bag to put over that nasty haircut you got. It ain't doin' you any favors.",
    "I love you.",
    "Don't drink too much tonight now. Vomiting on your hookup again will do nothing for your reputation...",
    "Drink eight glasses of water everyday!",
    "I'm all about channeling your inner Beyoncé but not in those shoes.",
    "You gotta have some standards and \"basic\" shouldn't be one of them.",
    "I had a boyfriend that was a DJ, but then I got Spotify premium.",
    "I like my men how I like my coffee. Silent.",
    "Take as many selfies as you want, still doesn't make up for personality.",
    "Keep working hard girl, cuz we know that face isn't doing u any favors!!"
];

$(document).ready(function() {
    $('.message').html(messages[Math.floor(Math.random() * messages.length)]);
});