"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Filter, X, Camera, Sparkles, ChevronRight, Grid3x3 } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlassButton } from "@/components/ui/GlassButton";

const categories = ["All", "Infrastructure", "Doctors", "Emergency", "Facilities", "Diagnostics", "Surgery", "Pediatrics", "Patient Care", "Services"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const slides: SlideImage[] = GALLERY_IMAGES.map(img => ({
    src: img.image,
    alt: img.title,
    description: img.description,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            <GlassPanel
              variant="light"
              glow="medium"
              className="w-fit px-5 py-2.5 rounded-full border-white/10 mb-8 mx-auto"
            >
              <div className="flex items-center gap-2.5">
                <Camera className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                  Visual Tour
                </span>
              </div>
            </GlassPanel>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] mb-8">
              Hospital{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Explore our state‑of‑the‑art facilities, advanced medical equipment, and comfortable patient environments through our visual gallery.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "700+", label: "Hospital Beds", color: "from-cyan-500/20 to-blue-500/20" },
                { value: "50+", label: "Medical Departments", color: "from-green-500/20 to-emerald-500/20" },
                { value: "24/7", label: "Emergency Services", color: "from-red-500/20 to-pink-500/20" },
                { value: "150+", label: "Expert Doctors", color: "from-purple-500/20 to-indigo-500/20" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className={`p-6 rounded-2xl text-center bg-gradient-to-br ${stat.color}`}
                  >
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-slate-300/80 text-sm mt-2">{stat.label}</div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <GlassPanel
              variant="strong"
              glow="medium"
              className="p-8 rounded-3xl text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Our Facilities in Pictures</h2>
              <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
                Take a visual journey through Prince Hospital's advanced medical infrastructure and patient care environments.
              </p>
            </GlassPanel>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <GlassPanel
              variant="medium"
              glow="soft"
              className="p-6 rounded-3xl"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <Filter className="h-6 w-6 text-cyan-400" />
                <span className="font-medium text-slate-300 text-lg">Filter by Category:</span>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-glow-md"
                          : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-slate-400">
                  Showing <span className="font-bold text-cyan-400">{filteredImages.length}</span> of {GALLERY_IMAGES.length} images
                </p>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => {
              const globalIndex = GALLERY_IMAGES.findIndex(img => img.id === image.id);
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <GlassPanel
                    variant="medium"
                    glow="soft"
                    className="h-full overflow-hidden rounded-3xl group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={image.image}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <GlassPanel
                          variant="light"
                          className="px-3 py-1.5 rounded-full"
                        >
                          <span className="text-xs font-bold text-cyan-300">{image.category}</span>
                        </GlassPanel>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="text-white"
                        >
                          <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                          <p className="text-slate-300 text-sm line-clamp-2">{image.description}</p>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Grid3x3 size={16} className="text-cyan-400" />
                          <span className="text-sm text-slate-400">Gallery Image</span>
                        </div>
                        <GlassButton
                          variant="secondary"
                          size="sm"
                          className="text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(globalIndex);
                          }}
                        >
                          View Full
                        </GlassButton>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Click to enlarge</span>
                          <ChevronRight size={16} className="text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16"
            >
              <GlassPanel
                variant="strong"
                glow="medium"
                className="p-12 rounded-3xl text-center"
              >
                <Camera className="h-16 w-16 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No Images Found</h3>
                <p className="text-slate-300/90 max-w-md mx-auto mb-8">
                  No images match the selected category. Try selecting a different filter or view all images.
                </p>
                <GlassButton
                  variant="primary"
                  onClick={() => setSelectedCategory("All")}
                >
                  View All Images
                </GlassButton>
              </GlassPanel>
            </motion.div>
          )}

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <GlassPanel
              variant="medium"
              glow="soft"
              className="p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Gallery Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "150+", label: "Medical Images", color: "from-cyan-500/20 to-blue-500/20" },
                  { value: "10", label: "Categories", color: "from-green-500/20 to-emerald-500/20" },
                  { value: "4K", label: "Resolution", color: "from-purple-500/20 to-pink-500/20" },
                  { value: "24/7", label: "Updated", color: "from-amber-500/20 to-orange-500/20" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <GlassPanel
                      variant="light"
                      className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color}`}
                    >
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-slate-300/80 text-sm mt-2">{stat.label}</div>
                    </GlassPanel>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
        plugins={[Zoom, Thumbnails]}
        animation={{ fade: 300, swipe: 300 }}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)" }
        }}
      />
    </div>
  );
}