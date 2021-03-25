export const fetchPhotos = async (tags, page) => {
  const key = '20731832-d3b8f1ab2a733dd6c7d586e1b';
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${key}&q=${tags}&imagde_type=photo&page=${page}`
    );
    return await response.json();
  } catch (err) {
    throw err;
  }
};
