//1번 클래스
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    area = ()=>{
        return this.width * this.height
    }

    perimeter = ()=>{
        return (this.width + this.height)*2
    }
}

const test = new Rectangle(1,2);
console.log(test.area())
console.log(test.perimeter())

//2번 퀘스트
class Square extends Rectangle{
    isSquare = ()=>{
        if (this.width == this.height){
            return true
        } return false
    }
}

const squareTest = new Square(2,3)
console.log(squareTest.area())
console.log(squareTest.isSquare())