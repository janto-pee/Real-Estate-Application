import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers : {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '567ba7ddcbmsh1610340a21e73abp15ac7cjsn8a3813e9e8e1',
    }
  } )
    
  return data;
}