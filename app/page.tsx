'use client'
  
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
  
  export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to Your New Website!
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          This is just a sample page to get you started.
        </p>
      </div>

      <div className="relative flex place-items-center my-16">
        <div className="text-center max-w-2xl">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">
            Ready to Create Your Own Website?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-4 mb-4">
            It's easy! Just start chatting with our AI assistant below.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 mb-8">
            Tell it what kind of website you want, and it will help you build it - no technical knowledge required!
          </p>
        </div>
      </div>

      <div className="mb-32 text-center max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>How to Begin</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>Look for the chat box at the bottom of your screen</li>
              <li>Type what you want your website to be about</li>
              <li>The AI will guide you through creating your perfect website</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-6">
              Don't worry about technical details - our AI assistant will handle everything for you!
            </p>
          </CardContent>
        </Card>
      </div>
    </main>


  )
  }