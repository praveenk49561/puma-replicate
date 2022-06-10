export const generateHeading = (heading) => {
    if (heading) {
        return heading.split('-s-');
    }
    return null;
}


export const generateBold = (heading) => {
    let returnHeading = [];
    if (heading) {
        returnHeading = heading?.split(' ');
        for (let i = 0; i < returnHeading.length; i++) {
            if (returnHeading[i]?.includes('-b-')) {
                const nStr = returnHeading[i]?.replaceAll('-b-', '');
                returnHeading[i] = <b key={nStr+i}>{`${nStr} `}</b>;
            } else {
                returnHeading[i] = `${returnHeading[i]} `;
            }
        }

        return returnHeading;
    }

    return null;
}