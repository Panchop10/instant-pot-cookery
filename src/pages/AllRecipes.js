//import logo from "./logo.png";
import classes from "./AllRecipesPage.module.css";

import HorizontalSlider from "../components/horizontal-slider/HorizontalSlider";
import SectionTitle from "../components/section-title/SectionTitle";
import CategoriesMenu from "../components/categories-menu/CategoriesMenu";

const items = [
  {
    id: 1,
    title: "Risotto con camarones y queso parmesano",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-11.jpg",
    rate: 2.5,
    preparation_time: "15 m",
    cooking_time: "40 m",
    ready_in: "55 m",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Filete a la mostaza",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-10.jpg",
    rate: 4.5,
    preparation_time: "20 m",
    cooking_time: "30 m",
    ready_in: "50 m",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Zanahorias glaseadas",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-09.jpg",
    rate: 4.5,
    preparation_time: "10 m",
    cooking_time: "20 m",
    ready_in: "30 m",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Lasaña de carne",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-08.jpg",
    rate: 4.5,
    preparation_time: "35 m",
    cooking_time: "40 m",
    ready_in: "1 h 15 m",
    difficulty: "Hard",
  },
  {
    id: 5,
    title: "Papas en espiral al horno",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-07.jpg",
    rate: 4.5,
    preparation_time: "15 m",
    cooking_time: "40 m",
    ready_in: "55 m",
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "Alitas Teriyaki",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-06.jpg",
    rate: 4.5,
    preparation_time: "15 m",
    cooking_time: "40 m",
    ready_in: "55 m",
    difficulty: "Easy",
  },
  {
    id: 7,
    title: "Sopa de cebolla",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-05.jpg",
    rate: 4.5,
    preparation_time: "15 m",
    cooking_time: "40 m",
    ready_in: "55 m",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "Albóndigas de pollo Teriyaki",
    url: "https://instantpot.mx/wp-content/uploads/2020/08/InstantPot-recetas-04.jpg",
    rate: 4.5,
    preparation_time: "15 m",
    cooking_time: "40 m",
    ready_in: "55 m",
    difficulty: "Easy",
  },
];

const categories = [
  {
    id: 1,
    title: "Breakfast",
    icon: "breakfast.png",
    slung_name: "breakfast",
  },
  {
    id: 2,
    title: "Soup",
    icon: "soup.png",
    slung_name: "soup",
  },
  {
    id: 3,
    title: "Chicken",
    icon: "chicken.png",
    slung_name: "chicken",
  },
  {
    id: 4,
    title: "Pasta",
    icon: "pasta.png",
    slung_name: "pasta",
  },
  {
    id: 5,
    title: "Vegetarian",
    icon: "vegetarian.png",
    slung_name: "vegetarian",
  },
  {
    id: 6,
    title: "Sea Food",
    icon: "seafood.png",
    slung_name: "seafood",
  },
  {
    id: 7,
    title: "Dessert",
    icon: "dessert.png",
    slung_name: "dessert",
  },
];

function AllRecipesPage() {
  return (
    <section>
      <div className={classes.topBackground}></div>
      <input
        className={classes.searchBar}
        type="text"
        name="name"
        placeholder="search here"
      />
      <SectionTitle title="LATEST" subtitle="Enjoy the last added recipes" />
      <HorizontalSlider id={1} data={items} />
      <SectionTitle
        title="CATEGORIES"
        subtitle="Choose one of our categories"
      />
      <CategoriesMenu data={categories} />

      {/* <img src={logo} width={100} height={100} /> */}
    </section>
  );
}

export default AllRecipesPage;
