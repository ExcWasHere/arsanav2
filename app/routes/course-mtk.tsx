import { useState } from "react";
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Circle,
  BookOpen,
  FileText,
  ChevronDown,
  ChevronUp,
  Clock,
  Award,
  Star,
} from "lucide-react";
const ArsanaCoursePage = () => {
  const [activeTab, setActiveTab] = useState("penjelasan");
  const [expandedLesson, setExpandedLesson] = useState<number | null>(1);

  const courseData = {
    title: "Matematika - Operasi Perkalian",
    subtitle: "Belajar perkalian dengan cara yang menyenangkan!",
    grade: "Kelas 3",
    duration: "5:03",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Dalam materi ini, kamu akan belajar cara melakukan perkalian dengan mudah dan menyenangkan. Mulai dari perkalian sederhana hingga perkalian dengan teknik menyimpan.",
    instructor: "Kak Nizam",
  };

  const lessons = [
    {
      id: 1,
      title: "Pengenalan Perkalian",
      duration: "3:45",
      completed: true,
      topics: ["Apa itu perkalian?", "Simbol kali (x)", "Contoh sederhana"],
    },
    {
      id: 2,
      title: "Perkalian 1-10",
      duration: "5:03",
      completed: false,
      topics: ["Perkalian angka kecil", "Latihan soal", "Tips cepat"],
    },
    {
      id: 3,
      title: "Perkalian dengan Menyimpan",
      duration: "6:20",
      completed: false,
      topics: ["Konsep menyimpan", "Contoh soal", "Praktik mandiri"],
    },
    {
      id: 4,
      title: "Soal Cerita Perkalian",
      duration: "4:55",
      completed: false,
      topics: [
        "Membaca soal cerita",
        "Mengubah ke bentuk matematika",
        "Penyelesaian",
      ],
    },
  ];

  const materialExplanation = `
    Halo teman-teman! Selamat datang di pelajaran Matematika tentang Perkalian! 🎉
    
    Perkalian adalah salah satu operasi dasar dalam matematika yang sangat penting untuk kamu kuasai. 
    
    Apa itu Perkalian?
    Perkalian adalah proses menggabungkan dua bilangan atau lebih menjadi satu bilangan yang lebih besar. Simbol yang digunakan adalah tanda plus (+).
    
    Contoh Sederhana:
    • 2 x 3 = 6 (dibaca: dua dikali tiga sama dengan enam)
    • 5 x 4 = 20 (dibaca: lima dikali empat sama dengan dua puluh)
    
    Tips Belajar:
    1. Mulai dari angka kecil dulu
    2. Gunakan jari atau benda untuk menghitung
    3. Latihan setiap hari agar makin jago!
    4. Jangan takut salah, karena dari kesalahan kita belajar
    
    Yuk, kita tonton video pembelajaran dan praktik bersama! Semangat belajar! 💪📚
  `;

  const transcript = `
    [00:00] Halo adik-adik semua! Selamat datang di video pembelajaran Matematika hari ini.
    
    [00:15] Hari ini kita akan belajar tentang perkalian. Perkalian itu mudah loh!
    
    [00:30] Kalau kamu punya 2 apel, terus dapat 3 apel lagi, berapa total apelnya?
    
    [00:45] Betul! Jawabannya adalah 5 apel. Karena 2 + 3 = 5
    
    [01:00] Sekarang kita coba dengan angka yang lebih besar ya...
    
    [01:15] Misalnya, 5 + 4 berapa hasilnya?
    
    [01:30] Mari kita hitung bersama-sama. Lima... ditambah satu menjadi enam...
    
    [01:45] Ditambah satu lagi menjadi tujuh... delapan... sembilan!
    
    [02:00] Jadi 5 + 4 = 9. Mudah kan?
    
    [02:15] Tips dari Ibu guru, kalau kamu kesulitan menghitung, boleh pakai jari loh!
    
    [02:30] Atau bisa juga pakai benda-benda di sekitarmu seperti pensil atau buku.
    
    [02:45] Yang penting adalah kamu memahami konsepnya.
    
    [03:00] Perkalian itu artinya menggabungkan atau menambahkan.
    
    [03:15] Sekarang waktunya latihan! Siapkan buku dan alat tulismu.
    
    [03:30] Yuk kita coba soal pertama: 3 + 2 = ...?
    
    [03:45] Tulis jawabanmu di buku ya! Sudah selesai?
    
    [04:00] Jawabannya adalah 5! Kalau kamu benar, tepuk tangan untuk dirimu sendiri!
    
    [04:15] Sekarang kita coba yang lebih menantang. 7 + 6 = ...?
    
    [04:30] Hitung pelan-pelan, tidak perlu terburu-buru.
    
    [04:45] Sudah dapat? Jawabannya adalah 13!
    
    [05:00] Nah, sampai di sini dulu ya pelajaran kita hari ini. Jangan lupa latihan di rumah!
    
    [05:15] Sampai jumpa di video berikutnya! Tetap semangat belajar! Bye bye! 👋
  `;

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="text-gray-600" size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {courseData.title}
                </h1>
                <p className="text-sm text-gray-500">{courseData.grade}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-blue-50 px-4 py-2 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">
                    {courseData.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/30">
              <div className="aspect-video bg-gray-900">
                <video
                  src="/NIZAM.mp4"
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {courseData.subtitle}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {courseData.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                          NZ
                        </div>
                        <span>{courseData.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm text-gray-600 ml-1">
                          (4.9)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab("penjelasan")}
                      className={`pb-3 px-2 font-semibold transition-all duration-300 ${
                        activeTab === "penjelasan"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <BookOpen size={18} />
                        <span>Penjelasan Materi</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab("transkrip")}
                      className={`pb-3 px-2 font-semibold transition-all duration-300 ${
                        activeTab === "transkrip"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <FileText size={18} />
                        <span>Transkrip Video</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="prose max-w-none">
                  {activeTab === "penjelasan" && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {materialExplanation}
                      </div>
                    </div>
                  )}

                  {activeTab === "transkrip" && (
                    <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-mono text-sm">
                        {transcript}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/30 sticky top-24">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Daftar Materi
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{lessons.length} video pembelajaran</span>
                  <span>•</span>
                  <span>1 dari {lessons.length} selesai</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${(1 / lessons.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
                {lessons.map((lesson) => (
                  <div key={lesson.id}>
                    <div
                      onClick={() =>
                        setExpandedLesson(
                          expandedLesson === lesson.id ? null : lesson.id
                        )
                      }
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        lesson.completed
                          ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg"
                          : "bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {lesson.completed ? (
                            <CheckCircle2
                              className="text-green-500"
                              size={20}
                            />
                          ) : (
                            <Circle className="text-gray-400" size={20} />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className={`font-semibold text-sm ${
                                lesson.completed
                                  ? "text-green-700"
                                  : "text-gray-800"
                              }`}
                            >
                              {lesson.title}
                            </span>
                            {expandedLesson === lesson.id ? (
                              <ChevronUp size={16} className="text-gray-400" />
                            ) : (
                              <ChevronDown
                                size={16}
                                className="text-gray-400"
                              />
                            )}
                          </div>

                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock size={12} />
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {expandedLesson === lesson.id && (
                        <div className="mt-3 ml-8 space-y-2">
                          {lesson.topics.map((topic, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-xs text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span>{topic}</span>
                            </div>
                          ))}

                          <button className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold py-2 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2">
                            <Play size={14} />
                            <span>Tonton Video</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-yellow-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      Lanjutkan belajar!
                    </p>
                    <p className="text-xs text-gray-600">
                      Selesaikan semua untuk dapat lencana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArsanaCoursePage;