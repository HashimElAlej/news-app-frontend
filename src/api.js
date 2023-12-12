import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://forums-api-849y.onrender.com/api",
});

export function fetchAllArticles(categoryFilter) {
  return newsApi
    .get("/articles", { params: { topic: categoryFilter } })
    .then((res) => {
      return res.data.articles;
    });
}

export function fetchArticleById(id) {
  return newsApi
    .get(`articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
}


export function fetchAllComments(id) {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
}
