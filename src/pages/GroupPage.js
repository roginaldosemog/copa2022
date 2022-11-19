import FinalStageResults from '../components/FinalStageResults';
import GroupStageResults from '../components/GroupStageResults';
import GroupStageStandings from '../components/GroupStageStandings';

import { groupsInfo, groupStageGames } from '../data';
import { getGroupStageResults, getFinalStageResults } from '../utils/groupStage';

const GroupPage = () => {
    const groupStageResults = getGroupStageResults(groupStageGames, groupsInfo);
    const finalStageResults = getFinalStageResults(groupStageResults);

    return (
        <>
            <GroupStageResults groupStageResults={groupStageResults} />
            <GroupStageStandings groupStageResults={groupStageResults} />
            <FinalStageResults finalStageResults={finalStageResults} />
        </>
    )
}

export default GroupPage;