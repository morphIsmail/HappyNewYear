let arr1 = [
  "С новым годом, с новым счастьем!",
  "С новым годом, 365 новых дней. 365 новых шансов!",
  "С новым годом, наслаждайтесь каждым его моментом!",
  "С новым годом, примите мои искренние поздравления!",
  "С новым годом, годом Кролика!",
  "С новым годом, новый старт начинается сегодня!",
  "С новым годом, и пусть самые лучшие сюрпризы будут у вас впереди!",
]
let arr2 = [
  "Я желаю много новых достижений крепкого здоровья и любви, пусть задуманное сбудется.",
  "Я желаю чтобы этот год подарил много поводов для радости и счастливых моментов.",
  "Я желаю чтобы будущий год принес столько радостей, сколько дней в году, и чтобы каждый день дарил вам улыбку и частичку добра.",
  "Я желаю вам прекрасного года, полного здоровья и благополучия.",
  "Я желаю чтобы Кролик принёс в вашу семью любовь, нежность, взаимопонимание и счастье.",
  "Я желаю всем в Новом году быть здоровыми, красивыми, любимыми и успешными!",
  "Я желаю чтобы сбылось все то, что вы пожелали. Все цели были достигнуты, а планы перевыполнены. Всё плохое и неприятное осталось в уходящем году.",
]
let arr3 = [
  "И пусть новый год принесёт много радостных и счастливых дней!",
  "И пусть каждый новый миг наступающего года приносит в дом счастье, везение, уют и теплоту!",
  "И пусть всё, что мы планировали, обязательно сбудется.",
  "И пусть наступающий год станет самым плодотворным годом в вашей жизни.",
  "И пусть год будет полон ярких красок, приятных впечатлений и радостных событий.",
  "И пусть этот год будет ВАШИМ годом!",
  "И пусть Новый год принесёт всё, о чём вы мечтаете, и немного больше.",
]
let result = []



for(let i=0; i<arr1.length; i++) {
  for(let j=0; j<arr2.length; j++) {
    for(let k=0; k<arr3.length; k++) {
      let tmp = arr1[i]+" "+arr2[j]+" "+arr3[k]
      result.push(tmp)
    }
  }
}

document.querySelector('.count').innerHTML = "Всего: "+result.length

for(let i=0; i<result.length; i++) {
  document.querySelector('.all').insertAdjacentHTML('beforeend', `<p>${result[i]}</p>`)
}

document.querySelector('.btn').addEventListener('click', function(e) {
  document.querySelector('.random_results').innerHTML = ''
  let rand = Math.floor(Math.random() * result.length)
  document.querySelector('.random_results').insertAdjacentHTML('beforeend', `<p>${result[rand]}</p>`)
})

document.querySelector(".custom").addEventListener("input", function(e) {
  if(!e.target.tagName == "INPUT") return
  document.querySelector('.custom_results').innerHTML = ''
  let in1 = document.getElementById("in1").value
  let in2 = document.getElementById("in2").value
  let in3 = document.getElementById("in3").value
  let tmp = arr1[in1]+" "+arr2[in2]+" "+arr3[in3]
  document.querySelector('.custom_results').insertAdjacentHTML('beforeend', `<p>${tmp}</p>`)
})

console.log(result)

// Снег
$.fn.snowit({
  flakeColor: 'rgba(255,255,255,0.5)',
  total: 1500,
  minSize : 10,
  maxSize : 30,
});