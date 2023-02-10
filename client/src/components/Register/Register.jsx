export default function Register() {
  return (
    <div className="flex items-center justify-center h-full-body">
      <form className="flex flex-col gap-y-6 text-xl">
        <input
          name="name"
          placeholder="Name"
          className="bg-transparent border border-button px-4 py-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-transparent border border-button px-4 py-2 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-transparent border border-button px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="rounded-full bg-button rounded self-center px-4 py-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
