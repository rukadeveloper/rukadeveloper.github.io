import { create } from "zustand";

const useReservation = create((set) => ({
  reservationData: {
    peopleNumber: {
      adult: 0,
      student: 0,
      child: 0,
    },
  },
  setAdult: (state, adult) =>
    set({
      reservationData: {
        ...state.reservationData,
        peopleNumber: {
          adult,
          ...state.reservationData.peopleNumber,
        },
      },
    }),
  setStudent: (state, student) =>
    set({
      reservationData: {
        ...state.reservationData,
        peopleNumber: {
          student,
          ...state.reservationData.peopleNumber,
        },
      },
    }),
  setChild: (state, child) =>
    set({
      ...state.reservationData,
      reservationData: {
        ...state.reservationData,
        peopleNumber: {
          child,
          ...state.reservationData.peopleNumber,
        },
      },
    }),
}));

export default useReservation;
