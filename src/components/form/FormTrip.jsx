'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import DatePicker from '../date/DatePicker'
import { login } from '@/api/login'

const FormTrip = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const description = formData.get('description')
    const maxBudget = formData.get('maxBudget')
    const destiny = formData.get('destiny')

    console.log('1 ->>', description)
    console.log('2 ->>', maxBudget)
    console.log('3 ->>', destiny)
    const data = await login({
      email: 'test_@email.com',
      password: '123'
    })

    console.log(await data)

    console.log('hola:w   ')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto mb-32 flex w-full flex-col gap-1 rounded-2xl border-4 border-brand bg-brand md:w-[80%] lg:w-fit lg:flex-row lg:rounded-3xl "
    >
      <div className="flex items-center justify-center gap-3 rounded-t-2xl bg-white px-1 lg:rounded-none lg:rounded-l-3xl">
        <span className="icon-[solar--map-point-bold] h-7 w-7 bg-brand" />
        <label htmlFor="destiny">
          <Select
            defaultValue="cartagena"
            name="destiny"
            className="select-none border-0 border-none outline-none"
          >
            <SelectTrigger className="w-full rounded-none border-transparent px-0 font-bold outline-none selection:outline-none">
              <SelectValue placeholder="Destino" />
            </SelectTrigger>
            <SelectContent className="font-bold outline-none">
              <SelectItem value="Cartagena" className="font-bold">
                Cartagena
              </SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="flex items-center justify-center gap-3 bg-white px-1">
        <span className="icon-[material-symbols--calendar-today] h-7 w-7 bg-brand" />
        <label htmlFor="date_trip">
          <DatePicker />
        </label>
      </div>

      <div className="flex items-center justify-center gap-3 bg-white px-1">
        <span className="icon-[material-symbols--person-2-rounded] h-7 w-7 bg-brand" />
        <label htmlFor="maxBudget">
          <span>$ </span>
          <input
            type="number"
            name="maxBudget"
            max={99_999_999}
            min={500_000}
            defaultValue={500_000}
            id="maxBudget"
            className="w-28 border-transparent bg-white outline-none focus:outline-none"
          />
          <span className="font-bold">Presupuesto</span>
        </label>
      </div>

      <div className="flex items-center justify-center gap-3 rounded-b-2xl bg-white pl-1 pr-2 lg:rounded-none lg:rounded-r-3xl">
        <span className="icon-[cbi--roomsother] h-7 w-7 bg-brand" />
        <label htmlFor="rooms">
          <span>1 </span>
          <span className="font-bold">Habitaciones</span>
        </label>
      </div>
      <button
        type="submit"
        className="items-center justify-center self-center px-3 font-bold text-white hover:bg-brand-light"
      >
        Buscar
      </button>
      <label htmlFor="description" className="absolute -bottom-32 h-28 w-full">
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder='Ej: "Tengo veinti y tantos años, me gusta la playa, la comida de mar..."'
          className="h-full w-full resize-none rounded-lg border-4 border-brand p-2"
        />
      </label>
    </form>
  )
}

export default FormTrip
