import ProductListing from "./ProductListing.jsx"

function ProductCheckBox() {
    return (
        <>
            <div>
                <div className="flex justify-between my-[30px]">
                    <span className="self-center text-[18.7px]">
                        <b>Resultados para "Tênis" - </b>389 produtos
                    </span>
                    <select className="flex text-dark_gray_2 text-[16px] bg-light_gray_3 border-solid border-2 rounded-[4px] border-black  w-[300px] h-[40px]" name="" id="">
                        <option value="Maior preço">Ordernar por: Menor preço</option>
                        <option value="Menor preço">Ordernar por: Maior preço</option>
                    </select>
                </div>
                <div className="flex">
                    <div className="bg-white min-w-[308px] h-[750px] px-[30px] py-[30px] mr-[30px]"> {/* Div Principal engloba tudo */}
                        <form action="" className="">

                            <div className="pb-[20px] border-b-[1px] border-light_gray_2 font-bold text-dark_gray_2 text-[16px]"> {/* Div do nome "Filtrar por" */}
                                Filtrar por
                            </div>
                            <div className="pt-[20px] ">  {/* Div da categoria "Marka" */}
                                <div className=" font-bold text-dark_gray_2 text-[16px] pb-2">
                                    Marka
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="adiddas" name="adiddas" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="adiddas"> Adiddas</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="calenciaga" name="calenciaga" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="calenciaga"> Calenciaga</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="k-swiss" name="k-swiss" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="k-swiss"> K-swiss</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="nike" name="nike" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="nike"> Nike</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="puma" name="puma" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="puma"> Puma</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Categoria" */}
                                <div className="font-bold text-dark_gray_2 text-[16px] pb-2">
                                    Categoria
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="esporte-e-lazer" name="esporte-e-lazer" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="esporte-e-lazer"> Esporte e lazer</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="casual" name="casual" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="casual"> Casual</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="utilitario" name="utilitario" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="utilitario"> Utilitário</label>
                                </div>
                                <div className="flex flex items-center mb-2">
                                    <input type="checkbox" id="corrida" name="corrida" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="corrida"> Corrida</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Gênero" */}
                                <div className="font-bold text-dark_gray_2 text-[16px] pb-2">
                                    Gênero
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="masculino" name="masculino" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="masculino"> Masculino</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="feminino" name="feminino" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="feminino"> Feminino</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="unisex" name="unisex" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="unisex"> Unisex</label>
                                </div>
                            </div>

                            <div className="pt-[20px]"> {/* Div da categoria "Estado" */}
                                <div className="font-bold text-dark_gray_2 text-[16px] pb-2">
                                    Estado
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="radio" id="novo" name="estado" value="novo" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="novo">Novo</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="radio" id="usado" name="estado" value="usado" className="w-[22px] h-[22px] accent-primary " />
                                    <label className="text-[14px] text-dark_gray_2 pl-2" for="usado">Usado</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ProductListing />
                </div>
            </div>
        </>
    )
}
export default ProductCheckBox;

