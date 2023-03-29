import axios from "axios"

export async function getRates(state) {
    axios.get("https://voterback.onrender.com/api/rate")
         .then((res) => state(res.data))
}

export async function addVote(data, setRcs){
    console.log(data)
    await axios({
        method: "post",
        url : "https://voterback.onrender.com/api/votes",
        data : data
    })
    .then(() => {
        setRcs(false)
    })
};

export async function getVotes(state) {
    axios.get("https://voterback.onrender.com/api/count")
         .then((res) => state(res.data))
}
