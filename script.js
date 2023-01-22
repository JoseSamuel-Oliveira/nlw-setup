const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)//quando clica no botão,a função add () abaixo é ativada
form.addEventListener("change", save) 

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localeStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.SetData(data)
nlwSetup.load()
//const data = {
//  run: ['01-01', '01-02', '01-06', '01-07','01-08'],
//  takepills: ['01-01'],
//  journal: ['01-03']
//}

//nlwSetup.setData(data)
//nlwSetup.load()
