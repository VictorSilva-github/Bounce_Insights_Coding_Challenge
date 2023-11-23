import axios from "axios" // library that is used for making HTTP requests.

// API comunication
// Async function for fetching country information based on the user-inputted name
const GetInfoCountry = async (name: string) => {

    //"name" for debugging purposes
    console.log("GetCountry: ", name)

    //variable to store the fetched data
    let data: any = ""

    //Using axios to make a GET request to the endpoint.
    await axios.get(`https://bounce-backend.vercel.app/country-name/${name}`)
        .then((response: any) => {

            //for debugging purposes
            console.log(response.data.info)

            // Assigning the fetched data to the 'data' variable
            data = response.data.info
        })
        .catch((error) => {
            console.log(error)
        })

    return data
}

export default GetInfoCountry