const form = document.querySelector('.formcalc');

form.addEventListener('submit',function(event) {
    event.preventDefault()
    const inputWeight = event.target.querySelector('#input-weight');
    const inputHeight = event.target.querySelector('#input-height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido', false);
        return;
    }

    if (!height) {
        setResult('Altura inválida', false);
        return;
    }

    const IMC = getImc(weight, height);
    const imcClassification = getImcClassification(IMC);
    const message = `Seu IMC é ${IMC} (${imcClassification}).`

    setResult(message, true)

    console.log(IMC, imcClassification)
});

function getImcClassification (IMC) {
    const classification = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (IMC >= 39.9) return classification[5]
        
    if (IMC >= 34.9) return classification[4]
    
    if (IMC >= 29.9) return classification[3]
           
    if (IMC >= 24.9) return classification [2]
  
    if (IMC >= 18.5) return classification[1]
           
    if (IMC < 18.5)  return classification[0]

}

function getImc (weight, height) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
}


function createP () {
    const p = document.createElement('p');
    p.classList.add('result-paragraph');
    return p;
    
}

function setResult (message, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('result-paragraph');
    } else {
        p.classList.add('wrong');
    }

    p.innerHTML = message;
    result.appendChild(p);

}
