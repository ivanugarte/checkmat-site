import "react-multi-carousel/lib/styles.css";


export default function Intro() {

  return (
    <>
      <div className="text-6xl mt-10 text-center italic rotating-text-wrapper ">
        <p className="mb-5"> Academia de artes marciales</p>
        <p className="mb-5"> Brazilian Jiu Jitsu</p>
        <p><strong> Checkmat Ugarte </strong> </p>
      </div>
      <section className="rounded">
        <img src="/img/logoivan.jpg" alt="gato" />
        <img src="/img/logoRatitas.jfif" alt="gato" />
        <img src="/img/logoSantaCruz.jpg" alt="gato" />
        <img src="/img/logo2g.png" alt="gato" />
      </section>
    </>
  );
}
