import axiosClient from 'src/services/apis/axiosClient';

export const getArtistSongs = async () => {
  const url = '/audios';

  return await axiosClient
    .get(url)
    .then((response) => response.data.audios)
    .catch((error) => error);
};

export const getSong = async (songId: number) => {
  const url = `audios/${songId}`;

  return await axiosClient
    .get(url)
    .then((response) => response.data.audio)
    .catch((error) => error);
};
