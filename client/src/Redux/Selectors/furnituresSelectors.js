export function findFurniture(FurnituresReducer, searchedSlug) {
    const furniture = FurnituresReducer.find((findedFurniture) => {
        return findedFurniture.slug === searchedSlug;
    })
    return furniture;
}