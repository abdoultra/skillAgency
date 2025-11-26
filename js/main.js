const boosts = [
  { name: "Creativity +5", desc: "Add 5 points to your Creativity skill." },
  { name: "UX Design +4", desc: "Improve your UX Design skill by 4 points." },
  {
    name: "Time Management +3",
    desc: "Boost your Time Management by 3 points.",
  },
  { name: "Coding +5", desc: "Increase your Coding skill by 5 points." },
  {
    name: "UI Design +4",
    desc: "Strengthen your UI Design skill by 4 points.",
  },
  {
    name: "Attention to Detail +3",
    desc: "Enhance your precision with +3 points.",
  },
  {
    name: "Marketing Knowledge +4",
    desc: "Add +4 to your Marketing Knowledge skill.",
  },
  { name: "Communication +5", desc: "Boost your Communication skill by 5." },
  {
    name: "Graphic Design +4",
    desc: "Increase your Graphic Design skill by 4 points.",
  },
  {
    name: "Budget Management +3",
    desc: "Improve your Budget Management by 3 points.",
  },
  { name: "Animation +5", desc: "Gain +5 points in Animation skill." },
  { name: "Management +4", desc: "Add +4 to your Management skill." },
  {
    name: "Data Analysis +5",
    desc: "Boost your Data Analysis skill by 5 points.",
  },
  {
    name: "Problem Solving +3",
    desc: "Improve your Problem Solving with +3 points.",
  },
  {
    name: "Logical Thinking +4",
    desc: "Strengthen your Logical Thinking by 4 points.",
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
