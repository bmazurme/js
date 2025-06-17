function slave() {
  console.log(4);
  // return;
  throw new Error('err slave')
}

function main() {
  try {
    console.log(1);
    slave();
    console.log(2);
  } catch (e) {
    console.log(3);
    console.log(5, e.message);
    return e.message;
  }
}

console.log(main());
