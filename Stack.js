{
  // stack LIFO(Last in First Out)
  // stack 구현에 필요한 메소드
  /**
   * push() : 스택 꼭대기에 새 원소를 추가
   * pop() : 스택 꼭대기에 있는 원소를 반환 + 해당 원소는 스택에서 삭제
   * peek() : 스택 꼭대기에 있는 원소 반환 + 변경x
   * isEmpty() : 스택이 비었으면(스택 크기 0) true 아니면 False
   * clear() : 스택의 모든 원소 삭제
   * size() :스택의 원소 개수를 반환(array의 length와 비슷)
   */
  /**
   * 스택은 배열로 저장 */

  //    클레스로 배열 구성하기(직접!!!!)
  class Stack {
    constructor() {
      this.stack = [];
    }

    push = (el) => (this.stack[this.stack.length] = el);

    pop = () => {
      //스택이 빈 경우
      if (this.stack.length < 0) {
        throw new Error("스택이 비었습니다.");
      } else {
        //스택이 차있는 경우
        let popEl = this.stack[this.stack.length - 1];
        this.stack = this.stack.slice(0, this.stack.length - 1);
        this.top--;
        return popEl;
      }
    };

    isEmpty = () => this.stack.length == 0;

    peek = () => this.stack[this.stack.length - 1];

    clear = () => {
      this.stack = [];
    };

    print = () => {
      for (let i = 0; i < this.stack.length; i++) {
        console.log(`index ${[i]}`, this.stack[i]);
      }
    };
  }

  //stack의 예
  const resursive = (data) => {
    if (data < 0) {
      console.log("ended");
    } else {
      console.log(data);
      resursive(data - 1);
      console.log("returned", data);
    }
  };

  resursive(4);
  /**
  4
3
2
1
0
'returned' 0
'returned' 1
'returned' 2
'returned' 3
'returned' 4
 */
}
