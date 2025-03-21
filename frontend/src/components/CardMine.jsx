import React from "react";

export default function CardMine() {
        // Supondo que você queira usar um estado para 'current', você pode definir assim:
    const [current, setCurrent] = React.useState(0);

    let css = {
        transform: `translateX(-${current}%)`
    };

    let imgs = [
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-1.png?raw=true" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true" },
        { src: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true" },
    ];

    return (
        <div className="flex items-center ">
            
            <div className="w-screen justify-between mx-32">
                <div className="flex justify-center gap-[10px]" style={css}>
                    {imgs.map((img, index) => {
                       return <img key={index} src={img.src} alt={`Coleção ${index + 1}`} className="w-[405px]" />
                    })}
                </div>
            </div>
        </div>
    );
}