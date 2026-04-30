'use client'

import React, { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import Button from '@/components/ui/Button'
import {
  FormWrap,
  Field,
  Input,
  Select,
  TextArea,
  ErrorText,
  Actions,
  StatusMessage,
} from './style.js'

const initial = {
  name: '',
  phone: '',
  email: '',
  childAge: '',
  program: '',
  message: '',
}

const phoneRegex = /^[0-9+\-\s()]{6,}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values, t) {
  const errors = {}
  if (!values.name.trim()) errors.name = t('errors.name')
  if (!phoneRegex.test(values.phone)) errors.phone = t('errors.phone')
  if (!emailRegex.test(values.email)) errors.email = t('errors.email')
  const age = Number(values.childAge)
  if (!age || age < 3 || age > 16) errors.childAge = t('errors.age')
  if (!values.program) errors.program = t('errors.program')
  if (values.message.trim().length < 5) errors.message = t('errors.message')
  return errors
}

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const tPrograms = useTranslations('programs.list')
  const programs = ['gymnastics', 'development', 'english', 'theatre', 'schoolPrep', 'robotics']

  const [values, setValues] = useState(initial)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle' })
  const statusRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(values, t)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fieldErrors = validate(values, t)
    setErrors(fieldErrors)
    setTouched(Object.keys(initial).reduce((acc, k) => ({ ...acc, [k]: true }), {}))
    if (Object.values(fieldErrors).some(Boolean)) return

    setStatus({ state: 'loading' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) {
        if (data.errors) setErrors(data.errors)
        setStatus({ state: 'error' })
        return
      }
      setStatus({ state: 'success' })
      setValues(initial)
      setTouched({})
      if (statusRef.current) {
        gsap.fromTo(
          statusRef.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        )
      }
    } catch (err) {
      setStatus({ state: 'error' })
    }
  }

  const showError = (name) => touched[name] && errors[name]

  return (
    <FormWrap onSubmit={handleSubmit} noValidate>
      <Field $full>
        {t('fullName')}
        <Input
          type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('name'))}
        />
        {showError('name') && <ErrorText>{errors.name}</ErrorText>}
      </Field>

      <Field>
        {t('phone')}
        <Input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('phone'))}
        />
        {showError('phone') && <ErrorText>{errors.phone}</ErrorText>}
      </Field>

      <Field>
        {t('email')}
        <Input
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('email'))}
        />
        {showError('email') && <ErrorText>{errors.email}</ErrorText>}
      </Field>

      <Field>
        {t('childAge')}
        <Input
          type="number"
          name="childAge"
          min="3"
          max="16"
          value={values.childAge}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('childAge'))}
        />
        {showError('childAge') && <ErrorText>{errors.childAge}</ErrorText>}
      </Field>

      <Field>
        {t('program')}
        <Select
          name="program"
          value={values.program}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('program'))}
        >
          <option value="">{t('programPlaceholder')}</option>
          {programs.map((key) => (
            <option key={key} value={key}>
              {tPrograms(`${key}.title`)}
            </option>
          ))}
        </Select>
        {showError('program') && <ErrorText>{errors.program}</ErrorText>}
      </Field>

      <Field $full>
        {t('message')}
        <TextArea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError('message'))}
        />
        {showError('message') && <ErrorText>{errors.message}</ErrorText>}
      </Field>

      <Actions>
        <Button type="submit" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? t('submitting') : t('submit')}
        </Button>
      </Actions>

      {status.state === 'success' && (
        <StatusMessage ref={statusRef} $variant="success" role="status">
          <strong>{t('successTitle')}</strong> · {t('successText')}
        </StatusMessage>
      )}
      {status.state === 'error' && (
        <StatusMessage $variant="error" role="alert">
          <strong>{t('errorTitle')}</strong> · {t('errorText')}
        </StatusMessage>
      )}
    </FormWrap>
  )
}
