import { resourcesClientId, resourcesClientSecret } from "./resources";

const url = "https://platform.fatsecret.com/rest/food";

export const getToken = async () => {
    const clientID = resourcesClientId;
    const clientSecret = resourcesClientSecret;

    let formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    formData.append('user', clientID);
    formData.append('password', clientSecret);
    formData.append('scope', 'basic');

    fetch('https://oauth.fatsecret.com/connect/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    });

}

export const getFood = async (food, token) => {
    const data = new FormData();
    data.append('search_expression', food);
    data.append('max_results', 5)

    const search = await fetch(url + "/autocomplete/v2", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: data
    })
}