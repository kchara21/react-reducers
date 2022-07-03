import { TYPES } from "../actions/crudActions";

export const crudInititalState = {
  db: null,
};

export function crudReducer(state: any, action: any) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data: any) => data),
      };
    }

    case TYPES.CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }


    case TYPES.UPDATE_DATA: {
      let newData = state.db.map((el: any) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }

    case TYPES.DELETE_DATA:
      {
        let newData = state.db.filter((el: any) => el.id !== action.payload);
        return {
          ...state,
          db:newData
        }
      }
     

    case TYPES.NO_DATA:
      return crudInititalState;

    default:
      return state;
  }
}
