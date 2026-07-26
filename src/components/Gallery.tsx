import React from "react";
import Reveal from "./Reveal";
import '../components/Gallery.css';

const galleryData = [
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    caption: "Ambiente Corporativo de Alta Performance",
    delay: 0.1
  },
  {
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
    caption: "Biblioteca Jurídica e Tradição",
    delay: 0.3
  },
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    caption: "Privacidade e Sigilo nas Negociações",
    delay: 0.5
  }
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <header className="gallery__header">
          <Reveal direction="down">
            <span className="gallery__eyebrow">Nossa Estrutura</span>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="gallery__title">
              Excelência em cada detalhe para sua <span className="text-brass">segurança jurídica</span>
            </h2>
          </Reveal>
        </header>

        <div className="gallery__grid">
          {galleryData.map((item, index) => (
            <div key={index} className={`gallery__wrapper gallery__wrapper--${index}`}>
              <Reveal delay={item.delay} direction="up">
                <div className="gallery__item">
                  <div className="gallery__image-container">
                    <img 
                      src={item.url} 
                      alt={item.caption} 
                      className="gallery__img"
                    />
                    <div className="gallery__overlay" />
                  </div>
                  <p className="gallery__caption">{item.caption}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}