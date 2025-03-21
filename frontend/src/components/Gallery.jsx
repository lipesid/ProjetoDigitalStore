import { useState } from 'react';

export default function Gallery(props) {
    const [current, setCurrent] = useState(0);

    const css = {
        transform: `translateX(-${current}%)`
    };

    const imgs = [
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" },
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" },
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-6.jpeg" },
        { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-7.jpeg" },
    ];

    function handlerSlide(direction) {
        setCurrent((prev) => {
            let position = direction === 'next' ? prev + 100 : prev - 100;
            if (position > (imgs.length - 1) * 100) return 0;
            if (position < 0) return (imgs.length - 1) * 100;
            return position;
        });
    }

    // Função para mudar o slide ao clicar em um card
    function handleCardClick(index) {
        setCurrent(index * 100); // Atualiza o estado para o slide correspondente ao card clicado
    }

    const tagsImg = imgs.map((img, index) => (
        <div className="slide min-w-full" key={index}>
            <img className="w-full h-full" src={img.src} alt={`Slide ${index + 1}`} />
        </div>
    ));

    return (
        <div className="gallery max-w-[1440px] max-h-[681px] m-auto mb-[40px]">
            {/* Carrossel */}
            <div className="slider relative overflow-hidden">
                <div className="slides flex ease-in-out duration-500" style={css}>
                    {tagsImg}
                </div>
                <span
                    className="absolute top-1/2 cursor-pointer left-0 transform -translate-y-1/2"
                    id="prev"
                    onClick={() => handlerSlide('prev')}
                    aria-label="Previous slide"
                >
                    <img src="/src/assets/icons/prev.svg" alt="Previous slide" />
                </span>
                <span
                    className="absolute top-1/2 cursor-pointer right-0 transform -translate-y-1/2"
                    id="next"
                    onClick={() => handlerSlide('next')}
                    aria-label="Next slide"
                >
                    <img src="/src/assets/icons/next.svg" alt="Next slide" />
                </span>
            </div>

            {/* Cards abaixo do carrossel */}
            <div className={`cards flex justify-center mt-8 gap-6 ${props.hidden}`}>
                {imgs.map((img, index) => (
                    <div
                        key={index}
                        className="card w-[200px] h-[120px] rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => handleCardClick(index)} // Altera o slide quando o card for clicado
                    >
                        <img
                            src={img.src}
                            alt={`Card ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
