export const alignBasedFlex = (align) => {
    if (align === 'right') {
        return 'align-self-right';
    } else if (align === 'left') {
        return 'align-self-left';
    } else if (align === 'center') {
        return 'align-self-center';
    } else {
        return 'align-self-right';
    }
};

export const alignBasedPositions = (align) => {
    if (align === 'right') {
        return 'align-right';
    } else if (align === 'left') {
        return 'align-left';
    } else if (align === 'center') {
        return 'align-center';
    } else {
        return 'align-right';
    }
};