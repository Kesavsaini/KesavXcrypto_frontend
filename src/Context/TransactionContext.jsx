import React,{useEffect,useState} from 'react';
import {ethers} from 'ethers';
import { contractABI,contractAdress } from '../utils/constant';
export const TransictionContext= React.createContext();
const {ethereum}=window;
const getEthereumContract=()=>{
    const provider=new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const transictionContract=new ethers.Contract(contractAdress,contractABI,signer);
    return transictionContract;
}
export const TransictionProvider=({children})=>{
    const [currentAccount,setCurrentAccount]=useState("");
    const [formData,setFormData]=useState({adressTo:'',amount:'',keyword:'',message:''});
    const [isloading,setIsloadning]=useState(false);
    const [transictioncount,setTransictioncount]=useState(localStorage.getItem('transictioncount'));
    const handleChange=(e,name)=>{
        setFormData((pre)=>({...pre,[name]:e.target.value}));
    }
    const checkIfWalletConnected=async()=>{
        try{if(!ethereum) return alert("Pleas install metamask");
        const account=ethereum.request({method:"eth_accounts"});
        if(account.length){
            setCurrentAccount(account[0]);
        }else console.log("No account found")}
        catch(error){
            console.log(error);
            throw new Error("No etherum object");
        }
    }
    const connectWallet= async()=>{
          try {
            if(!ethereum) return alert("Pleas install metamask");
            const account=await ethereum.request({method:"eth_requestAccounts"});
            setCurrentAccount(account[0]);
          } catch (error) {
            console.log(error);
            throw new Error("No etherum object");
          }
    }
    const sendTransiction=async()=>{
        try{
            if(!ethereum) return alert("Pleas install metamask");
            const {adressTo,amount,keyword,message}=formData;
            const parsedAmount=ethers.utils.parseEther(amount);
            const transictionContract=getEthereumContract();
            await ethereum.request({
                method:"eth_sendTransaction",
                params:[
                    {
                        from:currentAccount,
                        to:adressTo,
                        gas:'0x5208',
                        value:parsedAmount._hex,
                    }
                ]
            });
            const transictionHash=await transictionContract.addToBlockchain(adressTo,parsedAmount,message,keyword);
            setIsloadning(true);
            console.log(`Loading - ${transictionHash.hash}`);
            setIsloadning(false);
            console.log(`Sucsess - ${transictionHash.hash}`);
            const transictionCount=await transictionContract.getTransictionCount();
            setTransictioncount(transictionCount.toNumber());
        }
        catch(error){
            console.log(error);
            throw new Error("No etherum object");
        }
    }
    useEffect(()=>{
        checkIfWalletConnected();
    },[])
    return(
        <TransictionContext.Provider value={{connectWallet,currentAccount,formData,sendTransiction,handleChange}}>
          {children}
        </TransictionContext.Provider>
    )
}