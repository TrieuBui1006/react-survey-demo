import * as actionTypes from './actionsTypes';
import {InitQuestions} from '../../ulitity/constants/Questions';

export const addQuestion = (questionType) => {
    let newQuestion = InitQuestions[questionType]();
    return {
        type: actionTypes.ADD_QUESTION,
        payload: newQuestion,
        questionId: newQuestion._id
    }
}       