import { getRandomGameResult } from "./helpers";

const getGroupGamesResults = (groupStageGameResults, groupId) =>
    groupStageGameResults.filter(game => game.groupId === groupId)

const getTeamStandings = (groupStandings, teamId) =>
    groupStandings.find(teamStandings => teamStandings.id === teamId);

const getInitialGroupStandings = (groupTeams) => groupTeams.map(teamId => {
    return {
        id: teamId,
        won: 0,
        draw: 0,
        lost: 0,
        goalsMade: 0,
        goalsAgainst: 0,
        goalsDifference: 0,
        points: 0
    }
})

const getGroupStandings = (groupGamesResults, groupTeams) => {
    var groupStandings = getInitialGroupStandings(groupTeams)

    groupGamesResults.forEach(game => {
        // update goals made and goals against count
        getTeamStandings(groupStandings, game.teamA).goalsMade += game.scoreA;
        getTeamStandings(groupStandings, game.teamA).goalsAgainst += game.scoreB;
        getTeamStandings(groupStandings, game.teamA).goalsDifference += game.scoreA - game.scoreB;
        getTeamStandings(groupStandings, game.teamB).goalsMade += game.scoreB;
        getTeamStandings(groupStandings, game.teamB).goalsAgainst += game.scoreA;
        getTeamStandings(groupStandings, game.teamB).goalsDifference += game.scoreB - game.scoreA;
        // update points and match result
        if (game.scoreA > game.scoreB) {
            getTeamStandings(groupStandings, game.teamA).points += 3;
            getTeamStandings(groupStandings, game.teamA).won += 1;
            getTeamStandings(groupStandings, game.teamB).lost += 1;
        } else if (game.scoreA < game.scoreB) {
            getTeamStandings(groupStandings, game.teamB).points += 3;
            getTeamStandings(groupStandings, game.teamB).won += 1;
            getTeamStandings(groupStandings, game.teamA).lost += 1;
        } else {
            getTeamStandings(groupStandings, game.teamA).points += 1;
            getTeamStandings(groupStandings, game.teamA).draw += 1;
            getTeamStandings(groupStandings, game.teamB).points += 1;
            getTeamStandings(groupStandings, game.teamB).draw += 1;
        }
    })

    return groupStandings
}

export const getGroupStageResults = (groupStageGames, groupsInfo) => {
    const groupStageGamesResults = groupStageGames.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, true);
        return { ...game, ...gameResult }
    })

    const groupStageResults = groupsInfo.map(group => {
        const groupGamesResults = getGroupGamesResults(groupStageGamesResults, group.id);
        const groupStandings = getGroupStandings(groupGamesResults, group.teams);
        groupStandings.sort((a, b) => b.goalsDifference - a.goalsDifference)
        groupStandings.sort((a, b) => b.points - a.points)

        return {
            groupId: group.id,
            games: groupGamesResults,
            standings: groupStandings
        }
    });

    return groupStageResults;
}

const getRoundOf16Results = (groupStageResults) => {
    const roundOf16Games = [
        { id: 49, teamA: groupStageResults[0].standings[0].id, teamB: groupStageResults[1].standings[1].id },
        { id: 50, teamA: groupStageResults[2].standings[0].id, teamB: groupStageResults[3].standings[1].id },
        { id: 51, teamA: groupStageResults[1].standings[0].id, teamB: groupStageResults[0].standings[1].id },
        { id: 52, teamA: groupStageResults[3].standings[0].id, teamB: groupStageResults[2].standings[1].id },
        { id: 53, teamA: groupStageResults[4].standings[0].id, teamB: groupStageResults[5].standings[1].id },
        { id: 54, teamA: groupStageResults[6].standings[0].id, teamB: groupStageResults[7].standings[1].id },
        { id: 55, teamA: groupStageResults[5].standings[0].id, teamB: groupStageResults[4].standings[1].id },
        { id: 56, teamA: groupStageResults[7].standings[0].id, teamB: groupStageResults[6].standings[1].id },
    ]

    const roundOf16Results = roundOf16Games.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, false);
        return { ...game, ...gameResult }
    })

    return roundOf16Results
}

const getQuarterFinalsResults = (roundOf16Results) => {
    const quarterFinalsGames = [
        { id: 57, teamA: roundOf16Results.find(game => game.id === 49).winner, teamB: roundOf16Results.find(game => game.id === 50).winner },
        { id: 58, teamA: roundOf16Results.find(game => game.id === 53).winner, teamB: roundOf16Results.find(game => game.id === 54).winner },
        { id: 59, teamA: roundOf16Results.find(game => game.id === 51).winner, teamB: roundOf16Results.find(game => game.id === 52).winner },
        { id: 60, teamA: roundOf16Results.find(game => game.id === 55).winner, teamB: roundOf16Results.find(game => game.id === 56).winner },
    ]

    const quarterFinalsResults = quarterFinalsGames.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, false);
        return { ...game, ...gameResult }
    })

    return quarterFinalsResults
}

const getSemiFinalsResults = (quarterFinalsResults) => {
    const semiFinalsGames = [
        { id: 61, teamA: quarterFinalsResults.find(game => game.id === 57).winner, teamB: quarterFinalsResults.find(game => game.id === 58).winner },
        { id: 62, teamA: quarterFinalsResults.find(game => game.id === 59).winner, teamB: quarterFinalsResults.find(game => game.id === 60).winner },
    ]

    const semiFinalsResults = semiFinalsGames.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, false);
        return { ...game, ...gameResult }
    })

    return semiFinalsResults
}

const getFinalsResults = (semiFinalsResults) => {
    const game61 = semiFinalsResults.find(game => game.id === 61);
    const game62 = semiFinalsResults.find(game => game.id === 62);
    const loser61 = game61.teamA === game61.winner ? game61.teamB : game61.teamA;
    const loser62 = game62.teamA === game62.winner ? game62.teamB : game62.teamA

    const finalsGames = [
        { id: 63, teamA: loser61, teamB: loser62 },
        { id: 64, teamA: game61.winner, teamB: game62.winner },
    ]

    const finalsResults = finalsGames.map(game => {
        const gameResult = getRandomGameResult(game.teamA, game.teamB, false);
        return { ...game, ...gameResult }
    })

    return finalsResults
}

export const getFinalStageResults = (groupStageResults) => {
    const roundOf16Results = getRoundOf16Results(groupStageResults)
    const quarterFinalsResults = getQuarterFinalsResults(roundOf16Results)
    const semiFinalsResults = getSemiFinalsResults(quarterFinalsResults)
    const finalsResults = getFinalsResults(semiFinalsResults)

    return [
        ...roundOf16Results,
        ...quarterFinalsResults,
        ...semiFinalsResults,
        ...finalsResults
    ]
}