import axios from 'axios';

const baseURL = 'https://api.unsplash.com/photos/';
const clientID = 'aSS7yV15F-_jSgiGQhDNX8TKhVVs-ebTDsPU8wbl2FI';

const HttpService = axios.create({
  baseURL,
  headers: {
    Authorization: `Client-ID ${clientID}`,
  },
});

export default HttpService;