export async function fetchCovalentData(walletAddress) {
  const chainName = 'fantom-mainnet';
  const apiKey = process.env.API_KEY;
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${apiKey}`);

  const url = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/`;

  try {
    const response = await fetch(url, { method: 'GET', headers });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching Covalent data:', error);
  }
}
