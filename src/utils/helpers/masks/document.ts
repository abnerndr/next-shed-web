const applyCnpjMask = (value: string): string => {
    value = value?.replace(/\D/g, ''); // remove caracteres não numéricos
    value = value?.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value?.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value?.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value?.replace(/(\d{4})(\d)/, '0001-$2');
    return value;
};

function applyCpfMask(value: string): string {
    value = value?.replace(/\D/g, ''); // remove caracteres não numéricos
    value = value?.replace(/^(\d{3})(\d)/, '$1.$2');
    value = value?.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value?.replace(/\.(\d{3})(\d)/, '.$1-$2');
    return value;
}

export { applyCnpjMask, applyCpfMask }