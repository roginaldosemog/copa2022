import { getTeamName } from '../utils/helpers'

const FinalStageResults = ({ finalStageResults }) => {
    return (
        <div style={{ paddingTop: '16px' }}>
            {finalStageResults.map(game => {
                const teamA = getTeamName(game.teamA);
                const teamB = getTeamName(game.teamB);

                return (
                    <div key={game.id}>
                        {game.id === 49 || 57 || 61 || 63 || 64 ? <div style={{ paddingTop: '16px' }} /> : null}
                        {teamA} {game.scoreA} x {game.scoreB} {teamB}
                    </div>
                )
            })}
            <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                <b>Winner: {getTeamName(finalStageResults[15].winner)}</b>
            </div>
        </div>
    )
};


export default FinalStageResults;