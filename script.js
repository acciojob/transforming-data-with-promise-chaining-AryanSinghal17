let btn = document.getElementById('btn');
let num = document.getElementById('ip');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num.value);
    }, 2000);
  })

  .then((result) => {
    output.innerText = `Result: ${result}`;
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
      resolve(result);
    }, 2000);
    })
  })

  .then((result)=>{
    result = result*2;
    output.innerText = `Result ${result}`;
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(result);
      },1000)
    })
  })

  .then((result)=>{
    result = result - 3;
    output.innerText = `Result ${result}`;
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(result);
      },1000)
    })
  })

  .then((result)=>{
    result = result/2;
    output.innerText = `Result ${result}`;
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(result);
      },1000)
    })
  })

  .then((result)=>{
    result = result+10;
    output.innerText = `Result ${result}`;
  })
});