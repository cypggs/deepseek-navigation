import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Search, Cpu, Grid } from "lucide-react"
import Link from "next/link"

const sites = [
  {
    name: "DeepSeek",
    url: "https://chat.deepseek.com/",
    description: "Advanced AI chat model for natural conversations",
    icon: <Bot className="w-5 h-5" />,
    category: "Chat",
  },
  {
    name: "秘塔AI搜索",
    url: "https://metaso.cn/",
    description: "Intelligent search engine powered by AI",
    icon: <Search className="w-5 h-5" />,
    category: "Search",
  },
  {
    name: "纳米AI搜索",
    url: "https://www.n.cn/",
    description: "AI-powered search and discovery platform",
    icon: <Search className="w-5 h-5" />,
    category: "Search",
  },
  {
    name: "硅基流动",
    url: "https://cloud.siliconflow.cn/",
    description: "Cloud computing and AI solutions",
    icon: <Cpu className="w-5 h-5" />,
    category: "Cloud",
  },
  {
    name: "英伟达NIM",
    url: "https://build.nvidia.com/deepseek-ai/deepseek-r1",
    description: "NVIDIA AI model development platform",
    icon: <Grid className="w-5 h-5" />,
    category: "Development",
  },
    {
    name: "问小白",
    url: "https://www.wenxiaobai.com/chat/200006",
    description: "问小白满血版R1",
    icon: <Grid className="w-5 h-5" />,
    category: "Development",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            AI Navigation
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the best AI tools and resources in one place
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <Link
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:-translate-y-1 duration-300"
            >
              <Card className="h-full border-2 border-transparent transition-colors hover:border-primary/20 hover:bg-secondary/40">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">{site.icon}</div>
                    <Badge variant="secondary" className="font-medium">
                      {site.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{site.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{site.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
