export const formatCompactNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 2,
    }).format(value);
};