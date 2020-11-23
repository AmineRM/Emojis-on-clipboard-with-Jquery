var Emoji =  [
    "🙂",
    "😄",
    "😂",
    "🥰",
    "🤑",
    "🤔",
    "😴",
    "🤠",
    "😭",
    "😠",
    "😮",
    "💩",
    "🤡",
    "👻",
    "💪",
    "🧠",
    "👦",
    "👧",
    "⚽",
    "🌍",
    "❤️",
    "🔥",
    "👽",
    "👋",
    "🍉",
    "🍊",
    "🥝",
    "🍗"
]
var e;

var content = document.getElementById("content")

function Element(){
    for (let i = 0; i < Emoji.length; i++) {
        content.innerHTML += "<div value=\""+ i +"\" class=\"section\"><p>"+ Emoji[i] +"</p></div>"
    }
}
Element();
 
this.addEventListener("click" , () => {
    console.log(this.value)
    /*var Number = this.value;
    var copyText = Emoji[Number];
    copyText.select();
    document.execCommand("copy");*/
})