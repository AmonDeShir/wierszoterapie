
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/admin\/poems\/edit/)) {
    deletePage(page);

    createPage({
      ...page,
      matchPath: "/admin/poems/edit/:poemId",
    });
  }
};