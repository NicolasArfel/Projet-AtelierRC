export const AXIOS_FURNITURES = 'AXIOS_FURNITURES';
export const DISPATCH_FURNITURES = 'DISPATCH_FURNITURES';
export const AXIOS_FURNITURES_PICTURES = 'AXIOS_FURNITURES_PICTURES';
export const DISPATCH_FURNITURES_PICTURES = 'DISPATCH_FURNITURES_PICTURES';

export const actionAxiosFurnitures = () => ({
    type: AXIOS_FURNITURES
})



export const actionDispatchFurnitures = (furnitures) => ({
    type: DISPATCH_FURNITURES,
    payload: {
        furnitures
    }
})  

export const actionAxiosFurnituresPictures = (furniture_id) => ({
    type: AXIOS_FURNITURES_PICTURES,
    furniture_id
})


export const actionDispatchFurnituresPictures = (pictures) => ({
    type: DISPATCH_FURNITURES_PICTURES,
    payload: {
        pictures
    }
})  

