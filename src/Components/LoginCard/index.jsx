import React from "react";

const LoginCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="data:image/png;base64,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"
            alt="Logo"
          />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Bem vindo de volta!
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or criar conta
        </p>

        <form>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Endereço de Email"
              aria-label="Endereço de Email"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Senha"
              aria-label="Senha"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Esqueceu a Senha???
            </a>

            <button
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Não tem uma conta?{" "}
        </span>

        <a
          href="#"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Registrar-se
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
