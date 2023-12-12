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
    .get(`/articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
}

export function fetchAllCategories() {
  return marketplaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
}

export function postNewOrder(basket, user) {
  const promises = [];

  for (const item of basket) {
    const itemPromise = marketplaceApi
      .post(`/users/${user}/orders`, { item_id: item.item_id })
      .then((res) => {
        return res.data.item;
      });
    promises.push(itemPromise);
  }

  return Promise.all(promises);
}

export function getAllOrders(user) {
  return marketplaceApi.get(`/users/${user}/orders`).then((res) => {
    return res.data.items;
  });
}

export function postBasketItem(item, user) {
  return marketplaceApi
    .post(`/users/${user}/basket`, { item_id: item.item_id })
    .then((res) => {
      return res.data.item;
    });
}

export function getBasket(user) {
  return marketplaceApi.get(`/users/${user}/basket`).then((res) => {
    return res.data.items;
  });
}

export function deleteBasketItem(item_id, user) {
  return marketplaceApi.delete(`/users/${user}/basket/${item_id}`);
}

export function getUser(username) {
  return marketplaceApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
}

export function postItemForSale(item) {
  console.log(item)
  return marketplaceApi
    .post(`/items`, item)
    .then((res) => {
      console.log('success')
      return res.data.item;
    });
}

export function postUser(username) {
  return marketplaceApi
    .post(`/users`, {username})
    .then((res) => {
      console.log('success, user registered')
      return res.data.user;
    });
}