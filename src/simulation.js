const teams = [
    { 'id': 1, 'name': 'Qatar' },
    { 'id': 2, 'name': 'Ecuador' },
    { 'id': 3, 'name': 'Senegal' },
    { 'id': 4, 'name': 'Netherlands' },
    { 'id': 5, 'name': 'England' },
    { 'id': 6, 'name': 'Iran' },
    { 'id': 7, 'name': 'USA' },
    { 'id': 8, 'name': 'Wales' },
    { 'id': 9, 'name': 'Argentina' },
    { 'id': 10, 'name': 'Saudi Arabia' },
    { 'id': 11, 'name': 'Mexico' },
    { 'id': 12, 'name': 'Poland' },
    { 'id': 13, 'name': 'France' },
    { 'id': 14, 'name': 'Australia' },
    { 'id': 15, 'name': 'Denmark' },
    { 'id': 16, 'name': 'Tunisia' },
    { 'id': 17, 'name': 'Spain' },
    { 'id': 18, 'name': 'Costa Rica' },
    { 'id': 19, 'name': 'Germany' },
    { 'id': 20, 'name': 'Japan' },
    { 'id': 21, 'name': 'Belgium' },
    { 'id': 22, 'name': 'Canada' },
    { 'id': 23, 'name': 'Morocco' },
    { 'id': 24, 'name': 'Croatia' },
    { 'id': 25, 'name': 'Brazil' },
    { 'id': 26, 'name': 'Serbia' },
    { 'id': 27, 'name': 'Switzerland' },
    { 'id': 28, 'name': 'Cameroon' },
    { 'id': 29, 'name': 'Portugal' },
    { 'id': 30, 'name': 'Ghana' },
    { 'id': 31, 'name': 'Uruguay' },
    { 'id': 32, 'name': 'Korea Republic' },
]

function getRandomGameResult() {
    const scoreA = Math.floor(Math.random() * 6);
    const scoreB = Math.floor(Math.random() * 6);
    const winner = (scoreA > scoreB) ? 1 : 2;
    if (scoreA !== scoreB) {
        return { scoreA, scoreB, winner }
    }
    return getRandomGameResult();
}

function Simulation() {
    const G1 = {
        ...getRandomGameResult(),
        teamA: teams.find(team => team.id === 1).name,
        teamB: teams.find(team => team.id === 2).name
    };

    return (
        <>
            <p>Jogo 1</p>
            <p>{G1.teamA} {G1.scoreA} x {G1.scoreB} {G1.teamB}</p>
            <p>Vencedor: {G1.winner === 1 ? G1.teamA : G1.teamB}</p>
        </>
    );
}

export default Simulation;
