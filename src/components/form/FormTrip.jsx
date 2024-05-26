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
    <form className="grid justify-center w-full gap-3 ">
      <div className="flex w-full flex-col gap-1 rounded-2xl border-4 border-brand bg-brand lg:w-fit md:flex-row md:rounded-3xl ">
        <div className="flex items-center justify-center gap-3 rounded-t-2xl bg-white px-1 md:rounded-none md:rounded-l-3xl">
          <span className="icon-[solar--map-point-bold] h-7 w-7 bg-brand" />
          <label htmlFor="destiny">
            <Select
              defaultValue="cartagena"
              className="select-none border-0 border-none outline-none"
            >
              <SelectTrigger className="w-full rounded-none border-transparent px-0 font-bold outline-none selection:outline-none">
                <SelectValue placeholder="Destino" />
              </SelectTrigger>
              <SelectContent className="font-bold outline-none">
                <SelectItem value="cartagena" className="font-bold">
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
          <label htmlFor="adults">
            <input
              type="number"
              name="adults"
              max={30}
              min={1}
              defaultValue={1}
              id="adults"
              className="w-9 border-transparent bg-white outline-none focus:outline-none"
            />
            <span className="font-bold">Adultos</span>
          </label>
          <label htmlFor="kids">
            <input
              type="number"
              name="kids"
              max={30}
              min={0}
              defaultValue={0}
              id="kids"
              className="w-9 border-transparent bg-white outline-none focus:outline-none"
            />
            <span className="font-bold">Niños</span>
          </label>
        </div>

        <div className="flex items-center justify-center gap-3 rounded-b-2xl bg-white pl-1 pr-2 md:rounded-none md:rounded-r-3xl">
          <span className="icon-[cbi--roomsother] h-7 w-7 bg-brand" />
          <label htmlFor="rooms">
            <input
              type="number"
              name="rooms"
              max={30}
              min={1}
              defaultValue={1}
              id="rooms"
              className="content w-9 border-transparent bg-white outline-none focus:outline-none"
            />
            <span className="font-bold">Habitaciones</span>
          </label>
        </div>
        <button
          type="submit"
          className="items-center justify-center self-center px-3 font-bold text-white hover:bg-brand-light"
        >
          Buscar
        </button>
      </div>
      <label htmlFor="description" className="h-28 w-full">
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
