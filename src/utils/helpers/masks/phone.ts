const formatPhone = (value: string) => {
    value = value?.replace(/\D/g, '');
    value = value?.replace(/(\d{2})(\d)/, '($1) $2');
    value = value?.replace(/(\d)(\d{4})$/, '$1 $2');
    value = value?.replace(/(\d{4})(\d)/, '$1-$2');
    return value;
};

const formatAllPhone = (value: string) => {
    value = value?.replace(/\D/g, '');
    const isCellphone = value?.length === 11;
    if (isCellphone) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{1})(\d{4})/, '$1 $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        value = value?.replace(/(\d{2})(\d)/, '($1) $2');
        value = value?.replace(/(\d{4})(\d)/, '$1-$2');
    }
    return value;
};

export { formatPhone, formatAllPhone }