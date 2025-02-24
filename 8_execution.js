//1번 퀘스트
const message = 'Hello, JavaScript!';

const showMessage = () => {
  console.log(message); // A
  let message = 'Hello, ES6!';
  console.log(message); // B
};

showMessage();
/*
실행 시 A에서 에러가 발생한다. let변수의 경우 선언만 되고 초기화되지 않기 때문이다. 
만약 변수 타입을 var로 바꾼다면 A에서 undifined라고 출력할 것이다.
 */

//2번 퀘스트
const color = 'blue';

const firstLevel = () => {
  let color = 'red';
  
  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1)
  };
  
  secondLevel();
  console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)

/*
먼저 firstLevel이 실행된다. 그러면 color에는 red가 들어간 상태이다.
그 상황에서 firstLevel 안에 secondLevel이 실행된다. secondLevel 안의 color인 green이 출력된다 -(1)
그리고 secondLevel 실행을 마치고 firstLevel이 실행되는데 이때 color의 지역스코프에 의해 red이다. -(2)
마지막으로 전역으로 선언된 color가 출력되게 된다. -(3) 
*/