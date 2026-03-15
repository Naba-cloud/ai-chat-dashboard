type Props = {
  title: string
  children: React.ReactNode
}

export default function SettingSection({ title, children }: Props) {

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h3 className="font-semibold mb-4">
        {title}
      </h3>

      {children}

    </div>

  )

}
