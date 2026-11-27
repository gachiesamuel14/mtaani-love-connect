"use client";

import { useState } from "react";

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Kiambu", "Machakos", "Uasin Gishu", "Kakamega", "Nyeri", "Kilifi"
];

const mockProfiles = [
  { id: 1, name: "Amina", age: 25, county: "Nairobi", bio: "Love hiking Ngong Hills and trying new restaurants in Westlands.", interests: ["Hiking", "Food", "Music"], distance: "2.3 km" },
  { id: 2, name: "Brian", age: 28, county: "Mombasa", bio: "Beach lover, coding by day, dhow rides by evening.", interests: ["Beach", "Tech", "Travel"], distance: "5.1 km" },
  { id: 3, name: "Wanjiku", age: 23, county: "Kiambu", bio: "Student mode: studying, coffee dates, and Sheng vibes.", interests: ["Coffee", "Books", "Sheng"], distance: "1.8 km" },
  { id: 4, name: "David", age: 30, county: "Kisumu", bio: "Professional in the lakeside. Looking for genuine connections.", interests: ["Business", "Sports", "Family"], distance: "8.4 km" },
  { id: 5, name: "Faith", age: 26, county: "Nakuru", bio: "Church mode on Sundays, adventure the rest of the week.", interests: ["Faith", "Adventure", "Cooking"], distance: "12 km" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [locationGranted, setLocationGranted] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [matches, setMatches] = useState<typeof mockProfiles>([]);

  const filteredProfiles = mockProfiles.filter(p => 
    selectedCounty === "All" || p.county === selectedCounty
  );

  const currentProfile = filteredProfiles[currentIndex % filteredProfiles.length];

  const handleLike = () => {
    if (currentProfile) {
      setMatches([...matches, currentProfile]);
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handlePass = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocationGranted(true),
        () => alert("Location access denied. You can still browse by county.")
      );
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Mtaani Love</h1>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="text-gray-600">Karibu! 🇰🇪</span>
            <button className="text-rose-600 font-medium">Login</button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Connect with people <span className="text-rose-600">nearby</span> in Kenya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Location-based matchmaking. Swipe, match, and chat with singles in your county or town.
            Supporting Nairobi, Mombasa, Kisumu, Kiambu and more.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">📍 Location Matching</h3>
              {!locationGranted ? (
                <button 
                  onClick={requestLocation}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition"
                >
                  Enable GPS Location
                </button>
              ) : (
                <span className="text-green-600 font-medium">✅ Location enabled – showing nearby</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by County</label>
              <select 
                value={selectedCounty}
                onChange={(e) => { setSelectedCounty(e.target.value); setCurrentIndex(0); }}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="All">All Counties</option>
                {counties.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </section>

        {currentProfile && (
          <section className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto mb-8">
            <div className="h-80 bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center relative">
              <div className="text-white text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                  {currentProfile.name[0]}
                </div>
                <p className="text-sm opacity-80">Photo placeholder</p>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentProfile.distance} away
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{currentProfile.name}, {currentProfile.age}</h3>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentProfile.county}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{currentProfile.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProfile.interests.map(int => (
                  <span key={int} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">
                    {int}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handlePass}
                  className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
                >
                  Pass
                </button>
                <button 
                  onClick={handleLike}
                  className="flex-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                >
                  Like ❤️
                </button>
              </div>
            </div>
          </section>
        )}

        {matches.length > 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Your Matches 💕</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {matches.map(m => (
                <div key={m.id} className="text-center p-4 border rounded-xl hover:shadow-md transition">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
                    {m.name[0]}
                  </div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.county}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">Chat feature coming soon!</p>
          </section>
        )}

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "📍", title: "GPS Matching", desc: "Find people near you in your county or town" },
            { icon: "💬", title: "Real-time Chat", desc: "Message your matches instantly" },
            { icon: "🇰🇪", title: "Kenyan Vibes", desc: "County filters, Sheng support, M-Pesa ready" },
          ].map(f => (
            <div key={f.title} className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="font-bold text-lg mb-2">{f.title}</h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </section>

        <footer className="text-center text-gray-500 text-sm py-8">
          <p>Mtaani Love Connect • Built for Kenya • Safety first • Report & Block features included</p>
          <p className="mt-2">Premium features & M-Pesa payments coming soon</p>
        </footer>
      </main>
    </div>
  );
}
