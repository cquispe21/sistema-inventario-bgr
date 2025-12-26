import { useState } from "react";
import LoginClient from "../../utils/Clients/LoginClient";
export default function LoginIndex() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    await loginAsync(email, password);
  };

  const loginAsync = async (email: string, password: string) => {
    try {
      const response = await LoginClient.post("Auth/iniciaSesionAsync", {
        correoElectronico: email,
        hashContrasena:password,
      });
      const token = response.data.data.token;
      localStorage.setItem("token_bgr", token);
        window.location.href = "/productos";
    } catch (error) {
      console.error("Error during login:", error);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-slate-900">Iniciar sesión</h1>
          <p className="mt-1 text-sm text-slate-600">
            Ingresa tu correo y contraseña para continuar
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Correo
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm
                         outline-none focus:ring-2 focus:ring-slate-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm
                         outline-none focus:ring-2 focus:ring-slate-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm
                       hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Entrar
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Inventario BGR
        </div>
      </div>
    </div>
  );
}
