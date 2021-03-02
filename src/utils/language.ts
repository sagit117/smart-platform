import { setDictionary } from "../dictionary/connect-dictionary"
import APP from "../configs/server-config"

const Lang = setDictionary(APP.LANG)
export const serverSuccessMessage = Lang.getServerSuccessMessage()
export const dataBaseSuccessMessage = Lang.getDataBaseSuccessMessage()
export const dataBaseErrorMessage = Lang.getDataBaseErrorMessage()
export const serverErrorMessage = Lang.getServerErrorMessage()
export const eventsName = Lang.getEventsName()
export const authErrorMessage = Lang.getAuthErrorMessage()
export const authSuccessMessage = Lang.getAuthSuccessMessage()
export const emailSubjects = Lang.getEmailSubjects()
export const emailTemplates = Lang.getEmailTemplates()
export const errorsMessage = Lang.getErrorMessage()
export const routeTitles = Lang.getRouteTitles()
