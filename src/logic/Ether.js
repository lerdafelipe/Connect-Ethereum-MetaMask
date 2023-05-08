export const Connect = async () => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  } else alert("Need to install MetaMask");
};
