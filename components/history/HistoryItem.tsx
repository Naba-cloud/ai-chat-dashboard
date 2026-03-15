type Props = {
  title: string
  time: string
}

export default function HistoryItem({ title, time }: Props) {

  return (

    <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 cursor-pointer">

      <p className="text-sm">
        {title}
      </p>

      <span className="text-xs text-zinc-400">
        {time}
      </span>

    </div>

  )

}
