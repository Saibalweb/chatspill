
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ChatSpill</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 hero-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Connect and Chat with
              <span className="gradient-text block mt-2">Unlimited Possibilities</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience seamless communication with ChatSpill. Share messages, media, and create meaningful connections in real-time.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
              alt="ChatSpill App Interface"
              width={1920}
              height={1080}
              className="w-full object-cover"
              // priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent -z-10" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ChatSpill?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Experience real-time messaging with zero lag. Stay connected without delays.
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-secondary/20">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                End-to-end encryption ensures your conversations remain private and secure.
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/20">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Features</h3>
              <p className="text-muted-foreground">
                Share media, files, and express yourself with our extensive feature set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Ready to Start Chatting?</h2>
            <p className="text-muted-foreground text-lg">
              Join millions of users who trust ChatSpill for their communication needs.
            </p>
            <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90">
              Create Free Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold">ChatSpill</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ChatSpill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
