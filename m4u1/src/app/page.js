import { TituloPrincipal } from '@/components/tituloPrincipal';

const titulo2 = 'aprendemos next';

export default function Home() {
  return (
    <div>
      <h2> Ejemplos props </h2> {/ * componente simple que permite reutilizar * /}{' '}
      <TituloPrincipal titulo="Hola curso" />
      <TituloPrincipal titulo={titulo2} />{' '}
    </div>
  );
}
