import React, { useState } from "react";
import { 
  Home, 
  User, 
  Users, 
  BookOpen, 
  Trophy, 
  Search,
  Award,
  Calendar,
  Puzzle,
  Star,
  ChevronRight,
  Timer,
  BookOpenCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArsanaDashboard = () => {
  const [activeTab, setActiveTab] = useState("Rumah");
  const navigate = useNavigate();
  
  const userData = {
    name: "Nizam",
    exp: 120,
    grade: "NIZAM",
    curriculum: "KELAS 3",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
  };

  const subjects = [
    { 
      name: "Bahasa Indonesia", 
      color: "from-red-400 to-red-500", 
      icon: "📚",
      topics: [],
      isComingSoon: true
    },
    { 
      name: "Matematika", 
      color: "from-blue-500 to-indigo-600", 
      icon: "🔢",
      topics: [
        { name: "Bilangan", subtitle: "Mengenal bilangan cacah hingga 10.000", duration: "4:29", completed: true },
        { name: "Operasi Hitung", subtitle: "Penjumlahan dan perkalian sederhana", duration: "5:03", completed: false },
        { name: "Pola Bilangan", subtitle: "Mencari pola angka (2,4,6,....)", duration: "5:23", completed: false },
        { name: "Data Sederhana", subtitle: "Membaca tabel, grafik, dan gambar", duration: "7:55", completed: false }
      ],
      isComingSoon: false
    },
    { 
      name: "PPKn", 
      color: "from-green-400 to-green-500", 
      icon: "🏛️",
      topics: [],
      isComingSoon: true
    }
  ];

  const games = [
    { name: "Gesture Match", icon: "👋", color: "from-purple-400 to-purple-500" },
    { name: "Story Builder", icon: "📚", color: "from-orange-400 to-orange-500" },
    { name: "Detective", icon: "🔍", color: "from-indigo-400 to-indigo-500" }
  ];

  const badges = [
    { name: "Ahli Kosakata", icon: "📖", earned: true },
    { name: "Master Arsana", icon: "🏆", earned: true },
    { name: "Game Expert", icon: "🎮", earned: false }
  ];

  const navigateToCourse = (subjectName: string) => {
    if (subjectName === "Matematika") {
      navigate("/course-mtk");
    }
  };

  type TabButtonProps = {
    name: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: (name: string) => void;
  };

  const TabButton: React.FC<TabButtonProps> = ({ name, icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(name)}
      className={`flex flex-col items-center py-2 px-2 rounded-xl transition-all duration-300 ${
        isActive 
          ? "text-blue-600 bg-blue-50 shadow-sm" 
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className="text-xs mt-1 font-medium">{name}</span>
    </button>
  );

  type Subject = {
    name: string;
    color: string;
    icon: string;
    topics: {
      name: string;
      subtitle: string;
      duration: string;
      completed: boolean;
    }[];
    isComingSoon: boolean;
  };

  const SubjectCard: React.FC<{ subject: Subject }> = ({ subject }) => (
    <div 
      className={`relative bg-gradient-to-br ${subject.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden`}
      onClick={() => navigateToCourse(subject.name)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full border-8 border-white transform translate-x-8 -translate-y-8"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
              {subject.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{subject.name}</h3>
              {subject.topics.length > 0 && (
                <p className="text-white/80 text-sm">{subject.topics.length} materi tersedia</p>
              )}
            </div>
          </div>
          
          {subject.isComingSoon ? (
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-medium">Coming Soon</span>
            </div>
          ) : (
            <ChevronRight className="text-white/60" size={20} />
          )}
        </div>

        {subject.topics.length > 0 && (
          <div className="space-y-3">
            {subject.topics.slice(0, 2).map((topic, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-sm">{topic.name}</span>
                  <div className="flex items-center space-x-2">
                    {topic.completed && (
                      <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                        <BookOpenCheck size={12} />
                      </div>
                    )}
                    <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
                      <Timer size={10} />
                      <span className="text-xs font-medium">{topic.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">{topic.subtitle}</p>
              </div>
            ))}
            
            {subject.topics.length > 2 && (
              <div className="text-center">
                <span className="text-sm text-white/80">+{subject.topics.length - 2} materi lainnya</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  type Game = {
    name: string;
    icon: string;
    color: string;
  };

  const GameCard: React.FC<{ game: Game }> = ({ game }) => (
    <div className={`bg-gradient-to-br ${game.color} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}>
      <div className="text-3xl mb-3">{game.icon}</div>
      <span className="text-sm font-semibold">{game.name}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium">{userData.curriculum}</p>
                <p className="font-bold text-gray-800 text-lg">{userData.grade}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-2xl shadow-lg">
                <Star size={18} className="text-white" />
                <span className="font-bold">{userData.exp}</span>
                <span className="text-sm opacity-90">EXP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-32">
        {/* Greeting Section with Background Space */}
        <div className="py-8">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-4 border-white"></div>
              <div className="absolute top-12 right-8 w-16 h-16 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-6 left-12 w-12 h-12 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white"></div>
            </div>
            
            {/* Logo Space - you can add Arsana logo here */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold">A</span> {/* Placeholder for Arsana logo */}
              </div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">
                Hai, {userData.name}! 👋
              </h1>
              <p className="text-blue-100 text-lg">Siap belajar hari ini?</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari materi belajarmu disini..."
              className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-300 transition-all duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
            <Calendar size={28} className="mb-3" />
            <span className="font-bold text-lg">Daily Login</span>
            <p className="text-purple-100 text-sm mt-1">Streak: 5 hari</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
            <Puzzle size={28} className="mb-3" />
            <span className="font-bold text-lg">Puzzle</span>
            <p className="text-emerald-100 text-sm mt-1">Level 12</p>
          </div>
        </div>

        {/* Layar Ilmu Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Layar Ilmu</h2>
            <span className="text-blue-600 text-sm font-semibold">Lihat Semua</span>
          </div>
          <div className="space-y-6">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} />
            ))}
          </div>
        </div>

        {/* Arena Pintar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Arena Pintar</h2>
            <span className="text-blue-600 text-sm font-semibold">Lihat Semua</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {games.map((game, index) => (
              <GameCard key={index} game={game} />
            ))}
          </div>
        </div>

        {/* Monthly Badges */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Lencana Bulanan</h2>
            <span className="text-blue-600 text-sm font-semibold">Koleksi</span>
          </div>
          <div className="space-y-4">
            {badges.map((badge, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/30 flex items-center space-x-4 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                  badge.earned ? 'bg-gradient-to-br from-yellow-400 to-orange-400' : 'bg-gray-200'
                }`}>
                  <span className="text-2xl">{badge.icon}</span>
                </div>
                <div className="flex-1">
                  <span className={`font-bold text-lg ${
                    badge.earned ? 'text-gray-800' : 'text-gray-400'
                  }`}>
                    {badge.name}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    {badge.earned ? 'Sudah diraih!' : 'Belum diraih'}
                  </p>
                </div>
                {badge.earned && (
                  <Award className="text-yellow-500" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Special Features */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <div className="w-full h-full rounded-full border-8 border-white transform translate-x-8 -translate-y-8"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-3">Implementasi Bahasa Isyarat</h3>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Belajar berkomunikasi dengan bahasa isyarat untuk membantu teman-teman berkebutuhan khusus
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Mulai Belajar 🤟
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-white/20 px-6 py-4 shadow-2xl">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <TabButton
            name="Beranda"
            icon={<Home size={24} />}
            isActive={activeTab === "Beranda"}
            onClick={setActiveTab}
          />
          <TabButton
            name="Kelas"
            icon={<BookOpen size={24} />}
            isActive={activeTab === "Kelas"}
            onClick={setActiveTab}
          />
          <TabButton
            name="Zona Soal"
            icon={<Trophy size={24} />}
            isActive={activeTab === "Zona Soal"}
            onClick={setActiveTab}
          />
          <TabButton
            name="Teman"
            icon={<Users size={24} />}
            isActive={activeTab === "Teman"}
            onClick={setActiveTab}
          />
          <TabButton
            name="Saya"
            icon={<User size={24} />}
            isActive={activeTab === "Saya"}
            onClick={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default ArsanaDashboard;