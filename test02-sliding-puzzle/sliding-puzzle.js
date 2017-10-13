"use strict"

let xCol = 4,          // 행의 갯수
    yRow = 4,          // 열의 갯수
    numArray = [],     // 숫자들 담을 배열
    btns = null,       // 모든 엘리먼트
    blankEl = null,    // 빈칸 엘리먼트
    blankX = 0,        // 빈칸 엘리먼트의 행 값
    blankY = 0,        // 빈칸 엘리먼트의 열 값
    canClickEl = null, // 클릭할 수 있는 엘리먼트(상하좌우)
    count = 1,         // 몇 번 클릭했나 카운트
    clickMix = false,  // 섞기버튼 클릭했는지 여부체크
    correctAnswer = '', // 정답확인
    puzzleTable = $('#puzzle-table'),
    countNum = $('#count'),
    easyMode = $("#easymode"),
    hardMode = $("#hardmode");

makeNumArray()

// 배열에 숫자들 담기
function makeNumArray() {
  var startNum = 1
  var totalNum = xCol * yRow
  for (let i = 0; i < xCol; i++) {
    numArray[i] = new Array()  // 2차원배열로 만들기위해
    for (let j = 0; j < yRow; j++) {
      numArray[i][j] = startNum++ // 숫자 넣기
      if (startNum - 1 == totalNum) {
        numArray[i][j] = '' // 마지막 숫자에 빈칸 넣기
      }
    }
  }
  // 정답확인을 위해 초기값 저장
  correctAnswer = ''
  for (let i in numArray) {
    correctAnswer += numArray[i].join("")
  }
  console.log(correctAnswer);

  displayNum()
}

// 숫자 화면 UI
function displayNum() {
  var html = ''
  for (let i = 0; i < xCol; i++) {
    html += '<tr>'
    for (let j = 0; j < yRow; j++) {
      if (numArray[i][j] == '') {
        html += '<td id="blank" class="btn" data-x="'+ j + '" data-y="' + i + '">' + numArray[i][j] + '</td>'
      } else {
        html += '<td class="btn num" data-x="'+ j + '" data-y="' + i + '">' + numArray[i][j] + '</td>'
      }
    }
    html += '</tr>'
  }
  puzzleTable.html(html)

  clickBtn()

}

// 빈칸 엘리먼트의 위, 오른쪽, 아래, 왼쪽 엘리먼트만 class="can-click"
function canClick() {
  blankEl = $('#blank')
  blankX = parseInt(blankEl.attr("data-x"))
  blankY = parseInt(blankEl.attr("data-y"))
  btns = $('.btn')
  for (let el of btns) {
    el = $(el)
    // console.log(el);
    if (el.attr("data-x") == blankX && el.attr("data-y") == blankY - 1) { // 위
      el.addClass('can-click')
    }
    else if (el.attr("data-x") == blankX - 1 && el.attr("data-y") == blankY) { // 왼쪽
      el.addClass('can-click')
    }
    else if (el.attr("data-x") == blankX + 1 && el.attr("data-y") == blankY) { // 오른쪽
      el.addClass('can-click')
    }
    else if (el.attr("data-x") == blankX && el.attr("data-y") == blankY + 1) { // 아래
      el.addClass('can-click')
    } else {
      el.removeClass('can-click')
    }
  }
  canClickEl = $('.can-click')
}

// 빈칸과 클릭한 숫자 바꾸기
function clickBtn() {
  canClick() // 초기 한번 셋팅
  btns.click(function() {
    console.log('ok');
    if (!clickMix) countNum.text(count++)
    var thisEl = $(this)
    // 상하좌우만 바꿀 수 있게하기
    if ( (thisEl.attr("data-x") == blankX && thisEl.attr("data-y") == blankY - 1) ||
          (thisEl.attr("data-x") == blankX - 1 && thisEl.attr("data-y") == blankY) ||
          (thisEl.attr("data-x") == blankX + 1 && thisEl.attr("data-y") == blankY) ||
          (thisEl.attr("data-x") == blankX && thisEl.attr("data-y") == blankY + 1) ) {
      var txt = parseInt(thisEl.text())
      blankEl.removeAttr('id').addClass('num can-click').html(txt)
      thisEl.removeClass('num can-click').text('').attr('id', 'blank')
      blankEl = thisEl
    }

    canClick()

    // 정답비교
    var btnText = btns.text()
    console.log(btnText);
    if (btnText == correctAnswer && clickMix == false && blankEl.attr("data-x") == (xCol-1) && blankEl.attr("data-y") == (yRow-1)) {
      alert("축하합니다!!! ^0^*" + (count-1) + "번째에 성공하셨습니다!! ")
    }
  })
}

// 섞기
$('.mix').click(function() {
  var mode = $("input:checked").val()
  countNum.text("0")
  clickMix = true
  var interval = setInterval(function() {
    // parseInt로 했더니 고르지않은 랜덤수가 얻어져서 Math.Floor로 수정함
    var no = Math.floor(Math.random() * canClickEl.length)
    canClickEl = canClickEl[no]
    canClickEl.click()
  }, 25)
  setTimeout(function() {
    clearInterval(interval)
    clickMix = false
    count = 1
  }, 25 * mode)
})

// 리셋
$('.reset').click(function() {
  makeNumArray()
})
