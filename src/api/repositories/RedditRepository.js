
export const RESOURCE = 'https://www.reddit.com';

export default {
    async getSubredditPosts(subreddit) {
        const response = await fetch(`${RESOURCE}${subreddit}.json`);
        const json = await response.json();

        return json.data.children.map((post) => post.data);
    },
    async getSubreddits() {
        const response = await fetch(`${RESOURCE}/subreddits.json`);
        const json = await response.json();

        return json.data.children.map((subreddit) => subreddit.data);
    },
    async getPostComments(permalink) {
        const response = await fetch(`${RESOURCE}${permalink}.json`);
        const json = await response.json();

        return json[1].data.children.map((subreddit) => subreddit.data);
    }
}