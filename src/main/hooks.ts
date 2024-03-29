import { ContractMethods } from "near-api-js/lib/contract";
import { getContract, getCurrentUser, getNear } from "./services";
import { useFirebaseUser } from "@gcto/firebase-hooks";
import { useSWRV } from "@gcto/swrv-hooks";
import { ContractId } from "./interfaces";

export function useNear() {
  // create a keyStore for signing transactions using the user's key
  // which is located in the browser local storage after user logs in
  return useSWRV("", getNear);
}

export function useNearContract(
  contractId: ContractId = "",
  methods: ContractMethods = {
    // View methods are read-only – they don't modify the state, but usually return some value
    viewMethods: ["getMessages"],
    // Change methods can modify the state, but you don't receive the returned value when called
    changeMethods: ["addMessage", "createEvent"],
  }
) {
  const near = useNear();
  return useSWRV(
    () =>
      near.data.value
        ? [near.data.value.near, near.data.value.wallet, contractId, methods]
        : undefined,
    getContract
  );
}

// const {data:t} = useNearContract()
// t.value.signIn

export function useCurrentUser() {
  const near = useNear();
  const firebaseUser = useFirebaseUser();

  return useSWRV(
    () =>
      near.data.value
        ? [
            near.data.value.near,
            near.data.value.wallet,
            near.data.value.keyStore,
            firebaseUser.data.value,
          ]
        : undefined,
    getCurrentUser
  );
}
