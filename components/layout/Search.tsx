'use client'

import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { CategorySelect } from '../shared/CategorySelect'
import { CalendarDateRangePicker } from '../shared/DateRangePicker'
import { Button } from '../ui/button'
import { CountrySelect } from '../shared/CountrySelect'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addDays, format } from 'date-fns'
import qs from 'query-string'

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { SearchFormSchema, SearchFormValues } from '@/lib/schema/search'

const Search = () => {
  const params = useSearchParams()
  const router = useRouter()

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      date: { from: new Date(), to: addDays(new Date(), 5) },
    },
  })

  const onSubmit = useCallback(
    (data: SearchFormValues) => {
      let currentQuery = {}
      //FIXME date format func kullanılarak uygun formatta gonderrilicek
      if (data) {
        currentQuery = {
          ...currentQuery,
          category: data.category,
          country: data.country,
          startDate: data.date?.from,
          endDate: data.date?.to,
        }
      }

      const url = qs.stringifyUrl(
        {
          url: '/search',
          query: currentQuery,
        },
        { skipNull: true },
      )
      router.push(url)
    },
    [router],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
        hidden 
        w-full 
        cursor-pointer 
        rounded-full 
        border-[1px] 
        py-2 
        shadow-sm 
        transition 
        hover:shadow-md
          md:block 
          md:w-auto
      "
      >
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
        >
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem
                className="flex  flex-col 
            px-6 text-sm"
              >
                <CountrySelect value={form.getValues().country} setValue={form.setValue} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div
            className="
            hidden 
            flex-1 
            border-x-[1px] 
            px-6 
            text-center 
            text-sm 
            font-semibold 
            sm:block
          "
          >
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex  flex-col text-sm">
                  <CategorySelect value={form.getValues().category} setValue={form.setValue} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div
            className="
            flex 
            flex-row 
            items-center 
            gap-3 
            pl-6 
            pr-2 
            text-sm 
            text-gray-600
          "
          >
            <div className="hidden sm:block">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex  flex-col text-sm">
                    <CalendarDateRangePicker setValue={form.setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="rounded-full" variant="primary" size="icon">
              <SearchIcon size={18} />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default Search
