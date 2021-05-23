document.getElementById("envioPalpite").addEventListener("click", add)
let numbers = []
const color = ["00ff08", "26c72b", "2da131", "859c3a", "a9ad55", "d4d973", "ccc064", "bab16e", "c4901f", "ad4910"]
let sortedNumber = (Math.random() * 100 + 1).toFixed()
const result = {
    numbers: document.getElementById("resultNumbers"),
    wrong: document.getElementById("resultState"),
    perto: document.getElementById("resultLocale"),
    trys: document.getElementById("trys")
}

function add() {
    const text = document.getElementById("campoPalpite").value
    const number = +text
    if (!number || number > 100) return alert("Insira um valor entre 1 e 100!")
    if (numbers.includes(text+ "↓") || numbers.includes(text + "↑")) return alert("Você já sorteou este número!")
    if (number < sortedNumber) {
        numbers.push(text + "↓")
        result.wrong.textContent = `Você errou! ${number} está abaixo do número sorteado.`;
        result.wrong.style.color = "#FF0000"
    } else if (number > sortedNumber) {
        numbers.push(text + "↑")
        result.wrong.textContent = `Você errou! ${number} está acima do número sorteado.`;
        result.wrong.style.color = "#FF0000"
    } else {
        numbers.push(text + "✔️")
        result.wrong.textContent = `Parabéns! Você ganhou na partida passada!!!`
        result.wrong.style.color = "#008000"
        alert(`Parabéns! Você acertou com ${numbers.length} tentativas!\nO número sorteado era: ${sortedNumber}\nVocê chutou ${numbers.length} números: ${numbers.join(" - ").replace(/[↑↓]/gmi, "")}`)
        numbers = []
        sortedNumber = (Math.random() * 100 + 1).toFixed()
    }
    result.numbers.textContent = "Você já sorteou os números: " + numbers.join(" - ")
    result.trys.textContent = `Restam ${10 - numbers.length} tentativas`
    result.trys.style.color = "#" + color[numbers.length - 1]

    if(numbers.length == 10 && !numbers.join("").includes("✔️")) {
        alert(`Você perdeu :(\nNúmeros sorteados: ${numbers.join(" - ")}\nTentativas: 10\nO número era: ${sortedNumber}`)
        numbers = []
        sortedNumber = (Math.random() * 100 + 1).toFixed()
    }
}