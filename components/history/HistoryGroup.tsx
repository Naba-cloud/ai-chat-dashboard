import HistoryItem from "./HistoryItem"

type Item = {
  title: string
  time: string
}

type Props = {
  title: string
  items: Item[]
}

export default function HistoryGroup({ title, items }: Props) {

  return (

    <div className="mb-8">

      <h2 className="text-sm text-zinc-400 mb-3">
        {title}
      </h2>

      <div className="space-y-2">

        {items.map((item, index) => (
          <HistoryItem
            key={index}
            title={item.title}
            time={item.time}
          />
        ))}

      </div>

    </div>

  )

}
