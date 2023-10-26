module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/api/news-categories/:id/news-and-updates',
        handler: 'news-category.findNewsAndUpdates',
      },
    ],
  };
  