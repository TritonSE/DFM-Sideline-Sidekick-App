type Document = {
  _id?: string;
  title: string;
  subtitle?: string;
  overview?: object;
  treatment?: object;
};

export const searchDocuments = (documents: Document[], searchText: string): Document[] => {
  if (!searchText.trim()) {
    return [];
  }

  const lowerSearchText = searchText.toLowerCase();

  const scoredDocs = documents.map((doc) => {
    const lowerTitle = doc.title.toLowerCase();
    let score = 0;

    if (lowerTitle === lowerSearchText) {
      score = 100;
    } else if (lowerTitle.startsWith(lowerSearchText)) {
      score = 75;
    } else if (lowerTitle.includes(lowerSearchText)) {
      score = 50;
    } else {
      const searchTextWords = lowerSearchText.split(/\s+/);
      const titleWords = lowerTitle.split(/\s+/);
      searchTextWords.forEach((searchWord) => {
        if (titleWords.includes(searchWord)) {
          score += 5;
        }
      });
    }

    return { ...doc, score };
  });

  const filteredDocs = scoredDocs.filter((doc) => doc.score > 0);

  const sortedDocs = filteredDocs.sort((a, b) => b.score - a.score);

  return sortedDocs.map(({ score: _score, ...doc }) => doc);
};
