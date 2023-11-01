import Link from "next/link";

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
  
  async function getData() {
    const randomId = randomIntFromInterval(1, 200);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function News() {
    const data = await getData() as { 
        userId: number,
        id: number,
        title: string,
        completed: boolean,
       };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href={"/"}>Go Back</Link>
                </p>
                <p>Serverside fetched data on request:  {data?.title}</p>
            </div>
        </main>
    )
}