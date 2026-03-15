import DashboardLayout from "@/components/layout/DashboardLayout"
import PromptCard from "@/components/prompts/PromptCard"

export default function PromptsPage(){

return(

<DashboardLayout>

<h1 className="text-2xl font-bold mb-6">
Prompt Library
</h1>

<div className="grid grid-cols-3 gap-6">

<PromptCard
title="Blog Generator"
description="Generate blog posts using AI"
/>

<PromptCard
title="Email Writer"
description="Create professional emails"
/>

<PromptCard
title="Startup Ideas"
description="Generate startup ideas"
/>

</div>

</DashboardLayout>

)

}
