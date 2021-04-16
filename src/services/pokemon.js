export function getPokemon({ url }) {
    // console.log("url",url)
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())

            .then((data) => {
                // console.log("data",data)
                resolve(data);
            })
            .catch((error) => {
                // console.log("data",error)
            });
    });
}
