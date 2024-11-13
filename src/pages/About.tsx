
export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
          <header className="bg-blue-600 w-full py-8 text-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </header>
    
          <section className="mt-8 w-full max-w-4xl px-4">
            <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
            <p className="text-gray-600 mt-4">
              We are a group of travel enthusiasts passionate about showcasing the beauty of our city and beyond. Our mission is to connect travelers with the hidden gems and well-known destinations that define the heart of tourism.
            </p>
    
            <h2 className="mt-8 text-2xl font-semibold text-gray-700">Our Team</h2>
            <p className="text-gray-600 mt-4">
              Our team consists of experienced travel guides, cultural experts, and locals who strive to create the best possible travel experiences. We believe that travel is not just about seeing places, but about creating memories that last a lifetime.
            </p>
          </section>
        </div>
      );
    };
