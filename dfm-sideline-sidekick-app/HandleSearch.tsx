type Document = {
  id: string;
  title: string;
  subtitle?: string;
  [key: string]: any;
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

  // Filter out documents that don't match at all
  const filteredDocs = scoredDocs.filter((doc) => doc.score > 0);

  // Sort by score in descending order
  const sortedDocs = filteredDocs.sort((a, b) => b.score - a.score);

  // Return the documents sorted by their score
  return sortedDocs.map((doc) => ({ id: doc.id, title: doc.title, subtitle: doc.subtitle }));
};
