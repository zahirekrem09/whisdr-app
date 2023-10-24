'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import useCountry from '@/store/useCountry'
import { cn } from '@/lib/utils'

interface ICountrySelectProps {
  setValue: any
  value: number | string | undefined
}
export const CountrySelect: React.FC<ICountrySelectProps> = ({ setValue, value }) => {
  const [open, setOpen] = React.useState(false)

  const countries = useCountry(s => s.countries)
  const countriesOptions = React.useMemo(
    () =>
      countries.map(c => {
        return {
          value: String(c.id),
          label: c.name,
        }
      }),
    [countries],
  )

  const btnLabel = value ? countriesOptions.find(c => c.value == value)?.label : 'Country'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {btnLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Country..." />
          <CommandEmpty>No Country found.</CommandEmpty>
          <CommandGroup>
            {countriesOptions.map(c => (
              <CommandItem
                value={c.value}
                key={c.value}
                onSelect={currentValue => {
                  setValue('country', currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn('mr-2 h-4 w-4', value === c.value ? 'opacity-100' : 'opacity-0')}
                />
                {c.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
