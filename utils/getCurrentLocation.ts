export const getCurrentLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve([coords.latitude, coords.longitude]);
      });
    } catch (error) {
      alert('Has ocurred an error getting your location ');
      reject();
    }
  });
};
