import RedditRepository from "./repositories/RedditRepository";


const repositories = {
    'reddit': RedditRepository
}

export default {
    get: name => repositories[name]
}