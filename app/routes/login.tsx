import React, { useState } from "react";
import { Eye, EyeOff, Fingerprint, Smartphone, Lock } from "lucide-react";
import { useNavigate } from "react-router";

const ArsanaLogin = () => {
  const navigate = useNavigate(); // <-- buat redirect

  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // fungsi untuk simpan dummy user ke localStorage + redirect
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

  interface BiometricLoginMethod {
    method: "Face ID" | "Fingerprint" | "PIN";
  }

  const handleBiometricLogin = (
    method: BiometricLoginMethod["method"]
  ): void => {
    const dummyUser = {
      id: `biometric_${method.toLowerCase()}`,
      name: `${method} Demo User`,
      email: `${method.toLowerCase()}@demo.arsana`,
      role: "user",
      token: `demo-token-${method}`,
    };

    saveAndRedirect(dummyUser);
  };

  interface SocialLoginProvider {
    provider: "Google" | "Facebook";
  }

  const handleSocialLogin = (
    provider: SocialLoginProvider["provider"]
  ): void => {
    const dummyUser = {
      id: `social_${provider.toLowerCase()}`,
      name: `${provider} Demo User`,
      email: `${provider.toLowerCase()}@demo.arsana`,
      role: "user",
      token: `social-token-${provider}`,
    };

    saveAndRedirect(dummyUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center space-y-1">
            <img
              src="/Arsana.jpg"
              alt="Arsana Logo"
              className="w-64 h-64 rounded-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm mb-4">
              Sudah punya akun? Yuk, langsung masuk!
            </p>
            <h2 className="text-xl font-semibold text-gray-800">
              Masukkan detailmu
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

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              MASUK
            </button>
          </div>

          {/* Biometric Login Options */}
          <div className="mt-6">
            <div className="text-center text-sm text-gray-500 mb-4">
              Masuk sesuai dengan opsi kata sandi yang telah kamu simpan ya!
            </div>

            <div className="flex justify-center space-x-6">
              <button
                onClick={() => handleBiometricLogin("Face ID")}
                className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Smartphone className="text-white" size={24} />
                </div>
                <span className="text-xs text-gray-600">Face ID</span>
              </button>

              <button
                onClick={() => handleBiometricLogin("Fingerprint")}
                className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Fingerprint className="text-white" size={24} />
                </div>
                <span className="text-xs text-gray-600">Fingerprint</span>
              </button>

              <button
                onClick={() => handleBiometricLogin("PIN")}
                className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Lock className="text-white" size={24} />
                </div>
                <span className="text-xs text-gray-600">PIN</span>
              </button>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="text-center text-sm text-gray-500 mb-4">
              atau masuk dengan
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex-1 flex items-center justify-center space-x-2 bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-gray-600 transition-colors"
              >
                <img src="/logoGoogle.png" alt="Google" className="w-7 h-7" />
                <span>Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-900 transition-colors"
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
              <span className="text-cyan-500 hover:underline cursor-pointer">
                Ketentuan
              </span>{" "}
              dan{" "}
              <span className="text-cyan-500 hover:underline cursor-pointer">
                Kebijakan Privasi
              </span>{" "}
              kami.
            </p>
          </div>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <button className="text-cyan-500 hover:underline text-sm font-medium">
              Belum punya akun? DAFTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArsanaLogin;