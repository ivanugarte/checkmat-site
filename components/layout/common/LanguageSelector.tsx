import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'
import { Formik, Form } from 'formik'

import { SimpleSelectSmall } from './FormFields'

const languages = [
  {
    id: 1,
    value: 1,
    code: 'en',
    label: 'en',
    name: 'English',
    default: true,
  },
  {
    id: 2,
    value: 2,
    code: 'es',
    label: 'es',
    name: 'Español',
    default: false,
  },
]

export const LanguageSelector = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {languages &&
            languages.find((lng) => lng.code === router.locale)?.name}
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-12 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {languages &&
              languages
                .filter((lng) => lng.code !== router.locale)
                .map((language) => (
                  <Menu.Item key={language.code}>
                    <Link href={''} locale={language.code} scroll={false}>
                      <a
                        className={
                          'block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                        }
                      >
                        {language.name}
                      </a>
                    </Link>
                  </Menu.Item>
                ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const LanguageSelectorFooter = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const initialValues = {
    locale: router.locale,
  }
  const onSubmit = async (values: any) => {
    router.push('', '', { locale: values.locale, scroll: false })
  }

  return (
    <>
      <div className="mt-12 xl:mt-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          {t('Language')}
        </h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange, submitForm }) => (
            <Form className="mt-4 sm:max-w-xs">
              <label htmlFor="language" className="sr-only">
                {t('Language')}
              </label>
              <SimpleSelectSmall
                name={`locale`}
                label={''}
                options={
                  languages &&
                  languages.map((lng) => ({
                    value: lng.code,
                    label: lng.name,
                  }))
                }
                onChange={(e: any) => {
                  handleChange(e)
                  submitForm()
                }}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}
