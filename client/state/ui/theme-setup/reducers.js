/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import {
	THEME_SETUP_CLOSE_DIALOG,
	THEME_SETUP_OPEN_DIALOG,
	THEME_SETUP_REQUEST,
	THEME_SETUP_RESULT,
} from 'state/action-types';

const initialState = {
	active: false,
	isDialogVisible: false,
	saveExisting: true,
	result: false,
};

export const themeSetup = ( state = initialState, action ) => {
	switch ( action.type ) {
		case THEME_SETUP_RESULT:
			return { ...state, active: false, result: action.data };
		case THEME_SETUP_REQUEST:
			return { ...state, active: true, result: false };
		case THEME_SETUP_OPEN_DIALOG:
			return { ...state, isDialogVisible: true, saveExisting: action.saveExisting };
		case THEME_SETUP_CLOSE_DIALOG:
			return { ...state, isDialogVisible: false, result: false };
	}

	return state;
};

export default themeSetup;

