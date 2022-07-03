import { TYPES } from "../actions/contadorActions";

export const contadorInititalState = { contador: 0 };

export const contadorInit = (inititalState: any) => {
  return {
    contador: inititalState.contador + 100,
  };
};


export function contadorReducer(state: any, action: any) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };

    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };

    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };

    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };

    case TYPES.RESET:
      return contadorInititalState;

    default:
      return state;
  }
}
