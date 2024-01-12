import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ img }) => {
  return (
    <div className={styles.card +" mx-auto"}>
      <div className={styles.imgBox}>
        <img
          src="https://png.pngtree.com/png-clipart/20211118/ourmid/pngtree-gaming-mouse-png-image_4035672.png"
          // src={img}
          alt="mouse corsair"
          className={styles.mouse}
        />
      </div>

      <div className={styles.contentBox}>
        <h3>Mouse Corsair M65</h3>
        <h2 className={styles.price}>
          $61.<small>98</small>
        </h2>
        <a href="#" className={styles.buy}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
