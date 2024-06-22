const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.push({
        id: Math.random().toString(36).substr(2, 9),
        name: item,
        isFolder,
        items: [],
        content: isFolder ? [] : '',
      });
      return tree;
    }

    let updatedItems = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: updatedItems };
  };

  return { insertNode };
};

export default useTraverseTree;
