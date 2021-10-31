export const CalculateSum = (coinsList) =>
{
    let sum = 0;
    coinsList.forEach(coin => {
        sum = sum + coin.value*coin.amount;
    });
    return sum;
}