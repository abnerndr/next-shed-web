const formatCreditCardNumber = (value: string) => {
    value = value?.replace(/\D/g, '');
    value = value?.replace(/(\d{4})(\d)/g, '$1 $2');
    return value?.trim();
};

const formatExpiryDate = (value: string) => {
    value = value?.replace(/\D/g, '');
    if (value?.length > 2) {
        value = `${value?.slice(0, 2)}/${value?.slice(2)}`;
    }
    return value.trim();
};

const formatCVC = (value: string) => {
    value = value?.replace(/\D/g, '');
    return value?.trim();
};