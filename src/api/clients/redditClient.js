import axios from 'axios';

const baseDomain = 'https://www.reddit.com';

export default axios.create({
    baseDomain,
    headers: {

    }
})