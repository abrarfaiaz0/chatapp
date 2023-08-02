//random responses generated via ChatGPT
const randomMessages = [
  "Embrace the unknown.",
  "Spread kindness always.",
  "Fear limits growth.",
  "Find inner peace.",
  "Love conquers all.",
  "Cherish happy moments.",
  "Believe in possibilities.",
  "Hope fuels resilience.",
  "Dream big, achieve more.",
  "Gratitude brings joy.",
  "Mistakes teach wisdom.",
  "Time is precious.",
  "Empathy builds bridges.",
  "Smile, it's contagious.",
  "Balance for harmony.",
  "Change is inevitable.",
  "Forgive and heal.",
  "Trust your intuition.",
  "Laughter heals wounds.",
  "Stay curious, keep learning.",
  "Patience breeds understanding.",
  "Compassion enriches lives.",
  "Simplicity brings clarity.",
  "Courage transforms fears.",
  "Inspire with your actions.",
];

$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    message = $("#input").val();
    if (message != "") {
      li = $("<li></li>").text(message);
      $("#messages").append(li);
      $("#input").val("");

      randomNumber = Math.round(Math.random() * 24);
      console.log(randomNumber);
      li = $("<li></li>").text(randomMessages[randomNumber]);
      console.log(randomMessages[randomNumber]);
      $("#messages").append(li);

      //from stackoverflow https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
});
