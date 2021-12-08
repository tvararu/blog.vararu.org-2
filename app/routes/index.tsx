import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export default function Index() {
  return (
    <main>
      <h2>Welcome to Remix!</h2>
      <p>
        Feel free to take a look around the code to see how Remix does things,
        it might be a bit different than what you’re used to. When you're ready
        to dive deeper, we've got plenty of resources to get you up-and-running
        quickly.
      </p>
    </main>
  );
}
