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
import { FormControl } from '@/components/ui/form'
import useCategory from '@/store/useCategory'
import { cn } from '@/lib/utils'

//FIXME type hook forma gore ayarlancak
interface ICategorySelectProps {
  setValue: any
  value: number | string | undefined
}
export const CategorySelect: React.FC<ICategorySelectProps> = ({ setValue, value }) => {
  const [open, setOpen] = React.useState(false)

  const categories = useCategory(s => s.categories)
  const categoriesOptions = React.useMemo(
    () =>
      categories.map(c => {
        return {
          value: String(c.id),
          label: c.name,
        }
      }),
    [categories],
  )

  const btnLabel = value ? categoriesOptions.find(c => c.value === value)?.label : 'Category'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {btnLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categoriesOptions.map(c => (
              <CommandItem
                value={c.value}
                key={c.value}
                onSelect={currentValue => {
                  setValue('category', currentValue === value ? '' : currentValue)
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
