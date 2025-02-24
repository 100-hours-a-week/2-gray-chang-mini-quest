//1번 퀘스트
import {add} from './math.js'

console.log(add(2,3))

//2번 퀘스트
/*아래의 요구사항을 충족하는 코드를 작성하세요.
- "operations.js" 모듈 파일을 만들고, 여기에 두 숫자를 더하는 add 함수와 두 숫자를 빼는 subtract 함수를 정의한 후, Named Export를 사용하여 이 두 함수를 내보내세요.
- "userProfile.js" 모듈 파일에서, 사용자의 이름(name)과 나이(age)를 속성으로 갖는 User 클래스를 정의하고, 이 클래스를 Default Export로 내보내세요.
- "app.js" 파일에서 "operations.js" 모듈의 add와 subtract 함수를 가져와서 사용하고, "userProfile.js"에서 User 클래스를 가져와 사용하는 예제 코드를 작성하세요.*/

import {addV2, subtract} from './operations.js'
import User from './userProfile.js'

console.log(addV2(1,2) + subtract(1,2))
const user1 = new User("gray", 30)
user1.greeting()