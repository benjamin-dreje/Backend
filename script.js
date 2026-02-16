function sendPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(33333);
    }, 2000);
  });
}

const test = sendPromise();
test.then((res) => {
console.log(res);
});
