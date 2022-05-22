import { useEffect, React } from 'react';




export default function Product() {
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-5d7a7-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      console.log(responseData);

    };
    fetchMeals();
  }, []);

  return (
    <div>Product</div>
  )
}
