import { createContext, useContext, useEffect, useState } from "react";
import { HttpAgent } from "@dfinity/agent";

import internetIdentity from "./wallet/ii";

import ICPunk from "./canister/icpunks_type";
import { idlFactory as icpunks_idl } from "./canister/icpunks";

import Claim from "./canister/icpunks_claim_type";
import { idlFactory as claim_idl } from "./canister/icpunks_claim";

import { getCanisterIds } from "./canister/principals";

import plugWallet, { WalletInterface } from "./wallet/plug";
import { Principal } from "@dfinity/principal";


// export interface AuthContext {
//   isShow: boolean;
//   showModal: (show: boolean) => void;

//   wallet?: WalletInterface;
//   principal?: Principal;
//   agent?: HttpAgent;

//   balance: bigint | null;

//   icpunk?: ICPunk;
//   claim?: Claim;

//   usePlug: () => void;
//   useInternetIdentity: () => void;

//   setPrincipal: (principal: Principal | undefined) => void;
//   setAgent: (agent: HttpAgent | undefined) => void;

//   setBalance: (data: bigint | null) => void;
// }

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [wallet, setWallet] = useState(undefined);


  const [principal, setPrincipal] = useState(undefined);
  const [agent, setAgent] = useState(undefined);
  const [icpunk, setICPunk] = useState(undefined);
  const [claim, setClaim] = useState(undefined);

  const [display, setDisplay] = useState(false);

  const [balance, setBalance] = useState(null);

  const usePlug = function () {
    const wlt = plugWallet();
    setWallet(wlt);
    setDisplay(false);
  }

  const useInternetIdentity = function () {
    const wlt = internetIdentity();
    setWallet(wlt);
    setDisplay(false);

    
  }

  //Displays modal to select wallet
  const showModal = function (show) {
    setDisplay(show);
  }
  
  //Generate actors when principal is ready
  useEffect(() => {
    if (wallet === undefined) return;
    if (principal === undefined) return;

    const fetchData = async () => {
      let principals = getCanisterIds();

      const icpunkActor = await wallet.getActor<ICPunk>(principals.icpunks, icpunks_idl);
      setICPunk(icpunkActor);

      const claimActor = await wallet.getActor<Claim>(principals.claim, claim_idl);
      setClaim(claimActor);
    }

    fetchData();
  }, [principal])

  function get() {
    return {
      showModal,
      isShow: display,
      setPrincipal,
      principal: principal,
      setAgent,

      agent: agent,
      balance,
      
      wallet,
      icpunk,
      claim,

      usePlug,
      useInternetIdentity,
      setBalance,
    };
  }

  return get();
}

const authContext = createContext(null);
export let auth;


export function ProvideAuth({ children }) {
  auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
