import React, { FormEvent, useState, ChangeEvent } from "react"
import { useTranslate } from "../../app/translations"
import {
  Form,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap"

type Props = {
  formHeader: string
  initialTitle?: string
  disabled?: boolean
  onSubmit: (title: string) => void
  onDelete?: () => void
}

export const NoteForm = ({
  formHeader,
  initialTitle = "",
  disabled = false,
  onSubmit,
  onDelete,
}: Props) => {
  const [title, setTitle] = useState<string>(initialTitle)
  const t = useTranslate()

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    onSubmit(title.trim())
  }

  return (
    <Card>
      <CardHeader>{formHeader}</CardHeader>
      <CardBody>
        <Form onSubmit={submit}>
          <Label htmlFor="title">{t("formTitle")}</Label>
          <Input
            id="title"
            value={title}
            onChange={titleChange}
            disabled={disabled}
            autoFocus
          />
          <Button
            disabled={disabled || !title.trim()}
            className="mt-3"
            color="primary"
          >
            {t("formSave")}
          </Button>
          {onDelete && (
            <Button
              color="danger"
              onClick={onDelete}
              disabled={disabled}
              className="mt-3 ml-1"
            >
              {t("formDelete")}
            </Button>
          )}
        </Form>
      </CardBody>
    </Card>
  )
}
