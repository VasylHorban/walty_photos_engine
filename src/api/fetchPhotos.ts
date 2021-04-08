import { payload } from '../types';

export let fetchPhotos = async (tags: string, page: number): Promise<payload> => {
  const key = '20731832-d3b8f1ab2a733dd6c7d586e1b';
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${key}&q=${tags}&imagde_type=photo&page=${page}`
    );
    if (!response.ok) throw new Error(response.statusText)
 
    console.log(response)
    return response.json() as Promise<payload>
  } catch (err) {
    throw err;
  }
};
