const boosts = [
  { name: "Creativity +5", desc: "Add 5 points to your Creativity skill." },
  { name: "Communication +3", desc: "Boost your Communication by +3." },
  { name: "Webdesign +4", desc: "Increase your Webdesign skill by 4." },
  { name: "Development +5", desc: "Add +5 to Development for this duel." },
  {
    name: "Critical Thinking +2",
    desc: "Improve your Critical Thinking by 2.",
  },
  {
    name: "Remove one penalty",
    desc: "Cancel one mission penalty applied to your talent.",
  },
  {
    name: "Double one skill",
    desc: "Choose one skill and double its value for this duel.",
  },
  { name: "+3 Final Score", desc: "Add +3 directly to your final duel score." },
  {
    name: "Highest Skill +5",
    desc: "Add +5 to the highest skill of your talent.",
  },
  {
    name: "+2 Mission Bonuses",
    desc: "Add +2 to all positive mission bonuses you receive.",
  },
];

function goToBoostPage() {
  document.getElementById("page-home").style.display = "none";
  document.getElementById("page-boost").style.display = "block";
  generateBoost();
}

function goHome() {
  document.getElementById("page-boost").style.display = "none";
  document.getElementById("page-home").style.display = "block";
}

function generateBoost() {
  const boost = boosts[Math.floor(Math.random() * boosts.length)];
  document.getElementById("boost").textContent = boost.name;
  document.getElementById("description").textContent = boost.desc;

  // CONFETTI
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });
}
