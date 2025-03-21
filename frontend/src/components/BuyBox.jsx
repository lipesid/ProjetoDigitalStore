import React from 'react';
import PropTypes from 'prop-types';
import starIcon from "../assets/icons/star-icon.svg";
import ProductOptions from "./ProductOptions";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
}) => {
  const handlePurchase = () => {
    alert(`Comprando ${name}`);
    // Adicione lógica adicional aqui, se necessário
  };

  return (
    <div className="p-4 border border-light_gray_2 rounded-lg" role="region" aria-labelledby="buybox-header" aria-describedby="buybox-description">
      <h2 id="buybox-header" className="text-2xl text-dark_gray">{name}</h2>
      <p id="buybox-description" className="text-sm text-dark_gray_3">{reference}</p>
      
      <div className="flex items-center my-2">
        <span className="flex items-center bg-warning text-white text-sm px-2 py-1 rounded-md">
          {Array.from({ length: Math.round(stars) }, (_, i) => (
            <img key={i} src={starIcon} alt="Star" className="ml-1 w-3" />
          ))}
        </span>
        <span className="text-sm text-light_gray ml-2">{rating} avaliações</span>
      </div>

      <div className="my-4">
        {priceDiscount ? (
          <>
            <span className="text-lg text-light_gray_2 line-through">{price}</span>
            <span className="text-2xl text-dark_gray_2 ml-2">{priceDiscount}</span>
          </>
        ) : (
          <span className="text-2xl text-dark_gray_2">{price}</span>
        )}
      </div>
      
      <p className="text-sm text-dark_gray_2">{description}</p>

      <div className="my-4">
        <ProductOptions sizes={['39', '40', '41', '42', '43']} colors={['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1']} shape="square" />
      </div>

      <button 
        className="mt-4 bg-orange-500 text-white font-bold text-base px-4 py-2 rounded-md border border-dark_gray focus:outline-none focus:ring-2 focus:ring-orange-300" 
        onClick={handlePurchase}
        aria-label={`Comprar ${name}`}
      >
        Comprar
      </button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
  description: PropTypes.string.isRequired,
};

BuyBox.defaultProps = {
  priceDiscount: null,
};

export default BuyBox;
