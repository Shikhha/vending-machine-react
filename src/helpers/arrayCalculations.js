export const calculateNoOfItems = (list) =>
{
    let sum = 0;
    list.forEach(item => {
        sum = sum + 1;
    });
    return sum;
}