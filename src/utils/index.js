import teams from '../data/teams'

export const getTeamName = (teamId) => teams.find(team => team.id === teamId).name;
export const getWinnerMessage = (winner) => winner === null ? 'Draw!' : `${getTeamName(winner)} won!`;

export const getRandomGameResult = (teamA, teamB, canDraw) => {
    const scoreA = Math.floor(Math.random() * 6);
    const scoreB = Math.floor(Math.random() * 6);
    var winner = null;
    if (scoreA > scoreB) winner = teamA
    else if (scoreB > scoreA) winner = teamB

    if (canDraw || scoreA !== scoreB) {
        return { scoreA, scoreB, winner }
    }
    return getRandomGameResult();
}