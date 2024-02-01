const getFood = async () => {
  const response = await fetch("http://localhost:8000/pizza");
  const result = await response.json();
  console.log(result);
  return result;
};

const foodService = {
  getFood,
};

export default foodService;
