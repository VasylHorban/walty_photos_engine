import { payload } from '../types';

export const fetchPhotos = async (tags: string, page: number): Promise<payload> => {
  const key = '20731832-d3b8f1ab2a733dd6c7d586e1b';
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${key}&q=${tags}&imagde_type=photo&page=${page}`
    );
    console.log(response)
    return await response.json();
  } catch (err) {
    throw err;
  }
};
