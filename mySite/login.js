function login() {
  let nameInput = document.getElementById("name");
  let idInput = document.getElementById("id");
  let pwInput = document.getElementById("pw");

  //   console.log(nameInput);
  //   console.log(idInput);
  //   console.log(pwInput);

  let nameValue = nameInput.value;
  let idValue = idInput.value;
  let pwValue = pwInput.value;

  //   console.log(nameValue);
  //   console.log(idValue);
  //   console.log(pwValue);

  if (nameValue == "") {
    alert("이름을 입력하세요!");
    nameInput.focus();
    return;
  } else if (idValue == "") {
    alert("ID를 입력하세요!");
    idInput.focus();
    return;
  } else if (pwValue == "") {
    alert("pw를 입력하세요!");
    pwInput.focus();
    return;
  }
  location.href =
    "loginOutPut.html?name=" + nameValue + "&id=" + idValue + "&pw=" + pwValue;
}

function login2() {
  let nameValue = document.getElementById("name").value;
  let idValue = document.getElementById("id").value;
  let pwValue = document.getElementById("pw").value;

  document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <script src="login.js"></script>
      <style>
        /* .container {
          width: 500px;
          height: 600px;
          border: 1px solid black;
        }
  
        .header {
          height: 60px;
          border: 1px solid black;
          text-align: center;
        }
        .nav {
          display: flex;
        } */
      </style>
    </head>
    <body onload="setVal()">
      <!-- <div class="container">
        <div class="header">title</div>
        <div class="header nav">
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
        <div>content</div>
      </div> -->
      <table id="site-tbl" border="1">
        <tr>
          <td>
            <a href="index.html">jm's website</a>
          </td>
        </tr>
      </table>
      <table id="site-menu-tbl" border="1">
        <tr>
          <td><a class="menu-class" href="menu.html">menu</a></td>
          <td><a class="menu-class" href="join.html">가입</a></td>
          <td><a class="menu-class" href="slider.html">슬라이드</a></td>
          <td><a href="https://www.naver.com" target="_blank">네이버로</a></td>
          <td><a class="menu-class" href="login.html">로그인</a></td>
          <td><a class="menu-class" href="">나이</a></td>
        </tr>
      </table>
      <table id="content-tbl">
        <tr>
          <td><table border="1" id="login-tbl">
            <tr>
              <td>이름</td>
              <td id="name-td">${nameValue}</td>
            </tr>
            <tr>
              <td>ID</td>
              <td id="id-td">${idValue}</td>
            </tr>
            <tr>
              <td>PW</td>
              <td id="pw-td">${pwValue}</td>
            </tr></td>
        </tr>
      </table>
    </body>
  </html>`);
}

function login3() {
  let nameInput = document.getElementById("name");
  let idInput = document.getElementById("id");
  let pwInput = document.getElementById("pw");

  let nameValue = nameInput.value;
  let idValue = idInput.value;
  let pwValue = pwInput.value;

  let nameTd = document.getElementById("name-td");
  let idTd = document.getElementById("id-td");
  let pwTd = document.getElementById("pw-td");

  //   console.log(nameTd);
  //   console.log(idTd);
  //   console.log(pwTd);

  nameTd.innerText = "<h2>" + nameValue + "</h2>";
  idTd.innerHTML = "<h2>" + idValue + "</h2>";
  pwTd.innerText = pwValue;

  //   nameInput.remove();
}

// loginOutPut 영역
/////////////////////
function setVal() {
  let urlParams = new URL(location.href).searchParams;
  let nameParam = urlParams.get("name");
  let idParam = urlParams.get("id");
  let pwParam = urlParams.get("pw");

  console.log(nameParam);
  console.log(idParam);
  console.log(pwParam);

  let nameTd = document.getElementById("name-td");
  let idTd = document.getElementById("id-td");
  let pwTd = document.getElementById("pw-td");

  nameTd.innerText = nameParam;
  idTd.innerText = idParam;
  pwTd.innerText = pwParam;
}
