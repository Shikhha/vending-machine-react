export const calculateNoOfItems = (list) =>
{
    if(!list) return 0;
    let sum = 0;
    list.forEach(item => {
        sum = sum + item.chosen;
    });
    return sum;
}

export const findIndex = (list, id) =>
{
    if(!list) return -1;
    return list.findIndex((item)=>item.id == id);

}