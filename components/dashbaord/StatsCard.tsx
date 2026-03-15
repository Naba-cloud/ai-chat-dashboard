type Props = {
  title: string
  value: string
}

export default function StatCard({title,value}:Props){

  return(

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>

    </div>

  )

}
