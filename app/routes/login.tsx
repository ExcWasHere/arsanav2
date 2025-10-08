import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Fingerprint, Smartphone, Lock, X } from "lucide-react";
import { useNavigate } from "react-router";

const ArsanaLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(true);
  const [comingSoonFeature, setComingSoonFeature] = useState("");
  const [loginData, setLoginData] = useState({
    email: "arsana12@gmail.com",
    password: "12345678",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }

  const saveAndRedirect = (user: User) => {
    localStorage.setItem("arsana_user", JSON.stringify(user));
    console.log("Login demo berhasil:", user);
    navigate("/dashboard", { replace: true });
  };

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      alert("Isi email dan password dulu ya (demo)");
      return;
    }

    const dummyUser = {
      id: "user_001",
      name: "Demo User",
      email: loginData.email,
      role: "user",
      token: "demo-token-12345",
    };

    saveAndRedirect(dummyUser);
  };

  const showComingSoonModal = (feature: string) => {
    setComingSoonFeature(feature);
    setShowComingSoon(true);
  };

  const closeComingSoonModal = () => {
    setShowComingSoon(false);
    setComingSoonFeature("");
  };

  useEffect(() => {
  setShowVideo(true);
}, []);

  return (
<div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-4 relative">
  <div className="w-full max-w-md">
    {/* Logo Section */}
    <div className="text-center mb-8">
      <div className="flex flex-col items-center space-y-1">
        <img
          src="/favicon.ico"
          alt="Arsana Logo"
          className="w-64 h-64 rounded-full object-cover shadow-xl"
        />
      </div>
    </div>

    {/* Login Form Card */}
    <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
      <div className="text-center mb-6">
        <p className="text-gray-600 text-sm mb-4">
          Sudah punya akun? Yuk, langsung masuk!
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          Masukkan email dan kata sandi kamu ya!
        </h2>
      </div>

      <div className="space-y-4">
        {/* Email/Username Input */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Nama pengguna atau email"
            value={loginData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Kata sandi"
            value={loginData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-center space-x-4 relative">
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            MASUK
          </button>

          {/* DIRA */}
          {showVideo && (
            <div className="relative">
              <video
                src="/public/DIRA.mp4"
                autoPlay
                loop
                muted
                className="w-[200px] h-[120px] rounded-xl shadow-lg object-cover"
              />
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Biometric Login Options */}
      <div className="mt-6">
        <div className="text-center text-sm text-gray-500 mb-4">
          Masuk sesuai dengan opsi kata sandi yang telah kamu simpan ya!
        </div>

        <div className="flex justify-center space-x-6">
          {/* Face ID Button */}
          <button
            onClick={() => showComingSoonModal("Face ID")}
            className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-300 transition-all duration-300">
              <Smartphone className="text-white group-hover:animate-pulse" size={24} />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-purple-600 font-medium">Face ID</span>
          </button>

          {/* Fingerprint Button */}
          <button
            onClick={() => showComingSoonModal("Fingerprint")}
            className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-300 transition-all duration-300">
              <Fingerprint className="text-white group-hover:animate-spin" size={24} />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-green-600 font-medium">Fingerprint</span>
          </button>

          {/* PIN Button */}
          <button
            onClick={() => showComingSoonModal("PIN")}
            className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 transform hover:scale-110 hover:rotate-6 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-300 transition-all duration-300">
              <Lock className="text-white group-hover:animate-bounce" size={24} />
            </div>
            <span className="text-xs text-gray-600 group-hover:text-orange-600 font-medium">PIN</span>
          </button>
        </div>
      </div>

      {/* Social Login */}
      <div className="mt-6">
        <div className="text-center text-sm text-gray-500 mb-4">
          atau masuk dengan
        </div>
        <div className="flex space-x-3">
          {/* Google Button */}
          <button
            onClick={() => showComingSoonModal("Google Login")}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-500 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-gray-400 group"
          >
            <img src="/logoGoogle.png" alt="Google" className="w-7 h-7" />
            <span>Google</span>
          </button>

          {/* Facebook Button */}
          <button
            onClick={() => showComingSoonModal("Facebook Login")}
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
          >
            <img src="/logoFacebook.png" alt="Facebook" className="w-7 h-7" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Dengan masuk ke Arsana, kamu menyetujui{" "}
          <button 
            onClick={() => showComingSoonModal("Ketentuan")}
            className="text-cyan-500 hover:underline hover:text-cyan-600 transition-colors"
          >
            Ketentuan
          </button>{" "}
          dan{" "}
          <button 
            onClick={() => showComingSoonModal("Kebijakan Privasi")}
            className="text-cyan-500 hover:underline hover:text-cyan-600 transition-colors"
          >
            Kebijakan Privasi
          </button>{" "}
          kami.
        </p>
      </div>

      {/* Register Link */}
      <div className="mt-4 text-center">
        <button 
          onClick={() => showComingSoonModal("Registrasi")}
          className="text-cyan-500 hover:underline text-sm font-medium hover:text-cyan-600 hover:bg-cyan-50 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Belum punya akun? DAFTAR
        </button>
      </div>
    </div>
  </div>
  {/* Coming Soon Modal */}
  {showComingSoon && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full transform animate-pulse">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            Fitur <span className="font-semibold text-cyan-600">{comingSoonFeature}</span> sedang dalam pengembangan dan akan segera hadir!
          </p>
          <button
            onClick={closeComingSoonModal}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Oke, Ditunggu!
          </button>
        </div>
        <button
          onClick={closeComingSoonModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )}
</div>
  );
};


export default ArsanaLogin;