import { Mayus } from "@/components/mayus";
import { NavRedes } from "@/components/navRedes";
import { CargarImagen } from "@/components/cargarImagen";
const linkSoundcloud = 'https://soundcloud.com/ignacio-robertson';
const srcImagen = "/img/soundcloud.png";
export default function Home() {
  return (
    <div style={{
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 15,
      borderColor: 'rgba(0, 248, 74, 0.69)',
      padding: 20
    }}>
      <hr />
      <Mayus />
      <br />
      <hr />
      <br />
      <h3>Ingresá:</h3>
      <NavRedes link={linkSoundcloud} />
      <br />
      <hr />
      <br />
      <h3>Imagen desde componente:</h3>
      <CargarImagen url={srcImagen} />
    </div>
  );
}


// CODIGO DE CLASE


// import { TituloPrincipal } from "@/components/tituloPrincipal";
// import { ListaProductos } from "@/components/listaSuper";
// import { NovedadItem } from "@/components/novedadItem";
// import { Contador } from "@/components/contador";
// import { BotonLuz } from "@/components/apagar-enceder";

// const titulo2 = 'Aprendemos next'
// const productos = [
//   { id: 1, nombre: 'Leche', precio: 150 },
//   { id: 2, nombre: 'Pan', precio: 100 },
//   { id: 3, nombre: 'Huevos', precio: 200 },
//   { id: 4, nombre: 'Queso', precio: 250 },
//   { id: 5, nombre: 'Manteca', precio: 180 },
// ];
// const contenidoNovedad = {
//   id: "1",
//   titulo: "Next.js lanza componentes",
//   subtitulo: "La version 15 introduce...",
//   autor: "React UTNBA",
//   cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// };

// <h2>Ejemplos de PROPS</h2>
// {/* componente simple y qeue ademas lo puedo reutilizar varias veces */}
// <TituloPrincipal titulo="Este es el titulo principal de la pagina" />
// <TituloPrincipal titulo={titulo2} />
// <hr />
// {/* componente para listar un array */}
// <ListaProductos items={productos} />
// <hr />
// {/* componente para mostrar multiples props + destructuring */}
// <NovedadItem
//   title={contenidoNovedad.titulo}
//   subtitle={contenidoNovedad.subtitulo}
//   author={contenidoNovedad.autor}
//   body={contenidoNovedad.cuerpo}
//   />
// <hr />
// <h2>Ejemplos de ESTADOS</h2>
// <h3>Ejemplo de contador</h3>
// <Contador />
// <hr />
// <h3>Ejemplo de Luz</h3>
// <BotonLuz />