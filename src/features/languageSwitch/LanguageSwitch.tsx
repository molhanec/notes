import React from "react"
import { Form, ButtonGroup, Button } from "reactstrap"
import { RootState } from "../../app/store"
import { setLanguage } from "./languageSwitchSlice"
import { connect, ResolveThunks } from "react-redux"

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

export const LanguageSwitch: React.FC<Props> = ({
  language,
  setLanguage,
}: Props) => {
  return (
    <Form inline>
      <ButtonGroup>
        <Button active={language === "cz"} onClick={() => setLanguage("cz")}>
          Cz
        </Button>
        <Button active={language === "en"} onClick={() => setLanguage("en")}>
          En
        </Button>
      </ButtonGroup>
    </Form>
  )
}

const mapStateToProps = (state: RootState) => ({
  language: state.language.code,
})

const mapDispatchToProps = {
  setLanguage,
}

const ConnectedLanguageSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch)

export default ConnectedLanguageSwitch
