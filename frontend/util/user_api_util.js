export const fetchUser = userId => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}`
  });
};
