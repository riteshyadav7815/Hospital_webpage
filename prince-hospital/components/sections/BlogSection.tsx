"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const blogPosts = [
  {
    id: 1,
    title: "Advances in Cardiac Surgery: Minimally Invasive Techniques",
    excerpt: "Learn about the latest minimally invasive cardiac procedures that reduce recovery time and improve patient outcomes.",
    image: "/images/hero-slide1.jpg",
    category: "Cardiology",
    author: "Dr. Rajesh Kumar",
    date: "Apr 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Neurological Disorders: Early Detection & Treatment",
    excerpt: "Early detection of neurological conditions can significantly improve treatment outcomes. Learn about warning signs.",
    image: "/images/hero-slide2.jpg",
    category: "Neurology",
    author: "Dr. Priya Sharma",
    date: "Apr 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Pediatric Care During Monsoon: Preventing Common Illnesses",
    excerpt: "Essential tips for parents to protect children from monsoon-related illnesses and when to seek medical help.",
    image: "/images/hero-slide3.jpg",
    category: "Pediatrics",
    author: "Dr. Sunita Reddy",
    date: "Apr 5, 2024",
    readTime: "4 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Health Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-primary">Health News</span> & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Stay informed with the latest medical research, health tips, and hospital updates from our expert doctors.
            </p>
          </div>
          <Button size="lg" variant="outline" className="mt-6 md:mt-0 px-8 py-6 text-lg rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Blog Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-primary text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Subscribe to Our Health Newsletter</h3>
                <p className="text-white/90">
                  Get weekly health tips, medical insights, and hospital updates directly in your inbox.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-white/70 text-sm mt-4">
                  By subscribing, you agree to our Privacy Policy. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}