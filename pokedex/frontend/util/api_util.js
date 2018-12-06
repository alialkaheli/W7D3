// This is where we make AJAX requests
export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: '/api/pokemon',
  });
};
