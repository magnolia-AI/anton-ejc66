'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-medium">Company Name</h1>
          <Button variant="ghost">Menu</Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
          Welcome to Your Website
        </h2>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          Create something amazing with our easy-to-use website builder.
        </p>
        <Button size="lg">Get Started</Button>
      </section>
      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background/50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Section One</h3>
              <p className="text-muted-foreground">
                Add your content here. Customize this section using the chat below.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Section Two</h3>
              <p className="text-muted-foreground">
                Add your content here. Customize this section using the chat below.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Section Three</h3>
              <p className="text-muted-foreground">
                Add your content here. Customize this section using the chat below.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}