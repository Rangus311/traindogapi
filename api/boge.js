export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.mainnet-beta.solana.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getTokenSupply",
        params: ["2ZvFgTyLMrgyLmoPHtD5KsTyALh14ffzxJoni4oPpump"]
      })
    });

    const data = await response.json();
    const supply = parseFloat(data.result?.value?.uiAmountString || "0");

    res.status(200).json({
      circulatingSupply: supply
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
