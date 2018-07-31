/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 16:38
 */

// Photos
import photo1 from '../../../theme/assets/photos/1.jpeg';
import photo2 from '../../../theme/assets/photos/2.jpeg';
import photo3 from '../../../theme/assets/photos/3.jpeg';
import photo4 from '../../../theme/assets/photos/4.jpeg';

// Types
import { SHOW_NEXT_PHOTO } from './type';

const initialState = {
    photos: [
        { id: '1', url: photo1 },
        { id: '2', url: photo2 },
        { id: '3', url: photo3 },
        { id: '4', url: photo4 }
    ],
    selectedPhotoIndex: 0,
};

export const gallaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_PHOTO:
            if (state.selectedPhotoIndex === state.photos.length -1) {
                return state;
            }

            return {
                ...state,
                selectedPhotoIndex: state.selectedPhotoIndex+1,
            };
        default:
            return state;
    }

};
