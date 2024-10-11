import { obtenerTodasLasComidas } from '../../services/comidas/comidas';

type Comida = {
  nombre: string;
  ingredientes: Array<string>;
};

export default function ListaDeComidas() {
  const listaDeComidas: Array<Comida> = obtenerTodasLasComidas();

  return (
    <div data-testid='lista-de-comidas'>
      {listaDeComidas.map((comida: Comida) => {
        return (
          <dl key='comidas'>
            <dt
              key={`comida-${comida.nombre}`}
              data-testid={`comida-${comida.nombre}`}
            >
              {comida.nombre}
            </dt>
            {comida.ingredientes.map((ingrediente: string) => {
              return (
                <dd
                  key={`${comida}-ingrediente-${ingrediente}`}
                  data-testid={`${comida.nombre}-ingrediente-${ingrediente}`}
                >
                  * {ingrediente}
                </dd>
              );
            })}
          </dl>
        );
      })}
    </div>
  );
}
