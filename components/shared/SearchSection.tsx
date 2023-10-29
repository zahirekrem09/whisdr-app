'use client'
import { SearchIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addDays } from 'date-fns'
import { useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { SearchFormSchema, SearchFormValues } from '@/lib/schema/search'

import { CountrySelect } from './CountrySelect'
import { CategorySelect } from './CategorySelect'

import { DatePicker } from '@/components/ui/date-picker'
import { Checkbox } from '@/components/ui/checkbox'

type ICardProps = React.ComponentProps<typeof Card>

export function SearchSection({
  className,
  hallmarks,
  ...props
}: ICardProps & { hallmarks: ISelect[] }) {
  const params = useSearchParams()
  const router = useRouter()

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      date: { from: new Date(), to: addDays(new Date(), 5) },
      hallmarks: [],
    },
  })
  const onSubmit = useCallback(
    (data: SearchFormValues) => {
      let currentQuery = {}

      if (data) {
        currentQuery = {
          ...currentQuery,
          category: data.category,
          country: data.country,
          startDate: data.date?.from,
          endDate: data.date?.to,
          hallmarks: data.hallmarks?.join(','),
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
    <Card className={cn('  max-h-fit w-full ', className)} {...props}>
      <CardHeader>
        <CardTitle>Filter Clinics</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full  py-2 md:w-auto
      "
          >
            <div
              className="flex w-full flex-col justify-between gap-4
        "
            >
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex flex-col  text-sm">
                    <FormLabel>Country</FormLabel>
                    <CountrySelect value={form.getValues().country} setValue={form.setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex  flex-col text-sm">
                    <FormLabel>Category</FormLabel>
                    <CategorySelect value={form.getValues().category} setValue={form.setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date.from"
                render={({ field }) => (
                  <FormItem className="flex  flex-col text-sm">
                    <FormLabel>Start Date</FormLabel>
                    <DatePicker name="date.from" setValue={form.setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date.to"
                render={({ field }) => (
                  <FormItem className="flex  flex-col text-sm">
                    <FormLabel>End Date</FormLabel>
                    <DatePicker name="date.to" setValue={form.setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hallmarks"
                render={() => (
                  <FormItem>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Hallmarks</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2">
                            {hallmarks.map(item => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="hallmarks"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.name)}
                                          onCheckedChange={checked => {
                                            return checked
                                              ? field.onChange([
                                                  ...(field.value as string[]),
                                                  item.name,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(value => value !== item.name),
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="cursor-pointer font-normal">
                                        {item.name}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button onClick={form.handleSubmit(onSubmit)} type="button" className="w-full">
          <SearchIcon className="mr-2 h-4 w-4" /> Search
        </Button>
      </CardFooter>
    </Card>
  )
}
