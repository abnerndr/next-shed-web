function applyCreditCardMask(value: string | undefined): string {
    if (!value) return '';
    
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{4})(\d)/, '$1-$2');
    value = value.replace(/^(\d{4})-(\d{4})(\d)/, '$1-$2-$3');
    value = value.replace(/^(\d{4})-(\d{4})-(\d{4})(\d)/, '$1-$2-$3-$4');

    return value;
}

export { applyCreditCardMask }