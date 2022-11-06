function createCard(date, day, game) {
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${game}
            </ul>
        </div>
    `
}

function createGame(player1, hours, player2) {
    return `
        <li>
            <img src="assets/Bandeiras dos países/${player1}.svg" alt="Bandeira do ${player1}">
                <strong>${hours}</strong>
            <img src="assets/Bandeiras dos países/${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "QUINTA", createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "SEGUNDA", createGame("brazil", "13:00", "switzerland")) +
    createCard("02/12", "SEXTA", createGame("brazil", "16:00", "cameroon"))
