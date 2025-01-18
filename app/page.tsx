'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Your Website Name</h1>
        </div>
      </header>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Message */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Start Customizing</Badge>
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
            Welcome to Your New Website
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This is your starter template. Use the chat interface below to customize everything - from colors and layout to content and features.
          </p>
          <Button>Edit This Button</Button>
        </div>
        {/* Sample Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Left Section</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a sample card that you can modify. Try asking the AI to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>Change the content</li>
                <li>Add images</li>
                <li>Modify the layout</li>
                <li>Update the styling</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Right Section</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You can also request new features like:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>Contact forms</li>
                <li>Image galleries</li>
                <li>Navigation menus</li>
                <li>Custom sections</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Help Section */}
        <Card className="max-w-2xl mx-auto bg-muted/50">
          <CardHeader>
            <CardTitle className="text-center">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-4">
              Just type what you want to change in the chat below. For example:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>"Change the website colors to blue and white"</p>
              <p>"Add a contact form section"</p>
              <p>"Create a photo gallery"</p>
              <p>"Update the header text"</p>
            </div>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground">
            The AI assistant will help you build your perfect website step by step
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}