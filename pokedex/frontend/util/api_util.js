// This is where we make AJAX requests
export const fetchAllPokemon = () => {
  $.ajax({
    method: "GET",
    url: '/api/pokemon',
    
  });
};
