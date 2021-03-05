{
  /**
   * queue는 FIFO(First In First Out)선입 선출
   *
   * enqueue(원소(들)) : 큐의 뒤쪽에 원소(들)을 추가한다
   * dequeue() : 큐의 첫 번째 원소(큐의 맨 앞쪽에 위치한 원소)를 반환하고 큐에서 삭제
   * front() : 큐의 첫 번째 원소를 반환하되 큐 자체는 그대로 놔둔다(like stack의 peek())
   * isEmpty() : 큐가 비어 있으면 true를, 그 외에는 false를 반환
   *   : 큐의 원소 개수를 반환. 배열이 length와 같음
   */

  class Queue {
    constructor() {
      this.queue = [];
    }

    enqueue = (el) => {
      this.queue[this.queue.length] = el;
    };

    dequeue = () => {
      if (this.queue.length < 0) {
        new Error("queue가 비었습니다.");
      } else {
        let dequeue = this.queue[0];
        this.queue.splice(this.queue[this.queue.length], 1);

        return dequeue;
      }
    };

    front = () => this.queue[0];

    isEmpty = () => {
      return this.queue.length == 0;
    };

    size = () => {
      return this.queue.length;
    };
  }

  const hotPotato = (nameList, num) => {
    // 인스턴스 생성
    const queue = new Queue();
    // 참가자 전원의 이름을 배열로 읽어들여 큐에 추가
    for (let i = 0; i < nameList.length; i++) {
      queue.enqueue(nameList[i]);
    }

    let eliminate = "";

    // 이것을 반복하고 하나를 남긴다.
    while (queue.size() > 1) {
      // 일정 횟수 만큼 큐를 순회
      for (let j = 0; j < num; j++) {
        // 맨 앞에 원소를 꺼내어 맨 끝에 다시 넣는다
        queue.enqueue(queue.dequeue());
      }
      // 지정된 횟수만큼 반복된 후 꺼낸걸 넣지 않는다
      eliminate = queue.dequeue();
      console.log(`${eliminate}를 뜨거운 감자 게임에서 퇴장시킵니다.`);
    }
    // 이것을 반복하고 하나를 남긴다.
    const winner = queue.queue[0];
    console.log(queue.queue);
    console.log(`승자는 ${winner}입니다 `);
  };

  const nameList = ["jun", "jae", "star", "yeon"];

  hotPotato(nameList, 5);
}
