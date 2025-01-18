'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code, Palette, Wand2 } from 'lucide-react'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <Badge className="mb-4" variant="secondary">✨ Welcome to the Future of Web Development</Badge>
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent animate-fade-in">
            Build Your Dream Website
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Create professional websites instantly with AI-powered assistance. No coding required.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Wand2 className="h-12 w-12 text-primary mb-4" />
              <CardTitle>AI-Powered Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Simply describe what you want, and watch as AI transforms your ideas into reality.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>No Code Required</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Focus on your vision while our AI handles all the technical details.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Professional Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get beautiful, responsive designs that look great on all devices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="border-none shadow-xl bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">How to Begin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">1</div>
                <h3 className="font-semibold">Open Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Look for the chat interface at the bottom of your screen
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">2</div>
                <h3 className="font-semibold">Describe Your Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us what kind of website you want to create
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">3</div>
                <h3 className="font-semibold">Watch it Come to Life</h3>
                <p className="text-sm text-muted-foreground">
                  See your website take shape in real-time with AI guidance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}