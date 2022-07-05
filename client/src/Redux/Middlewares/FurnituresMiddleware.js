import { actionDispatchFurnitures, actionDispatchFurnituresPictures, AXIOS_FURNITURES, AXIOS_FURNITURES_PICTURES } from "../Actions/FurnituresActions";
import { getAllFurnitures, getAllFurnituresPictures } from "../Requests/FurnituresRequests";

const FurnituresMiddleware = (store) => (next) => async (action) => {

    switch (action.type) {
        case AXIOS_FURNITURES: 
        // console.log ('Je suis dans AXIOS_Furniture de Furnitures');
        try {
            const responseFurnitures = await getAllFurnitures();
            console.log('furnitures middleware response', responseFurnitures);
            store.dispatch(
                actionDispatchFurnitures(responseFurnitures.data)
            );
            
        } catch (err) {
            console.error(err);
        }
        break;
        case AXIOS_FURNITURES_PICTURES:
            console.log ('Je suis dans AXIOS PICTURES');
            try {
                const responseFurnituresPictures = await getAllFurnituresPictures(action.furniture_id)
                console.log('responseFurnituresPictures', responseFurnituresPictures)
                store.dispatch(
                    actionDispatchFurnituresPictures(responseFurnituresPictures))
            } catch (err) {
                console.error(err)
            }
        break;
        default:
            next(action);
    }
}

export default FurnituresMiddleware;