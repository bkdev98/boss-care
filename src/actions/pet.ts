export const ADD_PET = 'ADD_PET';
export function addPet(payload: any) {
  return {
    type: ADD_PET,
    payload,
  };
}
