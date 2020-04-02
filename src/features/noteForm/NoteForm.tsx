import React, { FormEvent, useState, ChangeEvent } from "react"
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
  onSubmit: (title: string) => string
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

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    setTitle(onSubmit(title.trim()))
  }

  return (
    <Card>
      <CardHeader>{formHeader}</CardHeader>
      <CardBody>
        <Form onSubmit={submit}>
          <Label htmlFor="title">Title </Label>
          <Input
            id="title"
            value={title}
            onChange={titleChange}
            disabled={disabled}
          />
          <Button disabled={disabled || !title.trim()} className="mt-3">
            Save
          </Button>
          {onDelete && (
            <Button
              color="danger"
              onClick={onDelete}
              disabled={disabled}
              className="mt-3"
            >
              Delete
            </Button>
          )}
        </Form>
      </CardBody>
    </Card>
  )
}
