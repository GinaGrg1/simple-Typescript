simport axios from 'axios'
import { createObjectCsvWriter } from 'csv-writer'
import path from 'path'

async function getActivity() {
    try {
        let response = await axios.get('https://www.boredapi.com/api/activity')
        return response.data
    } catch (error) {
        console.error(`ERROR: ${error}`)
    }
}

type Country = {
    name: string;
    countryCode: string;
    capital: string;
    phoneIndicator: number;
  };
  
let countries: Country[] = [
    { name: 'Cameroon', capital: 'Yaounde', countryCode: 'CM', phoneIndicator: 237 },
    { name: 'France', capital: 'Paris', countryCode: 'FR', phoneIndicator: 33 },
    { name: 'United States', capital: 'Washington, D.C.', countryCode: 'US', phoneIndicator: 1 },
    { name: 'India', capital: 'New Delhi', countryCode: 'IN', phoneIndicator: 91 },
    { name: 'Brazil', capital: 'Brasília', countryCode: 'BR', phoneIndicator: 55 },
    { name: 'Japan', capital: 'Tokyo', countryCode: 'JP', phoneIndicator: 81 },
    { name: 'Australia', capital: 'Canberra', countryCode: 'AUS', phoneIndicator: 61 },
    { name: 'Nigeria', capital: 'Abuja', countryCode: 'NG', phoneIndicator: 234 },
    { name: 'Germany', capital: 'Berlin', countryCode: 'DE', phoneIndicator: 49 },
];

getActivity().then((data) => {
    const msg = JSON.stringify(data.activity).toUpperCase()
    countries.push({ name: 'test', capital: `${msg}`, countryCode: 'hh', phoneIndicator: 99 })

    createObjectCsvWriter({
        path: path.resolve(__dirname, 'dummy.csv'),
        header: [
            { id: 'name', title: 'Name' },
            { id: 'countryCode', title: 'Country Code' },
            { id: 'capital', title: 'Capital' },
            { id: 'phoneIndicator', title: 'International Direct Dialling' },
        ],
    }).writeRecords(countries)
}).then(() => {
    console.log("Its completed successfully")
});

getActivity()
