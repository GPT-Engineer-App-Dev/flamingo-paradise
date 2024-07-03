import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex flex-col items-center space-y-4 py-8 bg-gray-100">
        <nav className="flex space-x-4">
          <a href="#home" className="text-lg font-medium text-gray-700 hover:text-gray-900">Home</a>
          <a href="#about" className="text-lg font-medium text-gray-700 hover:text-gray-900">About</a>
          <a href="#habitat" className="text-lg font-medium text-gray-700 hover:text-gray-900">Habitat</a>
          <a href="#gallery" className="text-lg font-medium text-gray-700 hover:text-gray-900">Gallery</a>
          <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <h1 className="text-4xl font-bold">Flamingos: The Elegant Birds</h1>
        <p className="text-xl text-gray-600">Discover the beauty and grace of flamingos</p>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center space-y-4 py-16 bg-white">
        <img src="https://placehold.co/1200x600" alt="Flamingos" className="w-full h-auto object-cover" />
        <p className="text-lg text-gray-700 max-w-3xl text-center">
          Flamingos are one of the most beautiful and graceful birds in the world. Known for their striking pink feathers and long legs, they are a sight to behold.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">About Flamingos</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
          <p>Flamingos are a type of wading bird in the family Phoenicopteridae. There are four flamingo species in the Americas and two species in the Old World.</p>
          <p>Flamingos are famous for their bright pink feathers, stilt-like legs, and S-shaped neck. They get their pink color from the carotenoid pigments in their diet of algae and crustaceans.</p>
          <p>These birds are highly social and live in colonies that can number in the thousands. They are known for their synchronized group displays and dances.</p>
        </div>
      </section>

      {/* Habitat Section */}
      <section id="habitat" className="space-y-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Habitat</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
          <p>Flamingos are found in a variety of habitats, including estuaries, saline or alkaline lakes, and coastal lagoons. They are native to Africa, Asia, the Americas, and Europe.</p>
          <p>These birds prefer shallow waters where they can easily find food. They are often seen standing on one leg, which is believed to help them conserve body heat.</p>
          <img src="https://placehold.co/800x400" alt="Flamingo Habitat" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="space-y-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://placehold.co/600x400" alt="Flamingo 1" className="w-full h-auto object-cover" /></CarouselItem>
            <CarouselItem><img src="https://placehold.co/600x400" alt="Flamingo 2" className="w-full h-auto object-cover" /></CarouselItem>
            <CarouselItem><img src="https://placehold.co/600x400" alt="Flamingo 3" className="w-full h-auto object-cover" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center text-lg text-gray-700">
          <p>Email: contact@flamingos.com</p>
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-center text-gray-700">
        <p>&copy; 2023 Flamingos. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;