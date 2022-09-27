import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="relative text-yellow-200 text-6xl font-semibold">
          <div className="absolute inset-0 bg-sky-500 w-full transform -skew-x-12 -my-4"></div>
          <span className="relative">Create Next App</span>
        </div>
      </div>
    </Layout>
  );
}
