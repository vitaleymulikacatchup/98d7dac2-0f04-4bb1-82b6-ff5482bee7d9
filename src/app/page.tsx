"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bell, Building, Calendar, ChefHat, Crown, Dumbbell, Flower2, Heart, HelpCircle, Mail, MessageSquare, Sparkles, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Indulge in world-class hospitality with breathtaking views, exceptional service, and unmatched comfort at Grand Vista Hotel."
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.example.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/15447099/pexels-photo-15447099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel exterior at golden hour"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury, creating unforgettable moments for discerning travelers seeking the finest hospitality experience."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to enhance your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind in our award-winning spa with premium treatments and serene atmosphere.",
              icon: Flower2
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our Michelin-starred chef creating exquisite dishes using finest ingredients.",
              icon: ChefHat
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active in our state-of-the-art fitness center with personal trainers and modern equipment available 24/7.",
              icon: Dumbbell
            },
            {
              title: "Concierge Services",
              description: "Our dedicated concierge team ensures every detail of your stay is perfectly arranged and memorable.",
              icon: Bell
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <PricingCardTwo
          title="Luxury Accommodations"
          description="Choose from our carefully curated selection of rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Sparkles}
          plans={[
            {
              id: "standard",
              badge: "Classic Comfort",
              badgeIcon: Building,
              price: "$299/night",
              subtitle: "Perfect for business travelers",
              buttons: [
                { text: "Book Now", href: "https://booking.example.com" },
                { text: "View Details", href: "rooms" }
              ],
              features: [
                "King or twin beds",
                "City view",
                "Marble bathroom",
                "24/7 room service",
                "High-speed WiFi",
                "Mini bar"
              ]
            },
            {
              id: "deluxe",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$449/night",
              subtitle: "Ideal for couples and leisure guests",
              buttons: [
                { text: "Book Now", href: "https://booking.example.com" },
                { text: "View Details", href: "rooms" }
              ],
              features: [
                "Premium king bed",
                "Ocean or mountain view",
                "Spacious bathroom with tub",
                "Priority room service",
                "Complimentary breakfast",
                "Welcome champagne"
              ]
            },
            {
              id: "suite",
              badge: "Ultimate Luxury",
              badgeIcon: Crown,
              price: "$799/night",
              subtitle: "The pinnacle of luxury accommodation",
              buttons: [
                { text: "Book Now", href: "https://booking.example.com" },
                { text: "View Details", href: "rooms" }
              ],
              features: [
                "Separate living room",
                "Panoramic views",
                "Jacuzzi and rain shower",
                "Butler service",
                "Private dining",
                "Exclusive lounge access"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in guest satisfaction"
          tag="Awards"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on reviews and feedback",
              icon: Heart
            },
            {
              id: "2",
              value: "150",
              title: "suites",
              description: "Luxury rooms and suites with premium amenities",
              icon: Building
            },
            {
              id: "3",
              value: "25",
              title: "years",
              description: "Years of exceptional hospitality and service excellence",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers choose Grand Vista Hotel for their most important stays"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              company: "Fortune 500",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Writer",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6973116/pexels-photo-6973116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Wedding Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "CEO",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34490273/pexels-photo-34490273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "David Thompson",
              role: "Investment Banker",
              company: "Premier Capital",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary luxury shuttle service to and from the airport. Please contact our concierge 24 hours in advance to arrange pickup."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature a Michelin-starred restaurant, casual café, rooftop bar, and 24/7 room service. Our culinary team can accommodate special dietary requirements."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer complimentary valet parking for all guests. Self-parking is also available in our secure underground garage."
            },
            {
              id: "5",
              title: "What amenities are included?",
              content: "All rooms include high-speed WiFi, premium bedding, marble bathrooms, mini bar, and 24/7 room service. Suites include additional luxury amenities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive events at Grand Vista Hotel."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "features" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Group Bookings", href: "groups" },
                { label: "Wedding Events", href: "weddings" },
                { label: "Business Center", href: "business" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}