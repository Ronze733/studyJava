function call() {
  console.log("jm");
  console.log(20);
}

function print2dan() {
  for (let i = 1; i < 10; i++) {
    console.log(`2 X ${i} = ${2 * i}`);
  }
}

function add(a, b) {
  console.log(a + b);
}

function printGugudan(dan) {
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} X ${i} = ${dan * i}`);
  }
}

function printGugudan2() {
  let myInput = document.getElementById("i1");
  let myValue = myInput.value;
  //   alert(num);
  //   alert(myValue);
  for (let i = 1; i < 10; i++) {
    console.log(`${myValue} X ${i} = ${myValue * i}`);
  }

  myInput.value = "";
  myInput.focus();
}

function printGugudan3() {
  let myInput = document.myForm.i2;
  let myValue = myInput.value;
  // alert(myInput);
  //   alert(myValue);
  for (let i = 1; i < 10; i++) {
    console.log(`${myValue} X ${i} = ${myValue * i}`);
  }

  myInput.value = "";
  myInput.focus();

  return false;
}
