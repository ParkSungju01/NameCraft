import SideNav from "@/components/sideNav";

export default function Home() {
  return (
    <div className="flex font-sans">
      <SideNav />
      <main className="flex flex-col gap-4 w-full min-h-screen bg-zinc-200 p-4">
        <center className="flex gap-4">
          <section className="flex flex-col h-150 bg-white rounded-xl grow-2 px-5 py-4 text-black items-start">
            <h2 className="text-xl font-bold">어떤 이름이 필요하세요?</h2>
          </section>
          <section className="h-150 bg-white rounded-xl grow-3"></section>
        </center>
        <footer className="h-full">
          <section className="h-full bg-white rounded-xl"></section>
        </footer>
      </main>
    </div>
  );
}
