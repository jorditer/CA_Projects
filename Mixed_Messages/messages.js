const phrases = [
    "to listen to Rage Against the Machine get some energy back!", 
    "to listen to Daughter to let go of everything you've bottled up inside", 
    "to play some funky music! That will cheer you up!",
    "focusing on the reality of what's happening to you, music can't fix everything..."
]

let phrase = phrases[Math.floor(Math.random()*phrases.length)];

console.log(`Today what you should do to cheer up is ${phrase}`)