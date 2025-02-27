import React from "react";
import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas";
import {Error404} from "./Error404";
import {pumaArr, PumaItem} from "./Puma";

type ShoesModelsType = {
    [key: string]: AdidasItem[] | PumaItem[]
}

const shoesModels: ShoesModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {

    const {model, id} = useParams()

    // приходится делать такую хардкодную проверку иначе при рандомном имени модели '...абракадабра' будет падать ошибка :(

    const currentModel = (model === 'adidas' || model === 'puma') && shoesModels[model].find(el => el.id === Number(id))


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: 'center', gap: '20px'}}>
            {currentModel ?
                <>
                    <span>{currentModel.model}</span>
                    <span>{currentModel.collection}</span>
                    <span>{currentModel.price}</span>
                    <img style={{width: '500px', marginBottom: '20px'}} src={currentModel.picture}
                         alt={currentModel.model}/>
                </>
                : <h2>This model is empty</h2>
            }

        </div>
    )
};