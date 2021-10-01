const options = (option) => {
  const optionsItem = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product",
    params: {
      page: "1",
      country: "IN",
      keyword: { option },
    },
    headers: {
      "x-rapidapi-host": "amazon24.p.rapidapi.com",
      "x-rapidapi-key": "5b7c08ec53mshb2debbee1c283acp1ffa61jsnecff28d2bd00",
    },
  };

  var optionsItem2 = {
    method: "GET",
    url: "https://amazon23.p.rapidapi.com/product-search",
    params: { query: "jeans", country: "US" },
    headers: {
      "x-rapidapi-host": "amazon23.p.rapidapi.com",
      "x-rapidapi-key": "fd86381586msh2cccdb26f18dd89p18cbefjsna4633d2687ef",
    },
  };
  return optionsItem;
};
export default options;
