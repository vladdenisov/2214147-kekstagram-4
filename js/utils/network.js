export const fetchData = async () => await fetch('https://27.javascript.pages.academy/kekstagram-simple/data').then((res) => res.json());

export const sendData = async (form) => {
  const result = await fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body: new FormData(form)
  });
  if (result.status !== 200) {
    throw new Error();
  }
  return await result.json();
};
