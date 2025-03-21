import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductOptions = ({ sizes = [], colors = [], radius = '0', shape }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 mb-2">
        {sizes.map((size, index) => {
          const isSelected = selectedSize === size;
          const baseClasses = `flex justify-center items-center cursor-pointer transition duration-200 ${
            isSelected ? 'bg-primary border-primary border-2' : 'border-light_gray_2 border'
          }`;
          
          return (
            <div
              key={index}
              className={`${baseClasses} ${shape === 'square' ? `h-11 w-11 rounded-${radius}` : 'w-8 h-8 rounded-full'}`}
              role="button"
              tabIndex={0}
              onClick={() => handleSizeClick(size)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSizeClick(size);
                }
              }}
              aria-selected={isSelected}
            >
              {size}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full cursor-pointer border-2 transition duration-200 ${
              selectedColor === color ? 'border-primary' : 'border-light_gray_2'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleColorClick(color);
              }
            }}
            role="button"
            tabIndex={0}
            aria-selected={selectedColor === color}
          />
        ))}
      </div>
    </div>
  );
};

ProductOptions.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
};

export default ProductOptions;
