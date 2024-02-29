type Document = {
  id: string;
  title: string;
  subtitle: string;
};

export const searchDocuments = (documents: Document[], searchText: string): Document[] => {
  if (!searchText.trim()) {
    return [];
  }

  // Lowercase the search text for case-insensitive comparisons
  const lowerSearchText = searchText.toLowerCase();

  // Score each document based on how well it matches the search text
  const scoredDocs = documents.map((doc) => {
    const lowerTitle = doc.title.toLowerCase();
    let score = 0;

    // Exact match scores highest
    if (lowerTitle === lowerSearchText) {
      score = 100;
    }
    // Starting match scores higher
    else if (lowerTitle.startsWith(lowerSearchText)) {
      score = 75;
    }
    // Contains the search text scores lower
    else if (lowerTitle.includes(lowerSearchText)) {
      score = 50;
    }
    // Check if each word in the search text is contained in the title
    else {
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
