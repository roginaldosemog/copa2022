import { getTeamName, getWinnerMessage } from '../utils'

const GroupGames = ({ groupGames }) => {
    console.log(groupGames);

    const renderGroupGames = groupGames.map(game => {
        const teamA = getTeamName(game.teamA);
        const teamB = getTeamName(game.teamB);

        return (
            <p key={game.id}>
                <small>Jogo {game.id}</small><br />
                {teamA} {game.scoreA} x {game.scoreB} {teamB}<br />
                <b>{getWinnerMessage(game.winner)}</b>
            </p>
        )
    })

    return (
        <>
            {renderGroupGames}
        </>
    );
}

export default GroupGames;