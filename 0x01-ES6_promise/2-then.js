export default function handleResponseFromAPI(promise) {
  const mypromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(Error);
    }
  });

  return mypromise.catch(() => console.log('Got a response from the API'));
}
