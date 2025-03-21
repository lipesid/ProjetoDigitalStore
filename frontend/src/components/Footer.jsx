import React from 'react';
import { NavLink } from 'react-router-dom'; // Importando NavLink
import Logo from "./Logo.jsx";
import midias from '../assets/images/midias.svg';

function Footer  () {
  return (
    <footer className="bg-dark_gray text-white p-8 flex flex-wrap justify-around w-ful text-left text-white bg-dark_gray p-5">
      {/* Logo e descrição */}
      <div className="mb-8 md:mb-0 w-80">
        <Logo color="white" />

        <p className="text-white mb-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.
        </p>
        <div className="flex space-x-4">
          {/* Ícones de mídias sociais */}
          <a href="#"><img src={midias} alt="midias" /></a>
        </div>
      </div>

      {/* Informação */}
      <div className="mb-8 md:mb-0">
        <h4 className="text-xl font-semibold mb-2">Informação</h4>
        <ul className="space-y-2">
          <li><NavLink to="/sobre" className="text-white hover:text-dark_gray_2">Sobre Drip Store</NavLink></li>
          <li><NavLink to="/seguranca" className="text-white hover:text-dark_gray_2">Segurança</NavLink></li>
          <li><NavLink to="/wishlist" className="text-white hover:text-dark_gray_2">Wishlist</NavLink></li>
          <li><NavLink to="/blog" className="text-white hover:text-dark_gray_2">Blog</NavLink></li>
          <li><NavLink to="/trabalhe-conosco" className="text-white hover:text-dark_gray_2">Trabalhe conosco</NavLink></li>
          <li><NavLink to="/meus-pedidos" className="text-white hover:text-dark_gray_2">Meus Pedidos</NavLink></li>
        </ul>
      </div>

      {/* Categorias */}
      <div className="mb-8 md:mb-0">
        <h4 className="text-xl font-semibold mb-2">Categorias</h4>
        <ul className="space-y-2">
          <li><NavLink to="/categorias/camisetas" className="text-white hover:text-dark_gray_2">Camisetas</NavLink></li>
          <li><NavLink to="/categorias/calcas" className="text-white hover:text-dark_gray_2">Calças</NavLink></li>
          <li><NavLink to="/categorias/bonés" className="text-white hover:text-dark_gray_2">Bonés</NavLink></li>
          <li><NavLink to="/categorias/headphones" className="text-white hover:text-dark_gray_2">Headphones</NavLink></li>
          <li><NavLink to="/categorias/tenis" className="text-white hover:text-dark_gray_2">Tênis</NavLink></li>
        </ul>
      </div>

      {/* Contato */}
      <div className="md:mb-0 w-[210px]">
        <h4 className="text-xl font-semibold mb-2">Contato</h4>
        <p className="text-white">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p className="text-white">(85) 3051-3411</p>
      </div>
    </footer>
)} 

export default Footer;