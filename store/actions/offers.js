export const addHiddenOffer = (offerName) => {
    return async dispatch => {
        dispatch({ type: 'HIDEOFFER', offerName: offerName }
        );
    };
}

export const unhideAllOffers = () => {
    return async dispatch => {
        dispatch({ type: 'UNHIDEALL' })
    }
}

export const unhideOffer = (offerName) => {
    return async dispatch => {
        dispatch({ type: 'UNHIDE', offerName: offerName })
    }
}