const ClassifiedTeams = () => (
    <>
        {groups.map(group => {
            // TODO: pegar nome e pontos dos times na ordem
            // TODO: atualizar render return
            console.log(getGroupClassification(group.id))

            return (
                <p>
                    <small>Grupo {group.id}</small><br />
                    <b>Time A: 6 pontos</b><br />
                    <b>Time B: 6 pontos</b><br />
                    <b>Time C: 6 pontos</b><br />
                    <b>Time D: 6 pontos</b><br />
                </p>
            )
        })}
    </>
);