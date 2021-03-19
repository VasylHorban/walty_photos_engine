export const fetchPhotos = async (tag) => {
  const key = "20731832-d3b8f1ab2a733dd6c7d586e1b";
  // const options = {
  //   mode : 'no-cors'
  // };
  const response = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${tag}&image_type=photo`
    
  );
  const json =  await response.json();
  console.log(json)
};
