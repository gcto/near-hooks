import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/functions";

export const nearInit = (params: {}) => {
  void mutate("", getNear());
};
