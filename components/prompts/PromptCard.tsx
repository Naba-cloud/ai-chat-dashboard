type Props = {
  title:string
  description:string
}

export default function PromptCard({title,description}:Props){

return(

<div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">

<h3 className="font-semibold">
{title}
</h3>

<p className="text-sm text-zinc-400 mt-2">
{description}
</p>

<button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">
Use Prompt
</button>

</div>

)

}
