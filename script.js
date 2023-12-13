function calculateLove() {
    const yourName = document.getElementById('yourName').value;
    const crushName = document.getElementById('crushName').value;

    const lovePercentage = Math.floor(Math.random() * 101);

    let resultMessage = `<p>Your love percentage with ${crushName} is ${lovePercentage}%.</p>`;

    if (lovePercentage > 100) {
        resultMessage += `<p>Congratulations! You are eligible for marriage.</p>`;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultMessage;
}
