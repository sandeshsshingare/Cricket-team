var teamData = localStorage.getItem("teamkey");

var getlocal = JSON.parse(teamData);

var teamDataArr = getlocal ? getlocal : new Array();
// document.getElementById("add").addEventListener("click", addPlayer());
function addPlayer() {
  var name = document.getElementById("name");
  var catagory = document.getElementById("catagory");
  var matches = document.getElementById("matches");
  var run = document.getElementById("runs");
  let flag = true;
  let flag1 = true;
  // console.log(teamDataArr[0].name);
  console.log(name.value);
  if (teamDataArr.length > 10) {
    alert("11 players are completed");
    flag = false;
  }

  for (let i = 0; i < teamDataArr.length; i++) {
    if (teamDataArr[i].name.toUpperCase() == name.value.toUpperCase()) {
      alert("You enterned same player please change name");
      flag1 = false;
      break;
    }
  }

  if (flag && flag1) {
    // alert(flag);
    if (name.value.trim() != "") {
      let teamObj = {
        name: name.value,
        catagory: catagory.value,
        matches: matches.value ? matches.value : 00,
        run: run.value ? run.value : 00,
      };
      //   console.log(teamObj);
      teamDataArr.push(teamObj);
      localStorage.setItem("teamkey", JSON.stringify(teamDataArr));
    } else {
      alert("Please enter name of player");
    }
  }
  show();
  name.value = "";
  run.value = "";
  matches.value = "";
}

// Show  function

function show() {
  let showtable = document.getElementById("showtable");
  console.log(showtable);
  let str = "";
  str = `<table style="background-color: rgb(213, 239, 239); margin: auto; width: 60%; border: 4px dotted black"><tr>
                <th style = "padding:30px; border:1px solid red">Name</th>
                <th style = "padding:30px; border:1px solid red">Catagory</th>
                <th style = "padding:30px; border:1px solid red">Matches</th>
                <th style = "padding:30px; border:1px solid red">Run</th>
                <th style = "padding:30px; border:1px solid red">Edit</th>
                <th style = "padding:30px; border:1px solid red">Del</th>
                </tr>`;
  for (let i = 0; i < teamDataArr.length; i++) {
    str += `
    <tr>
                
                <td style = "padding:30px; border:1px solid black">${teamDataArr[i].name}</td>
                    <td style = "padding:30px; border:1px solid black">${teamDataArr[i].catagory}</td>
                    <td style = "padding:30px; border:1px solid black">${teamDataArr[i].matches}</td>
                    <td style = "padding:30px; border:1px solid black" > ${teamDataArr[i].run}</td>
                    <td style = "padding:30px; border:1px solid black"><button onclick = "edit(${i})"> Edit</button></td>
                    <td style = "padding:30px; border:1px solid black"><button onclick = "deletePlayer(${i})">Delete</button></td>
                    <td>
                    </tr>
    `;
  }
  str += `</table`;
  showtable.innerHTML = str;
  document.getElementById("editDiv").style.display = "none";
}
var index;
function edit(i) {
  index = i;
  let name = document.getElementById("name1");
  let catagory = document.getElementById("catagory1");
  let matches = document.getElementById("matches1");
  let run = document.getElementById("runs1");
  console.log(run);
  document.getElementById("addDiv").style.display = "none";
  document.getElementById("editDiv").style.display = "block";

  name.value = teamDataArr[i].name;
  catagory.value = teamDataArr[i].catagory;
  matches.value = teamDataArr[i].matches;
  run.value = teamDataArr[i].run;
}
function updatePlayer() {
  document.getElementById("addDiv").style.display = "block";
  document.getElementById("name1").readOnly = true;
  let catagory = document.getElementById("catagory1");
  let matches = document.getElementById("matches1");
  let run = document.getElementById("runs1");
  // let flag2 = true;
  // for (let i = 0; i < teamDataArr.length; i++) {
  //   if (teamDataArr[i].name.toUpperCase() == name.value.toUpperCase()) {
  //     alert("You enterned same player please change name");
  //     flag2 = false;
  //     break;
  //   }
  // }

  // name1.readOnly = true;

  teamDataArr[index].catagory = catagory.value;
  teamDataArr[index].matches = matches.value;
  teamDataArr[index].run = run.value;
  console.log("updated succefully", index);

  show();
}
function deletePlayer(id) {
  for (let i = id; i < teamDataArr.length; i++) {
    teamDataArr[i] = teamDataArr[i + 1];
  }
  teamDataArr.pop();
  show();
  console.log("deleted succefully");
  localStorage.setItem("teamkey", JSON.stringify(teamDataArr));
}
