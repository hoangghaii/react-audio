import axiosClient from 'src/services/apis/axiosClient';

export const getArtistSongs = async (artistId: number) => {
  const url = `artists/${artistId}/songs`;

  return await axiosClient
    .get(url)
    .then((response) => response.data.response.songs)
    .catch((error) => error);
};

export const getSong = async (songId: number) => {
  const url = `songs/${songId}`;

  return await axiosClient
    .get(url)
    .then((response) => response.data.response.song)
    .catch((error) => error);
};
