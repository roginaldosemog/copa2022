import { getTeamName, getWinnerMessage } from '../utils/helpers'

const GroupStageResults = ({ groupStageResults }) => {
    const groupResults = (games) => games.map(game => {
        const teamA = getTeamName(game.teamA);
        const teamB = getTeamName(game.teamB);

        return (
            <p key={game.id}>
                <small>Game {game.id}</small><br />
                {teamA} {game.scoreA} x {game.scoreB} {teamB}<br />
                <b>{getWinnerMessage(game.winner)}</b>
            </p>
        )
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {groupStageResults.map(group => {
                return (
                    <div key={group.groupId}>
                        <small><b>Group {group.groupId}</b></small>
                        {groupResults(group.games)}
                    </div>
                )
            })}
        </div>
    )
};


export default GroupStageResults;