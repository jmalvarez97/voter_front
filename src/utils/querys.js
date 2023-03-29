import axios from "axios"

export async function getRates(state) {
    axios.get("https://voterback.onrender.com/api/rate")
         .then((res) => state(res.data))
}

export async function addVote(data){
    console.log(data)
    await axios({
        method: "post",
        url : "https://voterback.onrender.com/api/votes",
        data : data
    })
    .then(() => {
        window.location.reload()
    })
};
