'use strict'
// window.$ = window.jQuery = require('jquery')

let words = [],         // json data
    // correctWords = [],  // 정답 data
    // wrongWords = [],    // 오답 data
    currentWord = null, // 랜덤으로 뽑힌 단어
    randomIndex = null, // 랜덤으로 뽑힌 단어의 인덱스
    sec = 30,
    correctNo = 0,      // 맞은 갯수
    wrongNo = 0,        // 틀린 갯수
    scoreNo = 0,          // 점수
    showWord = $('#show-word'),
    showSec = $('.show-sec'),
    inputText = $('#input-text'),
    correctNum = $('.correct-num'),
    wrongNum = $('.wrong-num'),
    scoreNum = $('.score-num'),
    bottom = $('.bottom');

inputText.attr('disabled', 'disabled')

function score(corr, wrong, score) {
  correctNum.text(corr)
  wrongNum.text(wrong)
  scoreNum.text(score)
}

// json파일내의 데이터를 랜덤으로 뿌려줌
$.getJSON("words.json", function(data) {
  words = data.words
  // randomWord()
})

function randomWord() {
  randomIndex = Math.floor(Math.random() * words.length)
  currentWord = words[randomIndex]
  showWord.text(currentWord)
}

$('#start-btn').click(function() {
  var that = $(this)
  randomWord()
  $(this).css("display", "none")
  inputText.removeAttr('disabled')
  inputText.focus() // inputText에 포커스
  correctNo = 0
  wrongNo = 0
  scoreNo = 0
  score(correctNo, wrongNo, scoreNo)
  var interval = setInterval(function() {
    sec--
    showSec.text(sec)
    if (sec == 0) {  // 끝나면
      sec = 30
      showSec.text(sec)
      clearInterval(interval)
      that.css("display", "inline-block")
      inputText.attr('disabled', 'disabled')
      bottom.css({
        "background-image": "none"
      });
      if (scoreNo <= 80) {
        swal({
          title: "OH!! NO!",
          text: "Your Score is only " + scoreNo +" ;(" ,
          imageUrl: "what.gif"
        });
      } else {
        swal({
          title: "Well Done!!",
          text: "Your Score is " + scoreNo +" :)" ,
          imageUrl: "goodgood.gif"
        });
      }
    }
  }, 1000)
})

inputText.keypress(function(event) {
  if (event.keyCode === 13) { // enter키
    let answerWord = $(this).val() // 입력 값
    $(this).val('') // 입력 값 비우기
    if (answerWord == currentWord) { // 정답일 때
      words.splice(randomIndex, 1)   // 원본 배열에서 삭제
      // correctWords.push(currentWord) // 정답 배열에 추가
      randomWord()
      correctNo++
      scoreNo += 10
      score(correctNo, wrongNo, scoreNo)
      bottom.css({
        "background-image": "url('good.gif')",
        "background-size": "115px"
      });
      // console.log("정답", correctWords);
    } else { // 오답일 때
      // wrongWords.push(currentWord)    // 오답 배열에 추가
      randomWord()
      wrongNo++
      scoreNo -=10
      score(correctNo, wrongNo, scoreNo)
      // console.log("오답", wrongWords);
      bottom.css({
        "background-image": "url('nono.gif')",
        "background-size": "115px"
      });
    }
    // console.log("words", words);
  }
})
