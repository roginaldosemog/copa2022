import GroupGames from '../components/GroupGames';

import groupGames from '../data/games';
import { getRandomGameResult } from '../utils';

const GroupPage = () => {
    const getGroupGamesWithResults = () => groupGames.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, true);
        return { ...game, ...gameResult }
    })

    return (
        <>
            <GroupGames groupGames={getGroupGamesWithResults()} />
        </>
    )
}

export default GroupPage;