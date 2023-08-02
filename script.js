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
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  h = h > 9 ? h : "0" + h;
  m = m > 9 ? m : "0" + m;

  li = $("<li></li>").text(
    "Hello, you can say anything and I will give you a random response."
  );
  sp = $("<span></span>").text(h + ":" + m);
  sp.addClass("time");
  li.append(sp);
  $("#messages").append(li);

  $("button").click(function (e) {
    e.preventDefault();

    message = $("#input").val();
    if (message != "") {
      date = new Date();
      h = date.getHours();
      m = date.getMinutes();
      h = h > 9 ? h : "0" + h;
      m = m > 9 ? m : "0" + m;

      li = $("<li></li>").text(message);
      sp = $("<span></span>").text(h + ":" + m);
      sp.addClass("time");
      li.append(sp);
      $("#messages").append(li);
      $("#input").val("");

      date = new Date();
      h = date.getHours();
      m = date.getMinutes();
      h = h > 9 ? h : "0" + h;
      m = m > 9 ? m : "0" + m;
      randomNumber = Math.round(Math.random() * 24);
      console.log(randomNumber);
      li = $("<li></li>").text(randomMessages[randomNumber]);
      sp = $("<span></span>").text(h + ":" + m);
      sp.addClass("time");
      console.log(randomMessages[randomNumber]);
      li.append(sp);
      $("#messages").append(li);

      //from stackoverflow https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
});
