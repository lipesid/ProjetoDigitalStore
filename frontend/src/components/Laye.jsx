import React from "react";

function Laye() {
    return (
        <div className="flex m-auto gap-[80px] justify-center mt-[100px] pt-[100px] bg-white">
            <div className="relative  grid flex-wrap">
                <img src="./src/assets/images/shoe.svg" alt="shoe" className="max-w-[573px] absolute top-[31px] left-[-77px]" />
                <img src="./src/assets/images/elipse.svg" alt="elipse" className="max-w-[466px]" />
            </div>
            <div className="max-w-[589px] text-dark_gray_2 flex flex-col gap-[20px]">
                <h2 className="text-[16px] leading-[22px] font-bold text-primary">Oferta especial</h2>
                <h3 className="text-[48px] leading-[50px] font-[700] tracking-[1px]">Air Jordan edição de colecionador</h3>
                <p className="mt-2 text-gray-700 text-[16px] leading-[28px] tracking-[.75px] max-w-[550px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <button className="mt-[15px] text-white max-w-[220px] bg-primary py-[10px] px-[60px] rounded-xl font-[700]">Ver Oferta</button>
            </div>
        </div>
    );
}

export default Laye;