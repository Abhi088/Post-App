import axios from 'axios';

export const getPosts = async () => {
    const url = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

    return axios.get(url);
}

export const getAuthor = async (url) => {
    return axios.get(url);
}