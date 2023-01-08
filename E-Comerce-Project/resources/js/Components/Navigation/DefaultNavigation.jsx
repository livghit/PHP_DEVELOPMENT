import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DefaultNavigation() {
  return (
    <div>
      <ul className="hidden gap-5 md:flex md:visible">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ohrringe">Ohrringe</Link>
        </li>
        <li>
          <Link href="/armbaender">Armbander</Link>
        </li>
        <li>
          <Link href="/halsketten">Halsketten</Link>
        </li>
        <li>
          <Link href="/sets">Sets</Link>
        </li>
      </ul>
    </div>
  );
}
