export const getUserLocation = async (): Promise<[number , number]> => {
  return new Promise<[number, number]>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log({position});
        resolve([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        reject(error);
      }
    );
  });
}