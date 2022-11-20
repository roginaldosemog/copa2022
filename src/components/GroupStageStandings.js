import { getTeamName } from "../utils/helpers";

const GroupStageStandings = ({ groupStageResults }) => {
    const teamStandings = (standings) => standings.map(team => (
        <tr key={team.id}>
            <td>{getTeamName(team.id)}</td>
            <td>{team.points}</td>
            <td>{team.won}</td>
            <td>{team.draw}</td>
            <td>{team.lost}</td>
            <td>{team.goalsMade}</td>
            <td>{team.goalsAgainst}</td>
            <td>{team.goalsDifference}</td>
        </tr>
    ))

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {groupStageResults.map(group => {
                return (
                    <table key={group.groupId}>
                        <thead>
                            <tr>
                                <th>Group {group.id}</th>
                                <th>PTS</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GM</th>
                                <th>GA</th>
                                <th>GD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamStandings(group.standings)}
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
};

export default GroupStageStandings;