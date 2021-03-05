{
  // 배열 선언
  const daysOfWeek = new Array();

  const daysOfWeek = [];
  // 이렇게 선언하는게 더 좋음

  const daysOfweek = new Array(7);
  // 인자를 주면 크기를 지정

  const daysOfWeek = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
}
//
{
  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  daysOfWeek.length;

  // 대괄호 안에 index를 넣으면 배열안의 값에 접근할 수 있다
  for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
  }

  // 예) finonacci 수열
  const fibonacci = [];
  fibonacci[1] = 1;
  fibonacci[2] = 2;

  for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  for (let i = 3; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
  }
}

{
  // 배열 추가
  //   push pop은 stack 자료구조를 모방
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  number[number.length] = 10;

  number.push(11);
  number.push(12, 13);
  console.log(number.length);

  // 배열 앞에 넣으려는 인덱스 처리
  for (let i = number.length; i >= 0; i--) {
    number[i] = number[i - 1];
  }
  number[0] = -1;

  // js내장 함수

  number.unshift(-2);
  number.unshift(-4, -3);
}

{
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 배열의 맨 앞부분을 지우는 js내장 함수
  number.shift();
  // 배열 맨 앞부분 지우는 shift의 코드화
  for (let i = 0; i < number.length; i++) {
    number[i] = number[i + 1];
  }
  // 배열의 길이가 줄지 않는다!(배열의 원래 값들이 덮어쓰인 것이지 실제로 값을 삭제한 것이 아님)

  //   shift,unshift는 queue 자료구조를 모당
}

{
  // splice vs slice

  // 배열의 특정 위치에 원소 추가/삭제 splice
  // splice(해당 index아래 삭제, 해당 인덱스로부터 몇개를 삭제할지:지정안하면 끝까지,...추가할 것들)

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  numbers.splice(5, 3);
  numbers.splice(5, 0, 2, 3, 4);

  //   slice는 잘라서 새로운 배열을 반환 추가 기능은 없음
}

{
  // 2차원과 다차원 배열

  // 관리하기 힘든 배열!
  const averageTempDay1 = [72, 75, 79, 79, 81, 81];
  const averageTempDay2 = [81, 79, 75, 75, 73, 72];

  // 수정
  const averageTemp = [
    [72, 75, 79, 79, 81, 81],
    [81, 79, 75, 75, 73, 72],
  ];

  const printMatrix = (myMatrix) => {
    for (let i = 0; i < myMatrix.length; i++) {
      for (let j = 0; j < myMatrix[i].length; j++) {
        console.log(myMatrix[i][j]);
      }
    }
  };

  printMatrix(averageTemp);
}

{
  // every : 전부다 조건에 만족하냐?

  const checkedValue = (value) => value < 5;
  // 해당 조건을 맞족하냐

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 이게

  arr.every(checkedValue, arr); //하나라도 아니면 false
}

{
  // join vs toString = valueOf
  //join(seperator:분류 할것들!)
  //배열 안에 있는 모든 value를 합쳐서  문자열로!! join

  const arr = ["s", "t", "r", "i", "n", "g"];

  arr.join(); //'s,t,r,i,n,g'
  arr.join(""); //'string'
  arr.join("-"); //'s-t-r-i-n-g'
  arr.toString(); //'s,t,r,i,n,g'
  arr.valueOf(); //'s,t,r,i,n,g'
}

{
  // 여러배열 합치기

  const zero = 0;
  const positiveNumbers = [1, 2, 3];
  const negativeNumbers = [-3, -2, -1];
  const number = negativeNumbers.concat(zero, positiveNumbers);

  number; //-3,-2,-1,0,1,2
}

// 반복자 함수
{
  {
    // every
    // every 함수의 결과 값이 false가 될 때 까지 배열의 모든 원소를 반복
    const isEven = (x) => (x % 2 == 0 ? true : false);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    numbers.every(isEven); //false
    // 함수의 결과 값이 true가 될 때 까지 배열의 모든 원소를 반복

    [12, 5, 8, 130, 44].every((elem) => elem >= 10); // false 5에서 멈춤
    [12, 54, 18, 130, 44].every((elem) => elem >= 10); // true 안멈추고 계속
  }

  {
    //   some
    const isEven = (x) => (x % 2 == 0 ? true : false);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numbers.some(isEven); //true
    {
      [2, 5, 8, 1, 4].some((elem) => elem > 10); // false
      [12, 5, 8, 1, 4].some((elem) => elem > 10); // true
    }

    {
      const fruits = ["apple", "banana", "mango", "guava"];

      const checkAvailability = (arr, val) =>
        arr.some((arrVal) => val === arrVal);

      checkAvailability(fruits, "kela"); //false
      checkAvailability(fruits, "banana"); //true
    }
  }

  {
    // forEach : 조건에 상관없이 배열의 모든 원소 반복

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numbers.forEach((x) => console.log(x % 2 == 0));
  }

  {
    // map : 조건 없이 배열의 모든 원소 반복 후 새 배열 객체로 반환
  }
  {
    // filter : 함수의 결과 값을 true로 만드는 원소로만 구성된 새 배열 반환

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    arr.filter((x) => x > 4);
  }

  //   검색과 정렬
  {
    //  sort의 활용

    const arr = [1, 13, 2, 43, 24, 53, 263, 53];
    arr.sort((a, b) => a - b); //[1,  2, 13,  24, 43, 53, 53, 263]

    const compare = (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      //a,b가 같을 경우
      return 0;
    };
    //   이 로직과 같음
    arr.sort(compare);

    // 응용
    const friends = [
      { name: "John", age: 34 },
      { name: "Camila", age: 21 },
      { name: "Jack", age: 30 },
    ];

    const comparePerson = (a, b) => {
      if (a.age < b.age) {
        return -1;
      }
      if (a.age > b.age) {
        return 1;
      }
      return 0;
    };

    friends.sort(comparePerson);
    // [
    //     { name: 'Camila', age: 21 },
    //     { name: 'Jack', age: 30 },
    //     { name: 'John', age: 34 }
    //   ]

    //문자열 sort는 대문자 -> 소문자 (아스키)
    const names = ["Ana", "ana", "john", "John"];
    console.log(names.sort());
    // 알파벳 순으로 나타내고 싶다면
    const compareName = (a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      return 0;
    };

    names.sort(compareName);
  }
}
