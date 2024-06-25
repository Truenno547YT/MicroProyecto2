import "../assets/styles/contactSection.css";
import imagenMision from "../assets/images/imgContactSection/imagenMision.png";
import imagenVision from "../assets/images/imgContactSection/imagenVision.png";
import imagenNosotros from "../assets/images/imgContactSection/imagenNosotros.png";
import planta from "../assets/images/imgContactSection/planta.png";
//nosotros

export default function Nosotros() {
  return (
    <div className="p">
      <div class="barra">
        <p className="SN">Sobre nosotros</p>
        <p className="descripcionSN">
          Somos un restaurante especializado en la deliciosa categoría de menú
          de POKÉ BOWL y POKÉ BURRITOS. Desde nuestra apertura el 12 de
          septiembre de 2023, nos hemos dedicado a brindarles a nuestros
          clientes una experiencia culinaria única y satisfactoria.
        </p>
        <img src={imagenNosotros} alt="Nosotros" className="imagenSN" />
      </div>
      <img src={planta} alt="Planta" className="planta1" />
      <p className="mision">Misión</p>
      <p className="descripcionMision">
        Nuestra misión es alegrarles el día con los bowls más épicos que se
        puedan armar. Estamos comprometidos en ofrecer ingredientes frescos y de
        alta calidad, combinados de manera creativa para crear sabores
        irresistibles. Queremos que cada visita a MOLOKA'I Poke sea una
        experiencia memorable llena de sabor y satisfacción.
      </p>

      <img src={imagenMision} alt="Mision" className="imagenMision" />

      <p className="vision">Visión</p>
      <p className="descripcionvision">
        En MOLOKA'I Poke, nuestra visión es convertirnos en el mejor poké del
        mundo. Nos esforzamos constantemente por superar las expectativas de
        nuestros clientes y establecer nuevos estándares en la industria de los
        alimentos. Buscamos ser reconocidos por nuestra excelencia en la calidad
        de nuestros platos y en el servicio que brindamos.
      </p>

      <img src={imagenVision} alt="Vision" className="imagenVision" />
      <img src={planta} alt="Planta" className="planta2" />
    </div>
  );
}
