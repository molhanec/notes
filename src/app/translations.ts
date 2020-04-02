import { useSelector } from "react-redux"
import { RootState } from "./store"

export type LanguageCodes = "cz" | "en"
export const defaultLanguage = "cz"

interface Phrases {
  appTitle: string
  noteLoadFailure: string
  notesLoadFailure: string

  noteCreateSuccess: string
  noteCreateFailure: string
  noteUpdateSuccess: string
  noteUpdateFailure: string
  noteDeleteSuccess: string
  noteDeleteFailure: string

  formTitle: string
  formSave: string
  formDelete: string

  editFormHeader: string
  newFormHeader: string
}

export type PhraseKeys = keyof Phrases

const enPhrases: Phrases = {
  appTitle: "Notes",
  noteLoadFailure: "Cannot load note",
  notesLoadFailure: "Cannot load notes",

  noteCreateSuccess: "New note added",
  noteCreateFailure: "Cannot add new note",
  noteUpdateSuccess: "Note updated",
  noteUpdateFailure: "Cannot update note",
  noteDeleteSuccess: "Note deleted",
  noteDeleteFailure: "Cannot delete note",

  formTitle: "Title",
  formSave: "Save",
  formDelete: "Delete",

  editFormHeader: "Note details",
  newFormHeader: "Create new note",
}

const czPhrases: Phrases = {
  appTitle: "Poznámky",
  noteLoadFailure: "Nelze načíst poznámku",
  notesLoadFailure: "Nelze načíst poznámky",

  noteCreateSuccess: "Přidána poznámka",
  noteCreateFailure: "Nelze přidat poznámku",
  noteUpdateSuccess: "Poznámka upravena",
  noteUpdateFailure: "Nelze upravit poznámku",
  noteDeleteSuccess: "Poznámka smazána",
  noteDeleteFailure: "Nelze smazat poznámku",

  formTitle: "Nadpis",
  formSave: "Uložit",
  formDelete: "Smazat",

  editFormHeader: "Detaily poznámky",
  newFormHeader: "Vytvořit novou poznámku",
}

export const getPhrase = (language: "cz" | "en", key: PhraseKeys): string => {
  switch (language) {
    case "cz":
      return czPhrases[key]
    case "en":
      return enPhrases[key]
  }
}

export const useTranslate = () => {
  const language = useSelector((state: RootState) => state.language.code)
  return (key: PhraseKeys) => getPhrase(language, key)
}
