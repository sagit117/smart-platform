// языковой пакет
import {getDictionary} from "../dictionary/connect-dictionary";

const lang = getDictionary()
export const labelsMessage = lang.getLabels()
export const validateErrorMessages = lang.getErrorValidateMessages()
export const serverTitlesMessages = lang.getTitilesServerMessages()
export const errorMessages = lang.getErrorMessages()
export const successMessages = lang.getSuccessMessages()
