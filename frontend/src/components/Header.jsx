import shoppingIcon from "/src/assets/images/shopping-cart.svg"
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx"

function Header (){
    return (
        <> 
    <div className="w-full h-[192px] bg-white ">
        <div className="px-[80px] py-[40px]">
            <div className="flex space-x-[24px]">
            <Logo />
                <input type="text" placeholder="Pesquisar produto..." className="bg-light_gray_3 rounded-[4px] p-[8px] w-[550px]"/>
                <div className="flex items-center pl-[24px] ">
                <NavLink to="/" className="text-[16px] text-dark_gray_2 underline"> Cadastre-se </NavLink>
                </div>
                <button className="bg-primary w-[144px] h-[40px] rounded-[4px] font-bold text-white text-[14px]" >Entrar</button>
                <div className="pl-[40px] relative">
                    <img src= {shoppingIcon} className="min-w-[35px] items-center" alt="Icone de carrinho de compras" />
                    <span className="text-white text-[12px] font-bold absolute right-[5px] bottom-[27px]">2</span>
                </div>
            </div>

            <div className="pt-[56px]">
                <nav className=" flex space-x-[24px]">
                <NavLink to="/" className={({isActive}) => isActive 
                ? "font-bold underline text-primary" : "text-normal hover:font-bold hover:underline hover:text-primary" }> Home </NavLink>
                <NavLink to="/products" className={({isActive}) => isActive 
                ? "font-bold underline text-primary" : "text-normal hover:font-bold hover:underline hover:text-primary" }> Produtos </NavLink>
                <NavLink to="/categories" className={({isActive}) => isActive 
                ? "font-bold underline text-primary" : "text-normal hover:font-bold hover:underline hover:text-primary" }> Categorias </NavLink>
                <NavLink to="/my-orderings" className={({isActive}) => isActive 
                ? "font-bold underline text-primary" : "text-normal hover:font-bold hover:underline hover:text-primary" }>Meus Pedidos </NavLink>
                </nav>
            </div>
        </div>
    </div>
        </>
    )
}

export default Header;