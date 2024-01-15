export const fetchApiData = async (
  url: string,
  handleResponse: (result: any) => void,
) => {
  const exercisesResponse = await fetch(`${url}?delay=0`);

  if (exercisesResponse.ok) {
    const exercisesResult = await exercisesResponse.json();

    handleResponse(exercisesResult);
  } else {
    console.error('Response cannot be parsed', exercisesResponse);
  }
};
