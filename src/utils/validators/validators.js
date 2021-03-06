export const required = value => {
    if(value) return undefined;
    
    return 'Filed is required';

}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > 10) return `Max length is ${maxLength} symbols`;
    
    return undefined;

}