## Interface 인터페이스
1. 사양에 맞는 값과 연결된 속성키의 세트
2. 어떤 Object라도 인터페이스의 정의를 충족시킬 수 있다.
3. 하나의 Object는 여러개의 인터페이스를 충족시킬 수 있다.

1. test 인터페이스를 구현해보자. (인자를 하나 받아서 true를 반환하는 인터페이스)
```
const object = {
  test(str) {
    return ture
  }
}
```
```
const Test = class {
  test(str) {
    return ture;
  }
};

const test = new Test();
```

### Iterator Interface
- 반복문과 관련된 인터페이스
- js에서 자체적으로 지원하는 인터페이스

```
const iterator = {
  next() {
    return {
      done: true,
      value: 1
    };
  }
};
```

- 인터페이스 구현한 프로그래밍
```
const log = (data) => {

}
const iterator = {
  data: [1,2,3,4],
  next() {
    return {
      done: this.data.length === 0,
      value: this.data.pop()
    };
  }
};

let iResult = iterator.next()
log(iterator.next().value + ' : ' + iResult.done)
```

### Iterable Interface
- 반환하는 것이 iterator

```
const iterable = {
  [Symbol.iterator]() {

  }
  ['@@iterator'] // 혹은 '@@iterator'
}
// Symbol은 원시데이터타입으로 ES6에서 새로 생겼다.
// const s = Symbol(); 이렇게 쓰인다.
```

// 키(){} 는 키: 펑션 과 같은 의미이다.

예전엔 for in을 돌면 순서가 섞여나오곤 했다.
ES6에서는 순차적으로 생성되게 된다.
굉장히 달라졌다.

#### while문
```
while(계속 반복할지 판단) {
  반복시마다 처리할 것
}
```

```
getter, setter
const obj = {
  get a() {
    return 1;
  }
}

obj.a; // getter 함수 호출된다.
```

iterator Interface와의 차이점 : 이것은 실행하고 싶을 때 실행할 수 있다.
next()가 실행되야 된다.
while문은 자동으로 한번에 실행된다.

그럼 언제쓰는가?
- 반복자체를 하지 않지만 외부에서 반복을 하려고 할 때, 반복에 필요한 조건과 실행을 미리 준비해 둔 객체 => 반복행위와 반복을 위한 준비를 분리한다. => 미리 반복에 대한 준비를 해두고, 필요할 때 필요한 만큼 반복한다. 반복을 재현할 수 있다.
```
{
  arr: [1,2,3,4],
  next() {
    return {
      done: this.arr.length === 0,
      value: this.arr.pop()
    };
  }
}
// 이 안에서 완전히 캡슐화 되어있다. loop에 대한 실행과 조건, 과정 모두 캡슐화 되어있다.
// 밖에서는 value와 done만 얻을 수 있다.
```

## ES6 + Loop
- Iterator, Iterable을 쓰면 왜 좋은가 보여줄께.
- 객체의 상태를 통한 지연루프, 값을 통한 루프, 캡슐화를 통한 루프..

### 사용자 반복처리기
- 직접 Iterator 반복처리기를 구현
```
const loop = (iter, f) => {
  if(typeof iter[Symbol.iterator] == 'function') { // iter객체가 iterable이라면
    iter = iter[Symbol.iterator](); // iterator를 얻는다.
  }
  // 아니라면 건너뛴다.
  if(typeof iter[Symbol.iterator] != 'function') {
    return;
  }

  while(true) {
    const v = iter.next();
    if(v.done) return; // 종료처리. done이 true일 때 빠져나온다.
    f(v.value); // 현재 값 전달
  }
};
```

### 내장 반복 처리기
#### Array destructuring(배열 해체)
```
const iter = {
  [Symbol.iterator]() {return this;},
  arr: [1,2,3,4],
  next() {
    return {
      done: this.arr.length === 0,
      value: this.arr.pop()
    };
  }
};

const [a, ...b] = iter; // b는 나머지 소비
console.log(a,b);
// 4, [3,2,1]
```
```
const iter = {
  [Symbol.iterator]() {return this;},
  arr: [1,2,3,4],
  next() {
    return {
      done: this.arr.length === 0,
      value: this.arr.pop()
    };
  }
};

const [k, ...l] = "abcd";
console.log(k);
console.log(l);
```
- 배열과 문자열에는 iterator가 있다.

#### Spread(펼치기)
- 묶어서 펼친다.

#### Rest ParaMeter(나머지인자)
- 함수 선언시 사용된다.
- 여러개의 배열이 아닌 녀석들을 배열로 만들어준다.
