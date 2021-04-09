let i = 0;
myquestion = [
  [
    " HTML stands for?",
    "Hyper Text Markup Language",
    "High Text Markup Langugage",
    "Hyper Tabular Markup Language",
    "None of these",
    "1",
  ],
  [
    "which of the following tag is used to mark a begining of paragraph ?",
    "<TD>",
    `<br>`,
    `<P>`,
    "<TR>",
    "3",
  ],
  [
    "Correct HTML tag for the largest heading is",
    "<head>",
    "<h6>",
    "<heading>",
    "<h1>",
    "4",
  ],
  [
    "The attribute of form tag",
    "Method",
    "Action",
    "Both (a) & (b)",
    "None of tehse",
    "3",
  ],
];

function loadQuestion() {
  document.getElementById("mylabel").innerHTML = myquestion[i][0];
  var x1 = document.getElementById("op1");
  var x2 = document.getElementById("op2");
  var x3 = document.getElementById("op3");
  var x4 = document.getElementById("op4");

  x1.value = myquestion[i][1];
  x2.value = myquestion[i][2];
  x3.value = myquestion[i][3];
  x4.value = myquestion[i][4];

  x1.style.backgroundColor = "#fff";
  x2.style.backgroundColor = "#fff";
  x3.style.backgroundColor = "#fff";
  x4.style.backgroundColor = "#fff";
}

function changeQuestion() {
  i = i + 1;
  loadQuestion();
}

function checkAnswer(p, x) {
  // var click = document.getElementsByTagName(input).id;

  ans = parseInt(myquestion[i][5]);
  if (ans == x) {
    // alert("Correct answer");
    document.getElementById(p).style.backgroundColor = "green";
  } else {
    //alert("false answer");
    document.getElementById(p).style.backgroundColor = "red";
    //document.getElementById(p).style.backgroundColor = "green";

    showRIghtAnswer(ans);
  }
}

function showRIghtAnswer(ans) {
  switch (ans) {
    case 1:
      document.getElementById("op1").style.backgroundColor = "green";
      break;
    case 2:
      document.getElementById("op2").style.backgroundColor = "green";
      break;
    case 3:
      document.getElementById("op3").style.backgroundColor = "green";
      break;
    case 4:
      document.getElementById("op4").style.backgroundColor = "green";
      break;
  }
}
