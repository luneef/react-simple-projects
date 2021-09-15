import { useState, useEffect } from "react";
import menu from "../../pages/foodmenu/menu";
import BackButton from "../../components/BackButton";
import "../../styles/foodmenustyles/foodmenu.css";
import foodborder from "../../images/foodborder.png";

// Component for setting all food categories available
const GetCategories = ({ foodmenu, catSelected, allbtn }) => {
  const category = [
    "All",
    ...new Set(foodmenu.map((foodmenu) => foodmenu.category)),
  ];

  return (
    <nav className="categories">
      {category.map((category, index) => {
        let btnstyle;
        if (category === "All" && allbtn) {
          btnstyle = {
            backgroundColor: "#9e7777",
          };
        }

        return (
          <button
            style={btnstyle}
            className="cat-btn"
            onClick={() => catSelected(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
};

// Food menu main component
const FoodMenu = () => {
  const [foodmenu, setMenu] = useState(menu);
  const [allbtn, setAllBtn] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to determine what category is pick and should be displayed
  const catSelected = (category) => {
    if (category === "All") {
      setMenu(menu);
    } else {
      setMenu(menu.filter((foodmenu) => foodmenu.category === category));
    }

    setAllBtn(false);
  };

  return (
    <section className="foodmenu-container">
      <BackButton />
      <h1 className="restaurant-name">"Around The Clock Resto"</h1>
      <GetCategories
        foodmenu={menu}
        allbtn={allbtn}
        catSelected={catSelected}
      />
      <div className="food-layout">
        {foodmenu.map((item) => {
          return (
            <div className="food-item" key={item.id}>
              <img className="food-border" src={foodborder} alt="Food Border" />
              <img className="food-image" src={item.img} alt={item.title} />
              <h2 className="food-title">{item.title}</h2>
              <p className="food-price">(${item.price})</p>
              <p className="food-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoodMenu;
