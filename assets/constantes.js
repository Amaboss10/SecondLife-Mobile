import axios from 'axios'

export const MON_IP = '176.181.109.96' //Mettre son IP aller à monip.org pour connaître son IP


/**
 * Adresse local à la machine dans le reseau local
 * Cette correspond on pc qui sert de server pour la BD
 * */
export const BASE_URL = 'http://192.168.1.9:8000'



/**
 * Permet de recuperer les items depuis la BD
 */
export function getItemsFromApi() {
    return axios({
        method: 'get',
        url: BASE_URL + '/api/posts',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/ld+json'
        }
    }).then((response) => response.data
    ).catch((error) => {
        console.log(error)
    });
}