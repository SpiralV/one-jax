console.log("🦚")

// GET request to reddit for kitten
fetch("https://www.reddit.com/search.json?q=kittens")
    .then((res) => {
        console.log("workin it 💅")
        return res.json()
    })
    .then((jsonDat) => {
        jsonDat.data.children.forEach((elem) => {
            console.log(elem.data.domain)
        })
        return jsonDat
    })
    .catch((err) => {
        console.log(err)
        return err
    })