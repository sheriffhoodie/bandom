export const signup = user => (
  $.ajax({
    method: 'post',
    url: "/api/users",
    data: {user: user}
  })
);

export const login = user => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/session',
      data: {user: {username: user.username, password: user.password}}
    })
  );
};

export const logout = () => (
  $.ajax({
    method: 'delete',
    url: '/api/session'
  })
);
