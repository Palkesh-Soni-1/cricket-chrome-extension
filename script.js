console.log(1)
async function getMatchData() {
    console.log(2)
    return await fetch("https://api.cricapi.com/v1/cricScore?apikey=f19a5046-da30-4db6-a542-d7374b7d30bb")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            // const relevantData = matchesList.match.map(match => `${match.name}, ${match.status}`);
            const relevantData = matchesList.filter(match=>match.series=="ICC Mens T20 World Cup 2024").map(match => `${match.t1} vs ${match.t2} \n Score -:  ${match.t1}-: ${match.t1s} , ${match.t2}-: ${match.t2s} \n ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}
getMatchData();

