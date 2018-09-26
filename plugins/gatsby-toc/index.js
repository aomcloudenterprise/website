const generateTOC = require('mdast-util-toc');

const mm = require('micromatch');

module.exports = function generateTOCNodes({
  markdownNode,
  markdownAST
}, {
  include = [],
  mdastUtilTocOptions = {}
}) {
  if (!markdownNode.fileAbsolutePath) {
    return;
  }

  const filePath = markdownNode.fileAbsolutePath.split(process.cwd()).pop().replace(/^\//, '');

  const isIncluded = mm.isMatch(filePath, include);

  if (!isIncluded) {
    return;
  }

  const result = generateTOC(markdownAST, mdastUtilTocOptions);
  const index = result.index;
  const toc = result.map;

  if (!toc || index < 0) {
    return;
  }

  markdownAST.children = [].concat(
    markdownAST.children.slice(0, index),
    toc,
    markdownAST.children.slice(index)
  );
};
