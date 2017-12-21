const ONE_HOUR_IN_SECONDS = 3600
const ONE_DAY_IN_SECONDS = 86400
const future = new Date('2017-12-08T15:00:00')

const getDiff = () => {
  if (future < Date.now()) {
    return 0;
  }

  return Math.abs(future - Date.now()) / 1000;
}

const pluralize = (x, word) => x === 1 ? `${x} ${word}` : `${x} ${word}s`
const getRandomItem = arr => arr[Math.floor(Math.random () * arr.length)]
const isPast = getDiff() === 0;

function setDays () {
  const days = Math.floor(getDiff() / ONE_DAY_IN_SECONDS)

  document
    .querySelector('#days')
    .innerHTML = isPast
      ? '....AGORA MESMO!!!'
      : pluralize(days, 'dia')
}

function setHours () {
  const hours = Math.floor(getDiff() / ONE_HOUR_IN_SECONDS)

  document
    .querySelector('#hours')
    .innerHTML = pluralize(hours, 'hora')
}

function setToDoSentence() {
  const toDoSentences = [
    'te abraçará em',
    'tentará te fazer rir em',
    'fará cagadas perto de ti em',
    'estará de volta em',
    'curtirá viamão em',
    'falará merda perto de ti em',
    'será emo contigo em',
    'te dará amor em',
    'te incomodará em',
    'te alegrará em',
  ]

  const doingSentences = [
    'tá te abraçando',
    'tá de volta',
    'tá curtindo viamão',
    'tá sendo emo contigo',
    'tá te incomodando',
  ]

  const sentences = isPast ? doingSentences : toDoSentences

  document
    .querySelector('#sentence')
    .innerHTML = getRandomItem(sentences)
}

function setBackground() {
  const el = document.querySelector('#background-image')
  const rubbish = [
    'chega_de_foto_de_cacto_mas_to_sem_cactocriatividade.jpeg',
    'meu_cacto_e_eu_com_as_maozinhas_ao_ar.jpeg',
    'maos_pro_ar_na_solidao.jpeg',
    'introducao_ao_meu_bone_da_banana.jpeg',
    'eu_e_meu_cacto_embarcando_numa_aventura.jpeg',
    'eu_e_meu_cacto_em_modo_furtivo.jpeg',
  ]

  document
    .querySelector('#wallpaper')
    .style
    .backgroundImage = `url(pics/${getRandomItem(rubbish)})`
}

function yeah () {
  window.setInterval(setDays, ONE_DAY_IN_SECONDS * 1000)
  window.setInterval(setHours, ONE_HOUR_IN_SECONDS * 1000)
  window.setInterval(setBackground, 2000)
  window.setInterval(setToDoSentence, 10000)

  setDays()
  setHours()
  setBackground()
  setToDoSentence()

  document
    .querySelector('#diessica')
    .addEventListener('click', () => {
      setBackground()
      setToDoSentence()
    })
}

yeah()
