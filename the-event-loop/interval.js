function countdown() {
  let count = 3;
  const decrement = setInterval(() => {
    console.log(count--);
    if (count === 0) {
      clearInterval(decrement);
      console.log('Blast off!');
    }
  }, 1000);
}
countdown();
