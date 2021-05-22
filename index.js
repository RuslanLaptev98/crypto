// api key b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3
const getSelectedCryptoValue = () => {
    const selectedValue = document.getElementById('crypto').value

    return selectedValue
}
const getSelectedFiatValue = () => {
    const selectedValue = document.getElementById('fiat').value
    return selectedValue
}
let crypto, fiat
crypto = getSelectedCryptoValue()
fiat = getSelectedFiatValue()

console.log(crypto)
console.log(fiat)

let url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`

valueArea = document.getElementById('value')

let value
const fetching = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            value = data
            valueArea.innerText = data[fiat]
        })
}
fetching()

let resultCrypto = document.getElementById('result-crypto')
let selectCrypto = document.getElementById('crypto')
selectCrypto.addEventListener('change', () => {
    crypto = getSelectedCryptoValue()
    resultCrypto.innerText = crypto
    url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
    fetching()
})

let resultFiat = document.getElementById('result-fiat')
let selectFiat = document.getElementById('fiat')
selectFiat.addEventListener('change', () => {
    fiat = getSelectedFiatValue()
    resultFiat.innerText = fiat
    url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
    fetching()
})
