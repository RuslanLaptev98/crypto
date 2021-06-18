const getSelectedCryptoValue = () => {
    return document.getElementById('select-crypto').value
}
const getSelectedFiatValue = () => {
    return document.getElementById('select-fiat').value
}
let crypto = getSelectedCryptoValue()
let fiat = getSelectedFiatValue()

let url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`

const resultValue = document.getElementById('result-value')

const fetching = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            resultValue.innerText = data[fiat]
        })
}
fetching()

const resultCrypto = document.getElementById('result-crypto')
const selectCrypto = document.getElementById('select-crypto')
selectCrypto.addEventListener('change', () => {
    crypto = getSelectedCryptoValue()
    resultCrypto.innerText = crypto
    url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
    fetching()
})

const resultFiat = document.getElementById('result-fiat')
const selectFiat = document.getElementById('select-fiat')
selectFiat.addEventListener('change', () => {
    fiat = getSelectedFiatValue()
    resultFiat.innerText = fiat
    url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
    fetching()
})
