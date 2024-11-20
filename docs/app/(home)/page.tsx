import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      {/* <h1 className="mb-4 text-2xl font-bold">SEED Design</h1> */}
      {/* <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link href="/docs" className="text-fd-foreground font-semibold underline">
          /docs
        </Link>{" "}
        and see the documentation.
      </p> */}
      <img src="/cover.png" alt="SEED Design" className="mt-[60px] rounded-[26px] w-[80%]" />
    </main>
  );
}
