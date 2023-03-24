import { FC } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "./page.module.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

//
//   {/*<div className="col-start-3 col-end-4 flex items-center justify-center">*/}
//   {/*  <div className="text-sm text-zinc-600">*/}
//   {/*    Created by the <b>Next.js</b> team at{" "}*/}
//   {/*    <a href="https://vercel.com">*/}
//   {/*      <b>Vercel</b>*/}
//   {/*    </a>{" "}*/}
//   {/*    and Modified by{" "}*/}
//   {/*    <a href="https://github.com/MDReal32">*/}
//   {/*      <b>MDReal</b>*/}
//   {/*    </a>*/}
//   {/*    .{" "}*/}
//   {/*    <a*/}
//   {/*      className="underline decoration-dotted underline-offset-4"*/}
//   {/*      href="https://github.com/vercel/next.js/tree/canary/examples/with-turbopack"*/}
//   {/*    >*/}
//   {/*      View the original code*/}
//   {/*    </a>*/}
//   {/*    {" and/or "}*/}
//   {/*    <a*/}
//   {/*      className="underline decoration-dotted underline-offset-4"*/}
//   {/*      href="https://github.com/MDReal32/node-boilerplate/tree/master/boilerplates/with-nextjs-nestjs"*/}
//   {/*    >*/}
//   {/*      Modified code*/}
//   {/*    </a>*/}
//   {/*  </div>*/}
//   {/*</div>*/}
// </main>

const Page: FC = () => {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <div className={clsx(styles.description, "text-sm w-full z-20")}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app-by-mdreal&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-2 grid-rows-2 gap-x-4"
          >
            <span className="text-right">Developed By</span>
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </span>
            <span className="text-right">Modified By</span>
            <span>MDReal</span>
          </a>
        </div>
      </div>

      <div className={clsx(styles.center, "flex items-center justify-center py-16")}>
        <Image
          className={clsx(styles.logo, "relative")}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div
          className={clsx(
            styles.thirteen,
            "relative flex items-center justify-center before:animate-spin-reverse-slow"
          )}
        >
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Next.JS Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Next.JS Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://docs.nestjs.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Nest.JS Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Nest.js features and API.
          </p>
        </a>
      </div>
    </main>
  );
};

export default Page;
