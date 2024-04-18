import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import DatePicker from '../date/DatePicker'

const FormTrip = () => {
  return (
    <form className="border-brand bg-brand relative mx-auto mb-32 flex w-full flex-col gap-1 rounded-3xl border-4 md:w-[80%] lg:w-fit lg:flex-row ">
      <label
        htmlFor="destiny"
        className="flex select-none items-center gap-3 overflow-hidden rounded-t-3xl border-transparent bg-white px-3 focus-within:border-white lg:rounded-l-3xl lg:rounded-tr-none"
      >
        <span className="bg-brand icon-[solar--map-point-bold] h-8 w-8" />
        <Select
          defaultValue="cartagena"
          className="select-none border-0 border-none outline-none"
        >
          <SelectTrigger className="w-full rounded-none border-transparent px-0 outline-none selection:outline-none font-bold">
            <SelectValue placeholder="Destino" />
          </SelectTrigger>
          <SelectContent className="outline-none font-bold">
            <SelectItem value="cartagena" className="outline-none font-bold">
              Cartagena
            </SelectItem>
          </SelectContent>
        </Select>
      </label>
      <label
        htmlFor="date_trip"
        className="flex items-center gap-3 bg-white px-3 font-bold"
      >
        <span className="bg-brand icon-[material-symbols--calendar-today] h-8 w-8 font-bold" />
        <DatePicker />
      </label>

      <div className="flex items-center gap-3 bg-white px-3">
        <span className="bg-brand icon-[material-symbols--person-2-rounded] h-8 w-8" />
        <label htmlFor="adults">
          <input
            type="number"
            name="adults"
            max={30}
            min={1}
            defaultValue={1}
            id="adults"
            className="h-full w-9 border-transparent bg-white outline-none focus:outline-none"
          />
        </label>
        <span className="font-bold">Adultos</span>
        <label htmlFor="kids" className="ml-3">
          <input
            type="number"
            name="kids"
            max={30}
            min={0}
            defaultValue={0}
            id="kids"
            className="h-full w-9 border-transparent bg-white outline-none focus:outline-none"
          />
          <span className="font-bold">Niños</span>
        </label>
      </div>

      <label
        htmlFor="rooms"
        className="flex items-center gap-3 rounded-b-3xl bg-white px-3 lg:rounded-r-3xl lg:rounded-bl-none"
      >
        <span className="bg-brand icon-[cbi--roomsother] h-8 w-8" />
        <input
          type="number"
          name="rooms"
          max={30}
          min={1}
          defaultValue={1}
          id="rooms"
          className="h-full w-9 border-transparent bg-white outline-none focus:outline-none"
        />
        <span className="font-bold">Habitaciones</span>
      </label>

      <label htmlFor="description" className="absolute -bottom-32 h-28 w-full">
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder='Ej: "Tengo veinti y tantos años, me gusta la playa, la comida de mar..."'
          className="border-brand h-full w-full resize-none rounded-lg border-4 p-2 outline-none"
        />
      </label>

      <button
        type="submit"
        className="hover:bg-brand-light items-center justify-center self-center px-6 font-bold text-white"
      >
        Buscar
      </button>
    </form>
  )
}

export default FormTrip
