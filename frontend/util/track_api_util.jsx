export const fetchAllTracks = (albumId) => {
  return $.ajax({
    method: 'get',
    url: `api/albums/${albumId}`
  });
};

export const createTrack = (trackData) => {
  return $.ajax({
    method: 'post',
    url: `api/tracks`,
    data: trackData,
    contentType: false,
    processData: false
  });
};
