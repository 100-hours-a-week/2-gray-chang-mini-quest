// 1번 퀘스트
const myFirstPromise = new Promise((resolve, reject) => {
    const message = "Hello, Promise!"
    if (message){
        resolve(message)
    } else {
        reject("no message")
    }
  });
  
  // 아래 코드는 수정하지 마세요.
  myFirstPromise.then(message => {
    console.log(message);
  });

  // 2번 퀘스트
const waitForMessage = async() => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hell, Async/Await"), 1000)
    })

    let result = await promise
    console.log(result)
}

waitForMessage()