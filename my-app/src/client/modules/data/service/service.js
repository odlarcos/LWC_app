const URL =
    'https://raw.githubusercontent.com/odlarcos/LWC_app/master/data.json';
let webtechnologies = [];
export const getWebtechnologies = () =>
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then(result => {
            webtechnologies = result.data;
            return webtechnologies;
        });
export const getWebtechnologie = webtechnologieId => {
    return webtechnologies.find(webtechnologie => {
        return webtechnologie.id === webtechnologieId;
    });
};
