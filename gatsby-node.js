const products = require('./src/data/products.json');
exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId, homepage = 1 }) => {
  const { createPage } = actions;

  products.forEach((product) => {
    createPage({
      path: `/${product.slug}`,
      component: require.resolve('./src/templates/productPage.js'),
      context: {
        product,
      },
    });
  });
};
