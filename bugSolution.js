The solution involves making sure that Tailwind CSS has completely generated the necessary CSS before the page is initially rendered. This typically requires configuring your build process (e.g., Next.js or Nuxt.js) to correctly handle Tailwind's JIT mode and ensure that all CSS rules are available during server-side rendering.

Here's a possible solution using Next.js, where we use `getStaticProps` to ensure the CSS generation is complete:
```javascript
// pages/index.js
import { getStaticProps } from 'next';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export async function getStaticProps() {
  // Add any necessary steps here to ensure Tailwind CSS generates the required CSS before the page renders. 
  // For most Next.js projects with JIT mode properly set up, this additional step is usually not needed.
  return {
    props: {},
  };
}
```

In other frameworks, you might use similar techniques to ensure your server-side rendering process waits for the Tailwind CSS compilation to finish.